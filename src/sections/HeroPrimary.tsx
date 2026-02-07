export default function HeroPrimary() {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-50 to-white animate-fade-up">
			<div className="mb-10">
				<div className="text-5xl font-bold text-gray-900 mb-2">
					Christian Aguirre
				</div>
				<div className="text-2xl text-primary font-semibold">
					Senior Frontend Architect & AI Automation
				</div>
				<div className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-500">
					Acapulco, México · 8+ años · Remoto
				</div>
			</div>

			<h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
				Arquitectura Frontend Escalable
				<span className="block text-primary">con IA de Bajo Costo</span>
			</h1>

			<p className="text-xl text-gray-700 max-w-2xl mb-12">
				Construyo sistemas frontend para equipos en crecimiento y automatizo
				procesos repetitivos con IA.
			</p>

			{/* CTAs */}
			<div className="flex flex-col sm:flex-row gap-4 mb-16">
				<a
					href="#portfolio"
					className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition shadow-lg"
				>
					Ver Portafolio Técnico (4 Proyectos)
				</a>
				<a
					href="#contact"
					className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-gray-50 transition"
				>
					Contactar para Consultoría
				</a>
			</div>

			{/* Stack rápido */}
			<div className="flex flex-wrap justify-center gap-3 mb-8">
				{[
					"React",
					"Next.js 14",
					"Angular 17",
					"MicroFrontends",
					"TypeScript",
					"AI Pipelines",
				].map((tech) => (
					<span
						key={tech}
						className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
					>
						{tech}
					</span>
				))}
			</div>
		</section>
	);
}
