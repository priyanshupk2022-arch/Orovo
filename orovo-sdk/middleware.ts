export const orovoMiddleware = (req: any, res: any, next: any) => {
    // Orovo Cybersecurity SDK Middleware
    console.log('[Orovo SDK] Request received:', req.method, req.url);

    // Add custom Orovo headers or validation here
    res.setHeader?.('X-Orovo-Protected', 'true');

    if (next) {
        next();
    }
};

export default orovoMiddleware;
