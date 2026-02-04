export default function Home() {
  return (
    <>
      {/* Hero Section - Similar a jokiruiz.com */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            Remote Frontend Architect & AI Automation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Christian Aguirre
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Presentación unificada de mis <span className="text-blue-600 font-semibold">4 dimensiones profesionales</span> en una sola landing page
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#dimensions" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
            >
              Explorar Dimensiones
            </a>
            <a 
              href="https://github.com/chrishiotech/technical-portfolio" 
              target="_blank"
              className="inline-block border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition"
            >
              Ver Portfolio Técnico
            </a>
          </div>
        </div>
      </section>

      {/* 4 Dimensiones Section */}
      <section id="dimensions" className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              4 Dimensiones Profesionales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una síntesis completa basada en +9 documentos/CVs que reflejan mi identidad profesional unificada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Arquitecto Frontend */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Arquitecto Frontend</h3>
              <p className="text-gray-600 mb-4">
                MicroFrontends, escalabilidad, optimización de performance y arquitecturas empresariales
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Next.js</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">TypeScript</span>
              </div>
            </div>
            
            {/* Consultor Técnico */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultor Técnico</h3>
              <p className="text-gray-600 mb-4">
                Metodología Piloto Cancelable, ROI para PYMEs, consultoría técnica predictible y de bajo riesgo
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">ROI Analysis</span>
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">Piloto Cancelable</span>
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">SME Focus</span>
              </div>
            </div>
            
            {/* Líder Técnico */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Líder Técnico</h3>
              <p className="text-gray-600 mb-4">
                Escalado de equipos (5 → 25 devs), mentoría, establecimiento de estándares y mejores prácticas
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full">Team Scaling</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full">Mentorship</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full">Standards</span>
              </div>
            </div>
            
            {/* Especialista en IA */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Especialista en IA</h3>
              <p className="text-gray-600 mb-4">
                IA de bajo costo, automatización, ahorro del 60% vs GPT-4, implementaciones prácticas para PYMEs
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full">DeepSeek</span>
                <span className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full">Minimax</span>
                <span className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logros Cuantificables */}
      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Logros Cuantificables
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resultados concretos y medibles que demuestran impacto real
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-6xl font-bold text-blue-600 mb-4">-66%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build Time</h3>
              <p className="text-gray-600">Reducción en tiempo de construcción de aplicaciones</p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-6xl font-bold text-green-600 mb-4">+40%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Core Web Vitals</h3>
              <p className="text-gray-600">Mejora en métricas de performance web</p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-6xl font-bold text-red-600 mb-4">-75%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trabajo Manual</h3>
              <p className="text-gray-600">Reducción en procesos manuales mediante automatización</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section id="stack" className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Herramientas y tecnologías que domino y aplico en mis proyectos
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'React', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
              { name: 'Angular', category: 'frontend', color: 'bg-red-100 text-red-800' },
              { name: 'TypeScript', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
              { name: 'Next.js', category: 'frontend', color: 'bg-gray-100 text-gray-800' },
              { name: 'Tailwind CSS', category: 'frontend', color: 'bg-teal-100 text-teal-800' },
              { name: 'Vercel', category: 'hosting', color: 'bg-black text-white' },
              { name: 'MicroFrontends', category: 'architecture', color: 'bg-purple-100 text-purple-800' },
              { name: 'Module Federation', category: 'architecture', color: 'bg-purple-100 text-purple-800' },
              { name: 'DeepSeek', category: 'ai', color: 'bg-green-100 text-green-800' },
              { name: 'Minimax', category: 'ai', color: 'bg-green-100 text-green-800' },
              { name: 'AWS', category: 'devops', color: 'bg-orange-100 text-orange-800' },
              { name: 'GitHub Actions', category: 'devops', color: 'bg-gray-100 text-gray-800' },
              { name: 'Docker', category: 'devops', color: 'bg-blue-100 text-blue-800' },
              { name: 'Terraform', category: 'devops', color: 'bg-purple-100 text-purple-800' },
              { name: 'Python', category: 'backend', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'FastAPI', category: 'backend', color: 'bg-teal-100 text-teal-800' },
            ].map((tech) => (
              <div 
                key={tech.name}
                className={`${tech.color} rounded-lg p-4 text-center font-medium shadow-sm hover:shadow-md transition-shadow`}
              >
                {tech.name}
                <div className="text-xs opacity-75 mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="portfolio" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para ver demostraciones prácticas?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Explora mi portfolio técnico con 5 proyectos reales que demuestran mis habilidades
          </p>
          <a 
            href="https://github.com/chrishiotech/technical-portfolio" 
            target="_blank"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
          >
            🌟 Ver Portfolio Técnico Completo
          </a>
          <p className="mt-6 text-sm opacity-75">
            5 proyectos: Angular, Next.js MicroFrontends, React Native, AI Automation, DevOps/IaC
          </p>
        </div>
      </section>
    </>
  )
}
