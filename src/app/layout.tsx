import type { Metadata } from "next"
import { Inter, Archivo_Narrow, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import VHSFilters from "./_filters/VHSFilters"
import MainNav from "@/components/nav/MainNav"
import AudioPlayer from "@/components/media/AudioPlayer"
import RouterView from "./RouterView"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const archivo = Archivo_Narrow({ subsets: ["latin"], variable: "--font-archivo" })
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-plex" })

// Add Boldonse font
const boldonse = {
  variable: "--font-boldonse",
  style: {
    fontFamily: "Boldonse, sans-serif"
  }
}


export const metadata: Metadata = {
  title: {
    default: "Tangleton - Vietnamese American LA-based DJ | Official Site",
    template: "%s | Tangleton"
  },
  description: "Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce. Bookings, mixes, gigs, and press. Available worldwide.",
  keywords: [
    "Tangleton",
    "DJ Tangleton", 
    "Vietnamese American DJ",
    "LA DJ",
    "Los Angeles DJ",
    "House music",
    "Trap music",
    "Electronic music",
    "DJ booking",
    "QUITPLAYING series",
    "WHATUDO series",
    "AFTERTHEAFTERS series",
    "SoundCloud DJ",
    "YouTube DJ",
    "Instagram DJ",
    "TikTok DJ",
    "ISOULATION",
    "WAVY.FM",
    "Down Bad Party",
    "STIIIZY",
    "Riot Games",
    "Toasty Radio"
  ],
  authors: [{ name: "Tangleton" }],
  creator: "Tangleton",
  publisher: "Tangleton",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tangleton.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tangleton.com',
    siteName: 'Tangleton',
    title: 'Tangleton - Vietnamese American LA-based DJ',
    description: 'Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce.',
    images: [
      {
        url: '/images/tangletonwhite.png',
        width: 1200,
        height: 630,
        alt: 'Tangleton DJ Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tangleton - Vietnamese American LA-based DJ',
    description: 'Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce.',
    images: ['/images/tangletonwhite.png'],
    creator: '@tangleton',
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
  children
}: { 
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} ${plex.variable} ${boldonse.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Boldonse:wght@400&display=swap" rel="stylesheet" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff00ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tangleton" />
        <link rel="apple-touch-icon" href="/images/tangletonwhite.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/tangletonwhite.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/tangletonwhite.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tangleton",
              "alternateName": "DJ Tangleton",
              "description": "Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce",
              "url": "https://tangleton.com",
              "image": "https://tangleton.com/images/tangletonwhite.png",
              "sameAs": [
                "https://instagram.com/tangleton",
                "https://tiktok.com/@djtangleton",
                "https://soundcloud.com/tangleton",
                "https://youtube.com/@tangleton"
              ],
              "jobTitle": "DJ",
              "worksFor": {
                "@type": "Organization",
                "name": "Tangleton"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "California",
                "addressCountry": "US"
              },
              "knowsAbout": [
                "House music",
                "Trap music", 
                "Electronic music",
                "DJ mixing",
                "Music production"
              ],
              "genre": [
                "House",
                "Trap", 
                "Rap",
                "R&B",
                "Jersey Club",
                "Baile Funk",
                "Afrobeats",
                "Future Beats",
                "Phonk",
                "Hip Hop"
              ]
            })
          }}
        />
        
        {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual measurement ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body className="body-crt">
        <VHSFilters />
        <MainNav />
        <RouterView>
          {children}
        </RouterView>
        <AudioPlayer />
      </body>
    </html>
  )
}
