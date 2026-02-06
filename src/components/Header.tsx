// Header.tsx
export default function Header() {
	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
			<nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl">
						CA
					</div>
					<span className="text-xl font-bold text-gray-900 hidden sm:block">
						Christian Aguirre
					</span>
				</div>

				{/* Navigation */}
				<div className="flex items-center gap-8">
					<a
						href="#portfolio"
						className="text-gray-700 hover:text-primary font-medium"
					>
						Portafolio
					</a>
					<a
						href="#contact"
						className="text-gray-700 hover:text-primary font-medium"
					>
						Contacto
					</a>
					<a
						href="https://github.com/chrishiotech/technical-portfolio"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-medium"
					>
						Ver Proyectos
					</a>
				</div>
			</nav>
		</header>
	);
}
