export default function CapabilitiesServices() {
	const dimensions = [
    {
        icon: "🏗️",
        title: "Arquitecto Frontend",
        description: "Diseño de ecosistemas distribuidos y MicroFrontends para plataformas globales (+10k usuarios). Especialista en escalabilidad y performance crítica.",
        keywords: ["Module Federation", "Distributed Systems", "Core Web Vitals", "Next.js 14", "TypeScript"],
        color: "border-blue-200 bg-blue-50",
    },
    {
        icon: "🎯",
        title: "Consultor Técnico",
        description: "Metodología 'Piloto Cancelable': diagnósticos de 2-4 semanas con ROI medible, transformando el caos en sistemas controlables.",
        keywords: ["ROI Analysis", "Business Alignment", "Strategic Roadmap", "SME Digitalization"],
        color: "border-green-200 bg-green-50",
    },
    {
        icon: "👥",
        title: "Líder Técnico",
        description: "Escalado de células de ingeniería (5 a 25 devs). Mentoría senior y definición de gobernanza técnica mediante ADRs.",
        keywords: ["Team Scaling", "Architecture Governance", "Mentorship", "Technical Standards"],
        color: "border-purple-200 bg-purple-50",
    },
    {
        icon: "🤖",
        title: "Especialista en IA",
        description: "Implementación de AI Ops con modelos de bajo costo (DeepSeek). Reducción de hasta 75% en carga manual con enfoque en seguridad.",
        keywords: ["DeepSeek API", "Amazon Q Developer", "Cost Optimization", "AI Pipelines"],
        color: "border-orange-200 bg-orange-50",
    },
];

	return (
		<section className="py-24 px-6 bg-gradient-to-b from-white via-white to-gray-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
					Arquitectura Técnica y Estrategia Operativa.				</h2>
				<p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
					Una identidad coherente forjada en +8 años de ecosistemas distribuidos y consultoría de alto impacto.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{dimensions.map((dim) => (
						<div
							key={dim.title}
							className={`border-2 ${dim.color} rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300`}
						>
							<div className="text-4xl mb-4">{dim.icon}</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								{dim.title}
							</h3>
							<p className="text-gray-700 mb-6">{dim.description}</p>

							<div className="flex flex-wrap gap-2">
								{dim.keywords.map((kw) => (
									<span
										key={kw}
										className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm"
									>
										{kw}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
