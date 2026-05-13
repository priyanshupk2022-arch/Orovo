import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-neon-green selection:text-black">
      {/* Header / Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-semibold tracking-wider uppercase">
          System Compromised. Deploying Countermeasures.
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto uppercase">
          Human Firewalls Are <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">Dead</span>.
          <br />
          The <span className="text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]">AI Swarm</span> Is Here.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Legacy security is a sieve. Deploy an autonomous, self-healing network defense that outsmarts threats before they even breach the perimeter.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-lg rounded-sm transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] uppercase tracking-wide">
            Deploy Now
          </button>
          <button className="px-8 py-4 bg-transparent border border-gray-600 hover:border-gray-400 text-white font-bold text-lg rounded-sm transition-all uppercase tracking-wide">
            View Live Attacks
          </button>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="px-6 py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wider">
            Choose Your <span className="text-green-400">Arsenal</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Basic Tier */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col relative group hover:border-green-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Basic Shield</h3>
              <div className="text-4xl font-extrabold text-white mb-6">
                $50<span className="text-lg text-gray-500 font-normal">/mo</span>
              </div>
              <p className="text-gray-400 mb-8 flex-grow">
                Essential automated defense for small perimeters.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Real-time IP Scanning
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Basic Heuristics
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Community Threat Intel
                </li>
              </ul>
              <button className="w-full py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold uppercase transition-colors">
                Initialize
              </button>
            </div>

            {/* Pro Tier */}
            <div className="bg-zinc-900 border border-green-500 p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Pro Engine</h3>
              <div className="text-4xl font-extrabold text-white mb-6">
                $100<span className="text-lg text-gray-500 font-normal">/mo</span>
              </div>
              <p className="text-gray-400 mb-8 flex-grow">
                Full-throttle AI analysis for mid-sized operations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Advanced Payload Analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Predictive Threat Modeling
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  24/7 Swarm Updates
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Automated Countermeasures
                </li>
              </ul>
              <button className="w-full py-3 bg-green-500 text-black hover:bg-green-400 font-bold uppercase transition-colors shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                Initialize Pro
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col relative group hover:border-red-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Enterprise</h3>
              <div className="text-4xl font-extrabold text-white mb-6">
                $500<span className="text-lg text-gray-500 font-normal">/mo</span>
              </div>
              <p className="text-gray-400 mb-8 flex-grow">
                Military-grade autonomous defense network.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Custom AI Model Training
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Zero-Day Prediction Engine
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Dedicated Security Analysts
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Unlimited Ingestion API
                </li>
              </ul>
              <button className="w-full py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold uppercase transition-colors">
                Contact Command
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-600 text-sm">
        <p>OR0V0 // SYSTEM ONLINE // NO UNAUTHORIZED ACCESS</p>
      </footer>
    </main>
  );
}
