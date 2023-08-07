import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: "300" })

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Criado por João Gabriel Silva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-100 text-black mb-10`}>{children}</body>
    </html>
  )
}
