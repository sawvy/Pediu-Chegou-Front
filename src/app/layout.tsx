import { cn } from '@/utils/tw-merge'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pediu Chegou',
  description: 'Pediu Chegou',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={cn(inter.className, 'min-h-screen flex flex-col')}>
        <main className="flex-grow container mx-auto px-6">{children}</main>
      </body>
    </html>
  )
}
