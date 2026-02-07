export default function FooterContextual() {
  return (
    <section
      data-section="footer-contextual"
      className="border-t border-gray-200 bg-gray-50 px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 text-sm text-gray-600 md:grid-cols-3">
          <div>
            <div className="mb-2 font-semibold text-gray-900">Disponibilidad</div>
            <p>Proyectos remotos · LatAm / USA · Inicio rápido</p>
          </div>
          <div>
            <div className="mb-2 font-semibold text-gray-900">Ubicación</div>
            <p>Acapulco, México · Trabajo remoto global</p>
          </div>
          <div>
            <div className="mb-2 font-semibold text-gray-900">Stack base</div>
            <p>React · Next.js · Angular · TypeScript · MicroFrontends</p>
          </div>
        </div>
      </div>
    </section>
  );
}
