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
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Impacto Cuantificable
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((ach) => (
            <div key={ach.title} className="rounded-2xl bg-white p-8 text-center shadow-lg">
              <div className="mb-2 text-5xl font-bold text-primary">{ach.metric}</div>
              <div className="mb-3 text-xl font-semibold text-gray-900">{ach.title}</div>
              <div className="text-gray-600">{ach.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
