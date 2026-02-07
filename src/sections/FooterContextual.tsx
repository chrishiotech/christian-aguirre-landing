export default function FooterContextual() {
	return (
		<section
			data-section="footer-contextual"
			className="py-16 px-6 bg-gray-50 border-t border-gray-200"
		>
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
					<div>
						<div className="text-gray-900 font-semibold mb-2">Disponibilidad</div>
						<p>Proyectos remotos · LatAm / USA · Inicio rápido</p>
					</div>
					<div>
						<div className="text-gray-900 font-semibold mb-2">Ubicación</div>
						<p>Acapulco, México · Trabajo remoto global</p>
					</div>
					<div>
						<div className="text-gray-900 font-semibold mb-2">Stack base</div>
						<p>React · Next.js · Angular · TypeScript · MicroFrontends</p>
					</div>
				</div>
			</div>
		</section>
	);
}
