export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-2xl">
                CA
              </div>
              <div>
                <div className="text-2xl font-bold">Christian Aguirre</div>
                <div className="text-gray-400">Remote Frontend Architect & AI Automation</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-md">
              Especializado en arquitecturas frontend escalables, consultoría técnica 
              con ROI medible e implementaciones de IA de bajo costo para empresas.
            </p>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Conecta conmigo</h3>
            <div className="space-y-4">
              <a 
                href="https://linkedin.com/in/christian-aguirre" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <span className="text-lg">💼</span>
                <span>LinkedIn (Perfil Profesional)</span>
              </a>
              <a 
                href="https://github.com/chrishiotech" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <span className="text-lg">🔧</span>
                <span>GitHub (Código Abierto)</span>
              </a>
              <a 
                href="mailto:tu-email@ejemplo.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <span className="text-lg">✉️</span>
                <span>Email: contacto@christianaguirre.dev</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Christian Aguirre. Todos los derechos reservados.</p>
          <p className="mt-2">Built with Next.js 14, TypeScript, Tailwind CSS & Vercel.</p>
        </div>
      </div>
    </footer>
  );
}