export default function HeroPrimary() {
  return (
    <section className="animate-fade-up flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6 text-center">
      <div className="mb-10">
        <div className="mb-2 text-5xl font-bold text-gray-900">Christian Aguirre</div>
        <div className="text-2xl font-semibold text-primary">
          Senior Frontend Architect & AI Automation
        </div>
        <div className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-500">
          Acapulco, México · 8+ años · Remoto
        </div>
      </div>

      <h1 className="mb-6 text-6xl font-bold leading-tight text-gray-900">
        Arquitectura Frontend Escalable
        <span className="block text-primary">con IA de Bajo Costo</span>
      </h1>

      <p className="mb-12 max-w-2xl text-xl text-gray-700">
        Construyo sistemas frontend para equipos en crecimiento y automatizo procesos repetitivos
        con IA.
      </p>

      {/* CTAs */}
      <div className="mb-16 flex flex-col gap-4 sm:flex-row">
        <a
          href="#portfolio"
          className="rounded-lg bg-primary px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-primary-dark"
        >
          Ver Portafolio Técnico (4 Proyectos)
        </a>
        <a
          href="#contact"
          className="rounded-lg border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-gray-50"
        >
          Contactar para Consultoría
        </a>
      </div>

      {/* Stack rápido */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {["React", "Next.js 14", "Angular 17", "MicroFrontends", "TypeScript", "AI Pipelines"].map(
          (tech) => (
            <span key={tech} className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
              {tech}
            </span>
          )
        )}
      </div>
    </section>
  );
}
