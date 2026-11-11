import type { Metadata } from 'next';
import './globals.css';
import AppProviders from '@/components/AppProviders';

export const metadata: Metadata = {
  title: 'CV. ADINATA DESIGN | Architecture, Interior, Design and Consultancy',
  description:
    'Website resmi CV ADINATA DESIGN (ADINATA DESIGN AND BUILD). Jasa konsultan arsitektur, desain interior, rancang bangun, dan renovasi rumah tinggal di Yogyakarta, Lampung, Bali, dan Jabodetabek.',
  keywords: [
    'adinata design',
    'adinata design and build',
    'arsitek bantul yogyakarta',
    'jasa arsitek jogja',
    'desain interior yogyakarta',
    'kontraktor rumah jogja lampung',
    'arsitektur tropis modern',
    'cv adinata design',
  ],
  authors: [{ name: 'CV. ADINATA DESIGN' }],
  creator: 'ADINATA DESIGN AND BUILD',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://adinatadesign.co.id',
    title: 'CV. ADINATA DESIGN | Design and Build',
    description:
      'Architecture, Interior, Design and Consultancy. Menghadirkan solusi desain inovatif, fungsional, dan estetis.',
    siteName: 'CV. ADINATA DESIGN',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'CV ADINATA DESIGN - Architecture & Interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV. ADINATA DESIGN | Design & Build',
    description: 'Architecture, Interior, Design and Consultancy.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CV. ADINATA DESIGN',
    alternateName: 'ADINATA DESIGN AND BUILD',
    url: 'https://adinatadesign.co.id',
    description: 'Jasa Konsultansi Arsitektur, Desain Interior, dan Rancang Bangun.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ngentak, Bangunjiwo, Kasihan',
      addressLocality: 'Bantul',
      addressRegion: 'Daerah Istimewa Yogyakarta',
      postalCode: '55184',
      addressCountry: 'ID',
    },
    telephone: '+62-857-8847-7607',
    email: 'cv.adinatadesain@gmail.com',
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#faf9f6] text-zinc-900">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
