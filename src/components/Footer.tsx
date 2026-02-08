export default function Footer() {
  return (
    <footer id="contact" className="bg-primary px-4 py-12 text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white text-2xl font-bold text-[#1e3a8a]">
                CA
              </div>
              <div className="min-w-0">
                <div className="truncate text-xl font-bold sm:text-2xl">Christian Aguirre</div>
                <div className="text-sm text-slate-300 sm:text-base">
                  Remote Frontend Architect & AI Automation
                </div>
              </div>
            </div>

            <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
              🎯 Especializado en arquitecturas frontend escalables, consultoría técnica con ROI
              medible e implementaciones de IA de bajo costo para empresas.
            </p>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold sm:text-xl">Conecta conmigo</h3>
            <div className="space-y-2 sm:space-y-4">
              <a
                href="https://linkedin.com/in/christian-aguirre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-2 py-1 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <span className="flex-shrink-0 text-lg sm:text-xl">💼</span>
                <span className="text-sm sm:text-base">LinkedIn (Perfil Profesional)</span>
              </a>
              <a
                href="https://github.com/chrishiotech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-2 py-1 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <span className="flex-shrink-0 text-lg sm:text-xl">🔧</span>
                <span className="text-sm sm:text-base">GitHub (Código Abierto)</span>
              </a>
              <a
                href="mailto:contacto@christianaguirre.dev"
                className="flex items-center gap-3 rounded-lg px-2 py-1 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <span className="flex-shrink-0 text-lg sm:text-xl">✉️</span>
                <span className="break-all text-sm sm:text-base">christian8.aguirre@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-slate-200 sm:mt-12 sm:pt-8">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} Christian Aguirre. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs sm:text-sm">
            Built with Next.js 14, TypeScript, Tailwind CSS & Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
