import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NeuroMatrix Systems Pvt Ltd - Engineering Intelligence. Powering the Future.',
  description: 'Advanced IT solutions company specializing in AI, Machine Learning, Cloud Infrastructure, DevOps, Enterprise Software Development, Cybersecurity, and Data Engineering.',
  keywords: 'AI, Machine Learning, Cloud Infrastructure, DevOps, Enterprise Software, Cybersecurity, Data Engineering, IT Solutions, India',
  authors: [{ name: 'NeuroMatrix Systems Pvt Ltd' }],
  creator: 'NeuroMatrix Systems Pvt Ltd',
  publisher: 'NeuroMatrix Systems Pvt Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neuromatrix-systems.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NeuroMatrix Systems Pvt Ltd - Engineering Intelligence. Powering the Future.',
    description: 'Advanced IT solutions company specializing in AI, Machine Learning, Cloud Infrastructure, DevOps, Enterprise Software Development, Cybersecurity, and Data Engineering.',
    url: 'https://neuromatrix-systems.com',
    siteName: 'NeuroMatrix Systems Pvt Ltd',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuroMatrix Systems - Engineering Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroMatrix Systems Pvt Ltd - Engineering Intelligence. Powering the Future.',
    description: 'Advanced IT solutions company specializing in AI, Machine Learning, Cloud Infrastructure, DevOps, Enterprise Software Development, Cybersecurity, and Data Engineering.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-nm-bg text-nm-text`}>
        {children}
      </body>
    </html>
  )
}
