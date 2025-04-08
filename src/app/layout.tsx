import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FreoBus - Discover Web3 Apps',
  description: 'Explore and discover the best Web3 applications on FreoBus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/freobus-logo.svg"
                alt="FreoBus Logo"
                width={200}
                height={50}
                priority
                className="h-8 w-auto"
              />
            </div>
          </div>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 