export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Christian Aguirre</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Remote Frontend Architect & AI Automation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-2">🏗️</div>
            <h3 className="text-xl font-bold mb-2">Arquitecto Frontend</h3>
            <p className="text-gray-600">MicroFrontends, escalabilidad, performance</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-xl font-bold mb-2">Consultor Técnico</h3>
            <p className="text-gray-600">Piloto Cancelable, ROI PYMEs</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-2">👥</div>
            <h3 className="text-xl font-bold mb-2">Líder Técnico</h3>
            <p className="text-gray-600">Escalado equipos, mentoría</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="text-xl font-bold mb-2">Especialista en IA</h3>
            <p className="text-gray-600">DeepSeek/Minimax, ahorro 60% vs GPT-4</p>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Logros Cuantificables</h3>
          <div className="flex space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">-66%</div>
              <div className="text-gray-600">Build Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">+40%</div>
              <div className="text-gray-600">Core Web Vitals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">-75%</div>
              <div className="text-gray-600">Trabajo Manual</div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Stack Tecnológico</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Angular', 'TypeScript', 'Next.js', 'Tailwind', 'Vercel', 
              'MicroFrontends', 'Module Federation', 'DeepSeek', 'Minimax', 
              'AWS', 'GitHub Actions', 'Docker', 'Terraform'].map((tech) => (
              <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://github.com/chrishiotech/technical-portfolio" 
            target="_blank"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition"
          >
            Ver Portafolio Técnico
          </a>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://linkedin.com/in/christian-aguirre" className="text-gray-600 hover:text-black">LinkedIn</a>
            <a href="https://github.com/chrishiotech" className="text-gray-600 hover:text-black">GitHub</a>
            <a href="mailto:christian@aguirre.dev" className="text-gray-600 hover:text-black">Email</a>
          </div>
        </div>
      </div>
    </main>
  );
}
