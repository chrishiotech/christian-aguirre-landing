"use client";
import { useState } from "react";
export default function ProofPortfolio() {
  const projects = [
    {
      id: 1,
      name: "Angular Enterprise Application",
      businessDescription:
        "Sistema para empresas grandes que necesita crecer sin volverse lento - como modernizar la infraestructura interna de un banco.",
      technicalDescription:
        "Aplicación empresarial con Angular 17, lazy-loaded modules, gestión de estado con NgRx, y testing pyramid completo (Jest + Cypress).",
      tech: ["Angular 17", "NgRx", "Jest", "Cypress", "TypeScript Strict"],
      businessValue: [
        "Escalabilidad garantizada",
        "Mantenimiento predecible",
        "Cumplimiento enterprise",
      ],
      link: "https://github.com/chrishiotech/technical-portfolio/tree/main/01-angular-enterprise",
      targetAudience: ["Empresas establecidas", "CTOs", "Arquitectos Enterprise"],
    },
    {
      id: 2,
      name: "Next.js MicroFrontend Platform",
      businessDescription:
        "Plataforma modular que permite a múltiples equipos trabajar simultáneamente sin bloquearse - como construir una ciudad donde cada barrio se desarrolla independientemente.",
      technicalDescription:
        "Arquitectura MicroFrontend con Webpack 5 Module Federation, SSR/SSG, optimización de Core Web Vitals, y composición en runtime.",
      tech: ["Next.js 14", "Webpack Module Federation", "TypeScript", "React 18"],
      businessValue: ["Equipos independientes", "Releases frecuentes", "Reducción de riesgos"],
      link: "https://github.com/chrishiotech/technical-portfolio/tree/main/02-nextjs-microfrontend",
      targetAudience: ["Startups que escalan", "Tech Leads", "Empresas con múltiples equipos"],
    },
    {
      id: 3,
      name: "React Native Mobile App",
      businessDescription:
        "Aplicación móvil que funciona igual en iPhone y Android - una solución para empresas que necesitan llegar a clientes en cualquier dispositivo.",
      technicalDescription:
        "Aplicación nativa con React Native, arquitectura modular, gestión de estados complejos, y testing en dispositivos reales.",
      tech: ["React Native", "TypeScript", "Expo", "Testing Library"],
      businessValue: [
        "Desarrollo 2x1 (iOS+Android)",
        "Actualizaciones en tiempo real",
        "Experiencia nativa",
      ],
      link: "https://github.com/chrishiotech/technical-portfolio/tree/main/03-react-native-app",
      targetAudience: ["Startups mobile-first", "Product Managers", "Empresas con fuerza de campo"],
    },
    {
      id: 4,
      name: "Low-Cost AI Automation Pipeline",
      businessDescription:
        "Automatización inteligente que reduce costos operativos hasta 60% - ideal para PYMEs que quieren IA sin el precio de Silicon Valley.",
      technicalDescription:
        "Pipeline completo con DeepSeek API, backend FastAPI (Python), frontend HTMX, y comparativa de costos vs. OpenAI GPT-4.",
      tech: ["Python", "DeepSeek API", "HTMX", "FastAPI", "Render"],
      businessValue: [
        "ROI en <2 meses",
        "Costos predecibles",
        "Sin dependencia de grandes proveedores",
      ],
      link: "https://github.com/chrishiotech/technical-portfolio/tree/main/04-ai-automation",
      targetAudience: [
        "PYMEs latinoamericanas",
        "Founders conscientes de costos",
        "Empresas en mercados emergentes",
      ],
    },
  ];

  // Estado para manejar la pestaña activa de cada proyecto
  const [activeTabs, setActiveTabs] = useState<Record<number, "business" | "technical">>({});

  const toggleTab = (projectId: number, tabType: "business" | "technical") => {
    setActiveTabs((prev) => ({
      ...prev,
      [projectId]: tabType,
    }));
  };

  return (
    <section id="portfolio" className="bg-gradient-to-b from-white via-white to-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">Portafolio Técnico</h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          4 proyectos ejecutables que demuestran mis habilidades técnicas y valor de negocio
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const isBusinessActive = activeTabs[project.id] !== "technical";

            return (
              <div
                key={project.id}
                className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-xl"
              >
                {/* Encabezado del proyecto */}
                <div className="mb-6 flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500">
                    Proyecto {project.id}
                  </span>
                </div>

                {/* Pestañas de selección */}
                <div className="mb-6 flex border-b border-gray-200">
                  <button
                    onClick={() => toggleTab(project.id, "business")}
                    className={`flex-1 py-3 text-center font-medium transition-colors ${
                      isBusinessActive
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    💼 Para Empresas / Founders
                  </button>
                  <button
                    onClick={() => toggleTab(project.id, "technical")}
                    className={`flex-1 py-3 text-center font-medium transition-colors ${
                      !isBusinessActive
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    ⚙️ Para Técnicos / CTOs
                  </button>
                </div>

                {/* Contenido de pestañas */}
                <div className="mb-6 min-h-[120px]">
                  {isBusinessActive ? (
                    <div className="space-y-4">
                      <p className="leading-relaxed text-gray-700">{project.businessDescription}</p>
                      <div className="space-y-2">
                        {project.businessValue.map((value, index) => (
                          <div key={index} className="flex items-start">
                            <span className="mr-2 mt-1 text-green-500">✓</span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 rounded-lg bg-blue-50 p-3">
                        <p className="text-sm text-gray-700">
                          <strong>Para:</strong> {project.targetAudience.join(", ")}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="leading-relaxed text-gray-700">
                        {project.technicalDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-gray-800 px-3 py-1 text-sm text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Enlace a GitHub */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <span>Ver código en GitHub</span>
                    <svg
                      className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Principal */}
        <div className="text-center">
          <div className="inline-block rounded-xl bg-gradient-to-r from-primary to-blue-600 p-1 shadow-lg">
            <a
              href="https://github.com/chrishiotech/technical-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="block transform rounded-lg bg-white px-10 py-4 font-semibold text-primary transition-all hover:-translate-y-1 hover:bg-gray-50"
            >
              🚀 Explorar los 4 Proyectos Completos en GitHub
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Cada proyecto incluye código fuente, documentación técnica y guías de implementación
          </p>
        </div>

        {/* Nota sobre el enfoque dual */}
        <div className="mt-16 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
          <div className="flex items-start">
            <div className="mr-4 rounded-lg bg-white p-3 shadow-sm">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                Doble Perspectiva, Doble Impacto
              </h4>
              <p className="text-gray-700">
                Cada proyecto está diseñado para comunicarse tanto con{" "}
                <strong>decision-makers de negocio</strong>
                (Founders, CEOs) como con <strong>expertos técnicos</strong> (CTOs, Arquitectos).
                Esta estructura refleja mi experiencia trabajando en ambos mundos: transformando
                problemas de negocio en arquitecturas técnicas sólidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
