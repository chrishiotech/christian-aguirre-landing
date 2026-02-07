export default function CapabilitiesServices() {
  const dimensions = [
    {
      icon: "🏗️",
      title: "Arquitecto Frontend",
      description:
        "Diseño de ecosistemas distribuidos y MicroFrontends para plataformas globales (+10k usuarios). Especialista en escalabilidad y performance crítica.",
      keywords: [
        "Module Federation",
        "Distributed Systems",
        "Core Web Vitals",
        "Next.js 14",
        "TypeScript",
      ],
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🎯",
      title: "Consultor Técnico",
      description:
        "Metodología 'Piloto Cancelable': diagnósticos de 2-4 semanas con ROI medible, transformando el caos en sistemas controlables.",
      keywords: ["ROI Analysis", "Business Alignment", "Strategic Roadmap", "SME Digitalization"],
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "👥",
      title: "Líder Técnico",
      description:
        "Escalado de células de ingeniería (5 a 25 devs). Mentoría senior y definición de gobernanza técnica mediante ADRs.",
      keywords: ["Team Scaling", "Architecture Governance", "Mentorship", "Technical Standards"],
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🤖",
      title: "Especialista en IA",
      description:
        "Implementación de AI Ops con modelos de bajo costo (DeepSeek). Reducción de hasta 75% en carga manual con enfoque en seguridad.",
      keywords: ["DeepSeek API", "Amazon Q Developer", "Cost Optimization", "AI Pipelines"],
      color: "border-orange-200 bg-orange-50",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-white to-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Arquitectura Técnica y Estrategia Operativa.{" "}
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-gray-600">
          Una identidad coherente forjada en +8 años de ecosistemas distribuidos y consultoría de
          alto impacto.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dimensions.map((dim) => (
            <div
              key={dim.title}
              className={`border-2 ${dim.color} rounded-2xl p-8 transition-shadow duration-300 hover:shadow-xl`}
            >
              <div className="mb-4 text-4xl">{dim.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{dim.title}</h3>
              <p className="mb-6 text-gray-700">{dim.description}</p>

              <div className="flex flex-wrap gap-2">
                {dim.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm"
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
