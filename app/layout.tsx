import type { Metadata, Viewport } from 'next'
import { Inter, Silkscreen } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _silkscreen = Silkscreen({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-silkscreen' })

export const metadata: Metadata = {
  title: 'Portfolio OS | Computer Science & IT Security',
  description: 'Interactive OS-themed portfolio for a fresh CS graduate specializing in IT Security and Software Security.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${_inter.variable} ${_silkscreen.variable} font-sans antialiased overflow-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
