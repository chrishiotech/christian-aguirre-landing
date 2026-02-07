export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-2xl font-bold text-white">
                CA
              </div>
              <div>
                <div className="text-2xl font-bold">Christian Aguirre</div>
                <div className="text-gray-400">Remote Frontend Architect & AI Automation</div>
              </div>
            </div>

            <p className="mb-8 max-w-md text-gray-400">
              Especializado en arquitecturas frontend escalables, consultoría técnica con ROI
              medible e implementaciones de IA de bajo costo para empresas.
            </p>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Conecta conmigo</h3>
            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/christian-aguirre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 transition hover:text-white"
              >
                <span className="text-lg">💼</span>
                <span>LinkedIn (Perfil Profesional)</span>
              </a>
              <a
                href="https://github.com/chrishiotech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 transition hover:text-white"
              >
                <span className="text-lg">🔧</span>
                <span>GitHub (Código Abierto)</span>
              </a>
              <a
                href="mailto:contacto@christianaguirre.dev"
                className="flex items-center gap-3 text-gray-300 transition hover:text-white"
              >
                <span className="text-lg">✉️</span>
                <span>Email: christian8.aguirre@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Christian Aguirre. Todos los derechos reservados.</p>
          <p className="mt-2">Built with Next.js 14, TypeScript, Tailwind CSS & Vercel.</p>
        </div>
      </div>
    </footer>
  );
}
