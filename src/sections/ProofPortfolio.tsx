"use client";
import { useState } from 'react';
export default function ProofPortfolio() {
	const projects = [
		{
			id: 1,
			name: "Angular Enterprise Application",
			businessDescription: "Sistema para empresas grandes que necesita crecer sin volverse lento - como modernizar la infraestructura interna de un banco.",
			technicalDescription: "Aplicación empresarial con Angular 17, lazy-loaded modules, gestión de estado con NgRx, y testing pyramid completo (Jest + Cypress).",
			tech: ["Angular 17", "NgRx", "Jest", "Cypress", "TypeScript Strict"],
			businessValue: ["Escalabilidad garantizada", "Mantenimiento predecible", "Cumplimiento enterprise"],
			link: "https://github.com/chrishiotech/technical-portfolio/tree/main/01-angular-enterprise",
			targetAudience: ["Empresas establecidas", "CTOs", "Arquitectos Enterprise"]
		},
		{
			id: 2,
			name: "Next.js MicroFrontend Platform",
			businessDescription: "Plataforma modular que permite a múltiples equipos trabajar simultáneamente sin bloquearse - como construir una ciudad donde cada barrio se desarrolla independientemente.",
			technicalDescription: "Arquitectura MicroFrontend con Webpack 5 Module Federation, SSR/SSG, optimización de Core Web Vitals, y composición en runtime.",
			tech: ["Next.js 14", "Webpack Module Federation", "TypeScript", "React 18"],
			businessValue: ["Equipos independientes", "Releases frecuentes", "Reducción de riesgos"],
			link: "https://github.com/chrishiotech/technical-portfolio/tree/main/02-nextjs-microfrontend",
			targetAudience: ["Startups que escalan", "Tech Leads", "Empresas con múltiples equipos"]
		},
		{
			id: 3,
			name: "React Native Mobile App",
			businessDescription: "Aplicación móvil que funciona igual en iPhone y Android - una solución para empresas que necesitan llegar a clientes en cualquier dispositivo.",
			technicalDescription: "Aplicación nativa con React Native, arquitectura modular, gestión de estados complejos, y testing en dispositivos reales.",
			tech: ["React Native", "TypeScript", "Expo", "Testing Library"],
			businessValue: ["Desarrollo 2x1 (iOS+Android)", "Actualizaciones en tiempo real", "Experiencia nativa"],
			link: "https://github.com/chrishiotech/technical-portfolio/tree/main/03-react-native-app",
			targetAudience: ["Startups mobile-first", "Product Managers", "Empresas con fuerza de campo"]
		},
		{
			id: 4,
			name: "Low-Cost AI Automation Pipeline",
			businessDescription: "Automatización inteligente que reduce costos operativos hasta 60% - ideal para PYMEs que quieren IA sin el precio de Silicon Valley.",
			technicalDescription: "Pipeline completo con DeepSeek API, backend FastAPI (Python), frontend HTMX, y comparativa de costos vs. OpenAI GPT-4.",
			tech: ["Python", "DeepSeek API", "HTMX", "FastAPI", "Render"],
			businessValue: ["ROI en <2 meses", "Costos predecibles", "Sin dependencia de grandes proveedores"],
			link: "https://github.com/chrishiotech/technical-portfolio/tree/main/04-ai-automation",
			targetAudience: ["PYMEs latinoamericanas", "Founders conscientes de costos", "Empresas en mercados emergentes"]
		}
	];

	// Estado para manejar la pestaña activa de cada proyecto
	const [activeTabs, setActiveTabs] = useState({});

	const toggleTab = (projectId, tabType) => {
		setActiveTabs(prev => ({
			...prev,
			[projectId]: tabType
		}));
	};

	return (
		<section
			id="portfolio"
			className="py-24 px-6 bg-gradient-to-b from-white via-white to-gray-50"
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
					Portafolio Técnico
				</h2>
				<p className="text-xl text-gray-600 text-center mb-16">
					4 proyectos ejecutables que demuestran mis habilidades técnicas y valor de negocio
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					{projects.map((project) => {
						const isBusinessActive = activeTabs[project.id] !== 'technical';
						
						return (
							<div
								key={project.id}
								className="border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white"
							>
								{/* Encabezado del proyecto */}
								<div className="flex justify-between items-start mb-6">
									<h3 className="text-2xl font-bold text-gray-900">
										{project.name}
									</h3>
									<span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
										Proyecto {project.id}
									</span>
								</div>

								{/* Pestañas de selección */}
								<div className="flex border-b border-gray-200 mb-6">
									<button
										onClick={() => toggleTab(project.id, 'business')}
										className={`flex-1 py-3 text-center font-medium transition-colors ${isBusinessActive 
											? 'text-primary border-b-2 border-primary' 
											: 'text-gray-500 hover:text-gray-700'}`}
									>
										💼 Para Empresas / Founders
									</button>
									<button
										onClick={() => toggleTab(project.id, 'technical')}
										className={`flex-1 py-3 text-center font-medium transition-colors ${!isBusinessActive 
											? 'text-primary border-b-2 border-primary' 
											: 'text-gray-500 hover:text-gray-700'}`}
									>
										⚙️ Para Técnicos / CTOs
									</button>
								</div>

								{/* Contenido de pestañas */}
								<div className="mb-6 min-h-[120px]">
									{isBusinessActive ? (
										<div className="space-y-4">
											<p className="text-gray-700 leading-relaxed">
												{project.businessDescription}
											</p>
											<div className="space-y-2">
												{project.businessValue.map((value, index) => (
													<div key={index} className="flex items-start">
														<span className="text-green-500 mr-2 mt-1">✓</span>
														<span className="text-gray-600">{value}</span>
													</div>
												))}
											</div>
											<div className="mt-4 p-3 bg-blue-50 rounded-lg">
												<p className="text-sm text-gray-700">
													<strong>Para:</strong> {project.targetAudience.join(", ")}
												</p>
											</div>
										</div>
									) : (
										<div className="space-y-4">
											<p className="text-gray-700 leading-relaxed">
												{project.technicalDescription}
											</p>
											<div className="flex flex-wrap gap-2">
												{project.tech.map((tech) => (
													<span
														key={tech}
														className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									)}
								</div>

								{/* Enlace a GitHub */}
								<div className="border-t border-gray-100 pt-4 mt-4">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-colors group"
									>
										<span>Ver código en GitHub</span>
										<svg 
											className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
											fill="none" 
											stroke="currentColor" 
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									</a>
								</div>
							</div>
						);
					})}
				</div>

				{/* CTA Principal */}
				<div className="text-center">
					<div className="inline-block p-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl shadow-lg">
						<a
							href="https://github.com/chrishiotech/technical-portfolio"
							target="_blank"
							rel="noopener noreferrer"
							className="block px-10 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1"
						>
							🚀 Explorar los 4 Proyectos Completos en GitHub
						</a>
					</div>
					
					<p className="mt-4 text-gray-500 text-sm">
						Cada proyecto incluye código fuente, documentación técnica y guías de implementación
					</p>
				</div>

				{/* Nota sobre el enfoque dual */}
				<div className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
					<div className="flex items-start">
						<div className="bg-white p-3 rounded-lg shadow-sm mr-4">
							<span className="text-2xl">🎯</span>
						</div>
						<div>
							<h4 className="text-lg font-semibold text-gray-900 mb-2">
								Doble Perspectiva, Doble Impacto
							</h4>
							<p className="text-gray-700">
								Cada proyecto está diseñado para comunicarse tanto con <strong>decision-makers de negocio</strong> 
								(Founders, CEOs) como con <strong>expertos técnicos</strong> (CTOs, Arquitectos). Esta estructura 
								refleja mi experiencia trabajando en ambos mundos: transformando problemas de negocio en arquitecturas 
								técnicas sólidas.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}