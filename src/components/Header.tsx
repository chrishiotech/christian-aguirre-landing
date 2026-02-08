"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

// Header.tsx
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-xl font-bold text-white">
            CA
          </div>
          <span className="text-xl font-bold text-[#2563eb] sm:block">Christian Aguirre</span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#portfolio"
            className="flex items-center gap-2 font-medium text-gray-700 hover:text-primary"
          >
            💼 Portafolio
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 font-medium text-gray-700 hover:text-primary"
          >
            📧 Contacto
          </a>
          <a
            href="#portfolio"
            className="rounded-lg bg-primary px-6 py-2 font-medium text-white transition hover:bg-primary-dark"
          >
            📂 Ver Proyectos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-4 px-6 py-4">
            <a
              href="#portfolio"
              className="flex items-center gap-2 py-2 font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              📂 Portafolio
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 py-2 font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              📧 Contacto
            </a>
            <a
              href="#portfolio"
              className="block rounded-lg bg-primary px-6 py-2 text-center font-medium text-white transition hover:bg-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
