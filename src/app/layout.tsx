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
    <html lang="en" className='flex flex-col justify-center items-center'>
      <body className={`${poppins.className} w-[80%] bg-neutral-900 tracking-wide text-gray-200 mb-10`}>
        {children}
      </body>
    </html>
  )
}
