import type { Metadata } from "next";
import { Inter, Playfair_Display, Permanent_Marker } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { StatusModal } from '@/components/restaurant-status/StatusModal';

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: 'Grab - Restaurant Burgers Gourmet à Dakar',
  description: 'Découvrez Grab, le restaurant de burgers gourmet à Ngor, Dakar. Savourez nos burgers artisanaux, nos grillades premium et nos accompagnements frais dans une ambiance moderne et conviviale.',
  keywords: 'burger, restaurant, Dakar, Ngor, gourmet, grillade, livraison, Sénégal',
  authors: [{ name: 'Grab' }],
  creator: 'Grab',
  publisher: 'Grab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://burgandco.sn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Grab - Restaurant Burgers Gourmet à Dakar',
    description: 'Découvrez Grab, le restaurant de burgers gourmet à Ngor, Dakar. Savourez nos burgers artisanaux, nos grillades premium et nos accompagnements frais.',
    url: 'https://burgandco.sn',
    siteName: 'Grab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grab - Restaurant Burgers Gourmet',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grab - Restaurant Burgers Gourmet à Dakar',
    description: 'Découvrez Grab, le restaurant de burgers gourmet à Ngor, Dakar.',
    images: ['/og-image.png'],
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
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Grab",
  "image": "https://burgandco.sn/logo.png",
  "description": "Restaurant de burgers gourmet et grillades premium à Ngor, Dakar",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ngor Almadies",
    "addressLocality": "Les Almadies",
    "addressRegion": "Dakar",
    "addressCountry": "SN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 14.748555,
    "longitude": -17.507719
  },
  "url": "https://burgandco.sn",
  "telephone": "+221773512197",
  "priceRange": "$$",
  "servesCuisine": ["Burgers", "Grillades", "Fast Food"],
  "openingHours": "Mo-Su 08:30-02:00",
  "sameAs": [
    "https://facebook.com/burgandco",
    "https://instagram.com/burgandco"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${permanentMarker.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-16 w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <StatusModal />
      </body>
    </html>
  );
}
