export default function ProcessMethod() {
	const steps = [
		{
			step: "01",
			title: "Diagnóstico breve",
			description:
				"Reviso contexto, restricciones y objetivos. Alineamos expectativas en lenguaje simple.",
		},
		{
			step: "02",
			title: "Plan de acción",
			description:
				"Defino alcance, riesgos y una ruta clara. Priorizamos impacto sobre volumen.",
		},
		{
			step: "03",
			title: "Implementación guiada",
			description:
				"Ejecuto con entregas visibles y decisiones documentadas. Sin sorpresas.",
		},
		{
			step: "04",
			title: "Entrega y medición",
			description:
				"Medimos resultados, dejamos estándares y una base lista para escalar.",
		},
	];

	return (
		<section id="method" className="py-24 px-6 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				<header className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900">
						Metodología de Creación de Software
					</h2>
					<p className="text-xl text-gray-600 mt-4">
						Un flujo simple que reduce riesgo y hace el trabajo predecible.
					</p>
				</header>

				<ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{steps.map((item) => (
						<li
							key={item.step}
							className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
						>
							<div className="text-sm uppercase tracking-[0.3em] text-gray-400">
								Paso {item.step}
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mt-3 mb-4">
								{item.title}
							</h3>
							<p className="text-gray-700">{item.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
