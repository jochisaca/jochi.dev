import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { PT_Serif } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'jochi.dev — Portfolio',
  description: 'Jochi Saca — portfolio',
}

const serif = PT_Serif({ subsets: ['latin'], weight: ['400','700'], style: ['normal','italic'], display: 'swap', variable: '--font-body' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${serif.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
