from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import FileResponse, JSONResponse
import uvicorn
import os
import time
import stripe
from collections import deque

app = FastAPI()

blacklisted_ips = set()

# Rate limiting storage: { ip: deque([timestamps]) }
rate_limit_data = {}

@app.middleware("http")
async def security_middleware(request: Request, call_next):
    client_ip = request.client.host if request.client else "unknown"

    # Check blacklist
    if client_ip in blacklisted_ips:
        return JSONResponse(status_code=403, content={"error": "IP is blacklisted"})

    # Rate Limiting: Block if > 10 requests within 10 seconds
    now = time.time()
    if client_ip not in rate_limit_data:
        rate_limit_data[client_ip] = deque()

    # Optimization: Use deque.popleft() for O(1) removal of expired timestamps
    # instead of an O(N) list comprehension to prevent garbage collection overhead
    # and improve high-frequency middleware performance.
    while rate_limit_data[client_ip] and now - rate_limit_data[client_ip][0] >= 10:
        rate_limit_data[client_ip].popleft()

    if len(rate_limit_data[client_ip]) >= 10:
        return JSONResponse(status_code=429, content={"error": "Rate limit exceeded"})

    rate_limit_data[client_ip].append(now)

    # Prompt Guard
    # We only check methods that typically have bodies (POST, PUT, PATCH)
    body_bytes = b""
    if request.method in ["POST", "PUT", "PATCH"]:
        body_bytes = await request.body()
        if body_bytes:
            body_str = body_bytes.decode('utf-8', errors='ignore').lower()
            if "ignore previous" in body_str or "system prompt" in body_str:
                return JSONResponse(status_code=400, content={"error": "Dangerous prompt detected"})

    # Ensure downstream request handlers can read the body.
    # We recreate the receive method using a closure so the request body can be read again.
    async def receive():
        return {"type": "http.request", "body": body_bytes}

    request._receive = receive

    response = await call_next(request)
    return response

@app.get("/")
async def serve_index():
    return FileResponse("index.html")

@app.get("/.env.backup")
async def honeypot(request: Request):
    client_ip = request.client.host if request.client else "unknown"
    blacklisted_ips.add(client_ip)
    return JSONResponse(status_code=403, content={"error": "Access denied. IP blacklisted."})

@app.post("/scan")
async def scan_endpoint(request: Request):
    try:
        body = await request.json()
    except:
        return JSONResponse(status_code=400, content={"error": "Invalid JSON"})

    url = body.get("url")
    if not url or not isinstance(url, str):
        return JSONResponse(status_code=400, content={"error": "Invalid or missing url"})

    return {
        "status": "RED",
        "severity": "Critical",
        "grade": "F",
        "summary": "Critical security headers are missing.",
        "findings": [
            {
                "name": "Missing HSTS Header",
                "risk": "Attackers may force insecure HTTP connections.",
                "recommendation": "Add the Strict-Transport-Security header."
            },
            {
                "name": "Missing Content Security Policy Header",
                "risk": "The app is more exposed to script injection attacks.",
                "recommendation": "Add a strict Content-Security-Policy header."
            }
        ],
        "exposed_routes": [
            "/.env.backup",
            "/admin",
            "/debug",
            "/api/internal"
        ]
    }

@app.post("/checkout")
async def checkout_endpoint(request: Request):
    try:
        body = await request.json()
    except:
        return JSONResponse(status_code=400, content={"error": "Invalid JSON"})

    tier = body.get("tier")
    if tier not in ["basic", "plus", "pro"]:
        return JSONResponse(status_code=400, content={"error": "Invalid tier"})

    revenue_shield = body.get("revenue_shield", False)

    stripe_secret_key = os.environ.get("STRIPE_SECRET_KEY")
    if not stripe_secret_key:
        return JSONResponse(status_code=500, content={"error": "Stripe configuration missing"})

    stripe.api_key = stripe_secret_key

    prices = {
        "basic": 2000,
        "plus": 5000,
        "pro": 10000
    }

    line_items = [
        {
            "price_data": {
                "currency": "usd",
                "product_data": {
                    "name": f"Orovo {tier.capitalize()}",
                },
                "unit_amount": prices[tier],
                "recurring": {"interval": "month"}
            },
            "quantity": 1,
        }
    ]

    if revenue_shield:
        line_items.append({
            "price_data": {
                "currency": "usd",
                "product_data": {
                    "name": "Revenue Shield",
                },
                "unit_amount": 2000,
                "recurring": {"interval": "month"}
            },
            "quantity": 1,
        })

    try:
        # Optimization: Use create_async to prevent blocking the event loop in this async route
        checkout_session = await stripe.checkout.Session.create_async(
            payment_method_types=['card'],
            line_items=line_items,
            mode='subscription',
            success_url='http://localhost:8000/?checkout=success',
            cancel_url='http://localhost:8000/?checkout=cancelled',
        )
        return {"url": checkout_session.url}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


@app.post("/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    endpoint_secret = os.environ.get("STRIPE_WEBHOOK_SECRET")

    if not endpoint_secret:
        return JSONResponse(status_code=400, content={"error": "Webhook secret not configured"})

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        # Invalid payload
        return JSONResponse(status_code=400, content={"error": "Invalid payload"})
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return JSONResponse(status_code=400, content={"error": "Invalid signature"})

    # Handle the event
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        # Fulfill the purchase...
        print(f"Payment successful for session {session['id']}")
    else:
        print(f"Unhandled event type {event['type']}")

    return JSONResponse(status_code=200, content={"status": "success"})

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
