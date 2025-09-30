import type { Metadata } from "next"
import { Inter, Archivo_Narrow, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import VHSFilters from "./_filters/VHSFilters"
import MainNav from "@/components/nav/MainNav"
import AudioPlayer from "@/components/media/AudioPlayer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const archivo = Archivo_Narrow({ subsets: ["latin"], variable: "--font-archivo" })
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-plex" })

// Add Boldonse font
const boldonse = {
  className: "font-boldonse",
  style: {
    fontFamily: "Boldonse, sans-serif",
  }
}

export const metadata: Metadata = {
  title: "DJ Name — Official Site",
  description: "Bookings, mixes, gigs, and press.",
}

export default function RootLayout({ 
  children, 
  scene 
}: { 
  children: React.ReactNode
  scene: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} ${plex.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Boldonse:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="body-crt">
        <VHSFilters />
        <MainNav />
        {scene}
        {children}
        <AudioPlayer />
      </body>
    </html>
  )
}
