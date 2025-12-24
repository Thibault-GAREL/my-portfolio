import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thibault GAREL - AI Engineer Portfolio',
  description: 'Portfolio of Thibault GAREL, 4th year engineering student specializing in Data & AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
