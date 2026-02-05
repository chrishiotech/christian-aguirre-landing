export default function CapabilitiesServices() {
  const dimensions = [
    {
      icon: '🏗️',
      title: 'Arquitecto Frontend',
      description: 'Diseño de arquitecturas escalables, MicroFrontends, optimización de performance y decisiones técnicas para empresas.',
      keywords: ['MicroFrontends', 'Webpack 5', 'Module Federation', 'Performance', 'TypeScript'],
      color: 'border-blue-200 bg-blue-50'
    },
    {
      icon: '🎯',
      title: 'Consultor Técnico',
      description: 'Metodología Piloto Cancelable: proyectos de 4 semanas con ROI medible para startups y PYMEs.',
      keywords: ['Piloto Cancelable', 'ROI Analysis', 'Technical Due Diligence', 'SME Focus'],
      color: 'border-green-200 bg-green-50'
    },
    {
      icon: '👥',
      title: 'Líder Técnico',
      description: 'Escalado de equipos de 5 a 25 desarrolladores, establecimiento de estándares y mentoría senior.',
      keywords: ['Team Scaling', 'Code Reviews', 'Mentorship', 'Technical Standards'],
      color: 'border-purple-200 bg-purple-50'
    },
    {
      icon: '🤖',
      title: 'Especialista en IA',
      description: 'Implementaciones de IA de bajo costo (DeepSeek, Minimax) con ahorros de hasta 60% vs GPT-4.',
      keywords: ['DeepSeek API', 'Minimax', 'AI Pipelines', 'Cost Optimization'],
      color: 'border-orange-200 bg-orange-50'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Mis 4 Dimensiones Profesionales
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Unificando +9 CVs en una identidad coherente y accesible
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dimensions.map((dim) => (
            <div 
              key={dim.title}
              className={`border-2 ${dim.color} rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-4xl mb-4">{dim.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{dim.title}</h3>
              <p className="text-gray-700 mb-6">{dim.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {dim.keywords.map((kw) => (
                  <span key={kw} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm">
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