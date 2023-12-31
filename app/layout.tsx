import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { ReduxProvider } from './Redux/provider';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Creating Next App for SOFTIC',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
