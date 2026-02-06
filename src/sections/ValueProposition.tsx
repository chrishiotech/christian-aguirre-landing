export default function ValueProposition() {
	const achievements = [
		{
			metric: "-66%",
			title: "Build Time",
			description: "Optimización de pipelines de CI/CD",
		},
		{
			metric: "+40%",
			title: "Core Web Vitals",
			description: "Mejora en performance de aplicaciones",
		},
		{
			metric: "-75%",
			title: "Trabajo Manual",
			description: "Automatización con IA de procesos repetitivos",
		},
		{
			metric: "5→25",
			title: "Team Scaling",
			description: "Desarrolladores bajo mi liderazgo técnico",
		},
	];

	return (
		<section className="py-24 px-6 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
					Impacto Cuantificable
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{achievements.map((ach) => (
						<div
							key={ach.title}
							className="text-center p-8 bg-white rounded-2xl shadow-lg"
						>
							<div className="text-5xl font-bold text-primary mb-2">
								{ach.metric}
							</div>
							<div className="text-xl font-semibold text-gray-900 mb-3">
								{ach.title}
							</div>
							<div className="text-gray-600">{ach.description}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
