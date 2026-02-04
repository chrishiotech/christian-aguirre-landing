import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
              Christian Aguirre
            </Link>
            <p className="text-sm text-gray-500">Remote Frontend Architect & AI Automation</p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#dimensions" className="text-gray-700 hover:text-blue-600 transition font-medium">
              4 Dimensiones
            </a>
            <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Logros
            </a>
            <a href="#stack" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Stack
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Contacto
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="mt-4 md:mt-0">
            <a 
              href="https://github.com/chrishiotech/technical-portfolio" 
              target="_blank"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
            >
              Ver Portfolio Técnico
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
