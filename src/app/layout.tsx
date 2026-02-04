import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Christian Aguirre - Remote Frontend Architect & AI Automation',
  description: 'Presentación unificada de mis 4 dimensiones profesionales: Arquitecto Frontend, Consultor Técnico, Líder Técnico y Especialista en IA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
