import type { Metadata } from 'next'
import { Inter, Poppins, Geist_Mono } from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Most commonly used weights
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Recruitment.bg | IT Recruitment Agency Bulgaria',
  description: 'Leading IT recruitment agency in Bulgaria. Connecting companies with top tech talent for permanent, remote, and executive IT positions. 10+ years of experience in tech recruitment.',
  keywords: 'IT recruitment agency, IT hiring, tech recruitment Bulgaria, remote IT jobs, executive search IT, IT jobs Bulgaria',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="en" className={`${poppins.variable} ${geistMono.variable}`}>
  <body className="font-sans antialiased">
    {children}
    {process.env.NODE_ENV === 'production' && <Analytics />}
  </body>
</html>
  )
}