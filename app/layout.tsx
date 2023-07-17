import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ToasterProvider } from '@/providers/toast-provider'
import { ModalProvider } from '@/providers/modal-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecom Store',
  description: 'Ecommerce store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
