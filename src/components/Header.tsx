// Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-xl font-bold text-white">
            CA
          </div>
          <span className="hidden text-xl font-bold text-gray-900 sm:block">Christian Aguirre</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <a href="#portfolio" className="font-medium text-gray-700 hover:text-primary">
            Portafolio
          </a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-primary">
            Contacto
          </a>
          <a
            href="https://github.com/chrishiotech/technical-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-6 py-2 font-medium text-white transition hover:bg-primary-dark"
          >
            Ver Proyectos
          </a>
        </div>
      </nav>
    </header>
  );
}
