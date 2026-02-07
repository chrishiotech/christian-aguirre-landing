export default function DifferentiatorsPhilosophy() {
  return (
    <section id="philosophy" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Filosofía de Trabajo</h2>
        </header>

        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Busco claridad antes de velocidad. Prefiero acuerdos simples, medibles y sostenibles,
            incluso cuando el plazo es corto.
          </p>
          <p>
            No trabajo con humo técnico. Cada decisión tiene un impacto en mantenimiento, equipo y
            costos; por eso documento el porqué, no solo el qué.
          </p>
          <p>
            La calidad no es un extra. Es la forma más directa de proteger el tiempo del negocio y
            del equipo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
