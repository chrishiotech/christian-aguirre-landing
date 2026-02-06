export default function ProofPortfolio() {
	const projects = [
		{
			id: 1,
			name: "Angular Enterprise App",
			description:
				"Aplicación empresarial con NgRx, lazy loading y testing completo.",
			tech: ["Angular 17", "NgRx", "Jest", "Cypress"],
			link: "https://github.com/chrishiotech/technical-portfolio/tree/main/01-angular-enterprise",
		},
		{
			id: 2,
			name: "Next.js MicroFrontend",
			description:
				"Arquitectura MicroFrontend con Webpack 5 Module Federation.",
			tech: ["Next.js 14", "Module Federation", "TypeScript"],
			link: "https://github.com/chrishiotech/technical-portfolio/tree/main/02-nextjs-microfrontend",
		},
		{
			id: 3,
			name: "AI Pipeline de Bajo Costo",
			description: "Automatización con DeepSeek API y ahorro del 60% vs GPT-4.",
			tech: ["Python", "DeepSeek API", "HTMX", "FastAPI"],
			link: "https://github.com/chrishiotech/technical-portfolio/tree/main/04-ai-automation",
		},
	];

	return (
		<section id="portfolio" className="py-24 px-6 bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
					Portafolio Técnico
				</h2>
				<p className="text-xl text-gray-600 text-center mb-16">
					5 proyectos ejecutables que demuestran mis habilidades técnicas
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{projects.map((project) => (
						<div
							key={project.id}
							className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								{project.name}
							</h3>
							<p className="text-gray-700 mb-6">{project.description}</p>

							<div className="flex flex-wrap gap-2 mb-6">
								{project.tech.map((t) => (
									<span
										key={t}
										className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
									>
										{t}
									</span>
								))}
							</div>

							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-primary font-semibold hover:underline"
							>
								Ver código en GitHub →
							</a>
						</div>
					))}
				</div>

				<div className="text-center">
					<a
						href="https://github.com/chrishiotech/technical-portfolio"
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition inline-block"
					>
						Explorar los 5 Proyectos Completos
					</a>
				</div>
			</div>
		</section>
	);
}
