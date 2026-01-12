import React from "react";

const CryptoOwlLight = () => {
	return (
		<div className="min-h-screen bg-[#F9FAFB] text-slate-900 font-sans selection:bg-blue-100">
			{/* Background Decorativo - Mesh Gradient Suave */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-violet-100/50 to-transparent blur-[120px]" />
				<div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-[120px]" />
			</div>

			{/* Main Content */}
			<main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
				{/* Hero Section */}
				<div className="max-w-3xl mb-32">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">
						<span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
						V1.0 Now Live
					</div>

					<h1 className="text-6xl md:text-[84px] font-bold tracking-tight text-slate-950 leading-[0.9] mb-8">
						Intelligence for the <br />
						<span className="text-slate-400">crypto age.</span>
					</h1>

					<p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-12">
						Crypto Owl provides high-fidelity monitoring and curated news for
						digital assets. Simple, fast, and automated.
					</p>

					<div className="flex gap-4">
						<button className="px-6 py-3 rounded-full bg-slate-950 text-white font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
							Get Started
						</button>
						<button className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-600 font-medium hover:border-slate-300 transition-all">
							API Docs
						</button>
					</div>
				</div>

				{/* Features - Railway Style (Bordas Finas e Grid Limpo) */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
					{/* Item 1 */}
					<div className="bg-white p-10 hover:bg-slate-50/50 transition-colors">
						<p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
							01. Monitoring
						</p>
						<h3 className="text-lg font-semibold mb-3 italic">Smart Targets</h3>
						<p className="text-slate-500 text-sm leading-relaxed">
							Set complex price triggers. We watch the charts 24/7 so you don't
							have to.
						</p>
					</div>

					{/* Item 2 */}
					<div className="bg-white p-10 hover:bg-slate-50/50 transition-colors">
						<p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
							02. Insights
						</p>
						<h3 className="text-lg font-semibold mb-3 italic">Curated Feed</h3>
						<p className="text-slate-500 text-sm leading-relaxed">
							Relevant news aggregated by AI based on your specific portfolio
							holdings.
						</p>
					</div>

					{/* Item 3 */}
					<div className="bg-white p-10 hover:bg-slate-50/50 transition-colors md:col-span-2 lg:col-span-1">
						<p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
							03. Alerts
						</p>
						<h3 className="text-lg font-semibold mb-3 italic">
							Instant Delivery
						</h3>
						<p className="text-slate-500 text-sm leading-relaxed">
							Configurable notification frequency across multiple delivery
							channels.
						</p>
					</div>
				</div>

				{/* Minimalist Footer */}
				<footer className="mt-32 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-2 font-bold tracking-tighter text-lg">
						<div className="w-5 h-5 bg-blue-600 rounded-full" />
						CRYPTO OWL
					</div>
					<div className="flex gap-8 text-sm text-slate-400 font-medium">
						<a href="#" className="hover:text-slate-900 transition-colors">
							Twitter
						</a>
						<a href="#" className="hover:text-slate-900 transition-colors">
							Changelog
						</a>
						<a href="#" className="hover:text-slate-900 transition-colors">
							Privacy
						</a>
					</div>
					<p className="text-xs text-slate-400">© 2024 Built for the future.</p>
				</footer>
			</main>
		</div>
	);
};

export default CryptoOwlLight;
