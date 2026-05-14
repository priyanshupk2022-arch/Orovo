export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Human Firewalls Are <span className="text-red-500">Dead</span>.<br />
          The AI Swarm is <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">Here</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12">
          Autonomous, self-evolving threat detection that neutralizes zero-days before they execute.
          Stop reacting. Start anticipating.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-md transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
            Deploy Swarm Now
          </button>
          <button className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 rounded-md transition-colors font-semibold">
            View Live Attacks
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Defense</h2>
          <p className="text-gray-400">Simple pricing. Uncompromising security.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Tier */}
          <div className="border border-gray-800 bg-gray-900/50 rounded-xl p-8 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Basic Shield</h3>
            <div className="text-4xl font-bold mb-6">$50<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Core Threat Intelligence
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Standard API Limits
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Email Support
              </li>
            </ul>
            <button className="w-full py-3 border border-gray-700 hover:bg-gray-800 rounded-md transition-colors font-semibold">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="border border-green-500/50 bg-black rounded-xl p-8 relative shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold tracking-wide">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-semibold mb-2">Pro Engine</h3>
            <div className="text-4xl font-bold mb-6">$100<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Real-time Swarm Analysis
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Automated Remediation
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Priority 24/7 Support
              </li>
            </ul>
            <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-md transition-colors">
              Upgrade to Pro
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="border border-gray-800 bg-gray-900/50 rounded-xl p-8 hover:border-gray-700 transition-colors flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
            <div className="text-4xl font-bold mb-6">$500<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Custom AI Models
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Unlimited Bandwidth
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Dedicated Success Manager
              </li>
            </ul>
            <button className="w-full py-3 border border-gray-700 hover:bg-gray-800 rounded-md transition-colors font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
