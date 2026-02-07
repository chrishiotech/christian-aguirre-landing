export default function DifferentiatorsPhilosophy() {
	return (
		<section id="philosophy" className="py-24 px-6 bg-white">
			<div className="max-w-5xl mx-auto">
				<header className="mb-10">
					<h2 className="text-4xl font-bold text-gray-900">
						Filosofía de Trabajo
					</h2>
				</header>

				<div className="space-y-6 text-lg text-gray-700 leading-relaxed">
					<p>
						Busco claridad antes de velocidad. Prefiero acuerdos simples,
						medibles y sostenibles, incluso cuando el plazo es corto.
					</p>
					<p>
						No trabajo con humo técnico. Cada decisión tiene un impacto en
						mantenimiento, equipo y costos; por eso documento el porqué, no solo
						el qué.
					</p>
					<p>
						La calidad no es un extra. Es la forma más directa de proteger el
						tiempo del negocio y del equipo.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						{
							title: "Software Creation Methodology",
							body: "Objetivos claros, entregas visibles y ciclos cortos.",
						},
						{
							title: "Clean Code como norma",
							body: "Legibilidad antes de complejidad. Código que otros puedan mantener.",
						},
						{
							title: "Respeto por el contexto",
							body: "Soluciones ajustadas a presupuesto, equipo y realidad operativa.",
						},
					].map((item) => (
						<div
							key={item.title}
							className="border border-gray-200 rounded-2xl p-6 bg-gray-50"
						>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								{item.title}
							</h3>
							<p className="text-gray-700">{item.body}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
