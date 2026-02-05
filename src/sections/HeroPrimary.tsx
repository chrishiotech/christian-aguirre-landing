export default function HeroPrimary() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Logo/Iniciales */}
      <div className="mb-12">
        <div className="text-5xl font-bold text-gray-900 mb-2">
          Christian Aguirre
        </div>
        <div className="text-2xl text-primary font-semibold">
          Remote Frontend Architect & AI Automation
        </div>
      </div>

      {/* Hero Text */}
      <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Building Scalable Frontends
        <span className="block text-primary">with AI Efficiency</span>
      </h1>
      
      <p className="text-xl text-gray-700 max-w-2xl mb-12">
        8+ años diseñando arquitecturas frontend enterprise. 
        Especializado en MicroFrontends, automatización con IA de bajo costo 
        y metodologías ágiles para startups y empresas.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a 
          href="#portfolio" 
          className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition shadow-lg"
        >
          Ver Portafolio Técnico (5 Proyectos)
        </a>
        <a 
          href="#contact" 
          className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-gray-50 transition"
        >
          Contactar para Consultoría
        </a>
      </div>

      {/* Stack rápido */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {['React', 'Next.js 14', 'Angular 17', 'MicroFrontends', 'TypeScript', 'AI Pipelines'].map((tech) => (
          <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}