import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thibault GAREL - AI Engineer Portfolio | Data & AI Projects',
  description: 'Portfolio of Thibault GAREL, 4th year engineering student at ECE specializing in Data & AI. Explore my AI projects, machine learning applications, computer vision work, and Unity game development.',
  keywords: [
    'Thibault GAREL',
    'AI Engineer',
    'Data Science',
    'Machine Learning',
    'Computer Vision',
    'Deep Learning',
    'AI Portfolio',
    'ECE Engineering',
    'Python Developer',
    'Streamlit',
    'CLIP',
    'Unity AI',
    'Hugging Face',
    'NLP',
    'Image Processing',
    'Data Analysis',
    'Artificial Intelligence'
  ],
  authors: [{ name: 'Thibault GAREL', url: 'https://github.com/Thibault-GAREL' }],
  creator: 'Thibault GAREL',
  publisher: 'Thibault GAREL',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thibault-garel.vercel.app/',
    siteName: 'Thibault GAREL Portfolio',
    title: 'Thibault GAREL - AI Engineer Portfolio',
    description: 'Portfolio showcasing AI and Data Science projects by Thibault GAREL, including computer vision, NLP, and machine learning applications.',
    images: [
      {
        url: 'https://github.com/Thibault-GAREL.png',
        width: 460,
        height: 460,
        alt: 'Thibault GAREL',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Thibault GAREL - AI Engineer Portfolio',
    description: 'Portfolio showcasing AI and Data Science projects',
    images: ['https://github.com/Thibault-GAREL.png'],
  },
  alternates: {
    canonical: 'https://thibault-garel.vercel.app/',
  },
  verification: {
    google: 'OJ2423jIOTyCyRD15jaDaJ-KCgertVt2xc9aIiM6KrA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Thibault GAREL',
    jobTitle: 'AI Engineering Student',
    description: '4th year engineering student at ECE specializing in Data & AI',
    url: 'https://thibault-garel.vercel.app/',
    image: 'https://github.com/Thibault-GAREL.png',
    sameAs: [
      'https://github.com/Thibault-GAREL',
      'https://www.linkedin.com/in/thibaultgarel/',
      'https://huggingface.co/Thibault-GAREL'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'ECE Engineering School'
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Computer Vision',
      'Deep Learning',
      'Natural Language Processing',
      'Python Programming',
      'Unity Game Development'
    ],
    email: 'thibault.garel@edu.ece.fr'
  }

  // Runs before the first paint, so a visitor on the dark theme never sees a
  // flash of the light one. Falls back to the OS preference on a first visit.
  const themeScript = `(function(){try{var s=localStorage.getItem('darkMode');var d=s===null?window.matchMedia('(prefers-color-scheme: dark)').matches:s==='true';if(d){document.documentElement.classList.add('dark')}}catch(e){}})()`

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
