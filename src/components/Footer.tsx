export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Christian Aguirre</h3>
            <p className="text-gray-600 mb-4">
              Remote Frontend Architect & AI Automation
            </p>
            <p className="text-sm text-gray-500">
              Presentando 4 dimensiones profesionales unificadas
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#dimensions" className="block text-gray-600 hover:text-blue-600 transition">4 Dimensiones</a>
              <a href="#achievements" className="block text-gray-600 hover:text-blue-600 transition">Logros</a>
              <a href="#stack" className="block text-gray-600 hover:text-blue-600 transition">Stack Tecnológico</a>
              <a href="https://github.com/chrishiotech/technical-portfolio" target="_blank" className="block text-gray-600 hover:text-blue-600 transition">Portfolio Técnico</a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Conecta</h4>
            <div className="space-y-2">
              <a href="https://linkedin.com/in/christian-aguirre" target="_blank" className="block text-gray-600 hover:text-blue-600 transition">
                LinkedIn
              </a>
              <a href="https://github.com/chrishiotech" target="_blank" className="block text-gray-600 hover:text-blue-600 transition">
                GitHub
              </a>
              <a href="mailto:christian@aguirre.dev" className="block text-gray-600 hover:text-blue-600 transition">
                christian@aguirre.dev
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Christian Aguirre. Todos los derechos reservados.</p>
          <p className="mt-2">Landing Page construida con Next.js 14, TypeScript y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
