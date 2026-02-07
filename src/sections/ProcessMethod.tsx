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
      description: "Defino alcance, riesgos y una ruta clara. Priorizamos impacto sobre volumen.",
    },
    {
      step: "03",
      title: "Implementación guiada",
      description: "Ejecuto con entregas visibles y decisiones documentadas. Sin sorpresas.",
    },
    {
      step: "04",
      title: "Entrega y medición",
      description: "Medimos resultados, dejamos estándares y una base lista para escalar.",
    },
  ];

  return (
    <section id="method" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Metodología de Creación de Software</h2>
          <p className="mt-4 text-xl text-gray-600">
            Un flujo simple que reduce riesgo y hace el trabajo predecible.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-gray-400">
                Paso {item.step}
              </div>
              <h3 className="mb-4 mt-3 text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
