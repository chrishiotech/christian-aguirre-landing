import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Christian Aguirre - Remote Frontend Architect & AI Automation',
  description: 'Presentación unificada de mis 4 dimensiones profesionales: Arquitecto Frontend, Consultor Técnico, Líder Técnico y Especialista en IA.',
  keywords: 'Frontend Architect, AI Automation, Technical Consultant, Tech Lead, MicroFrontends, React, Angular, Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
