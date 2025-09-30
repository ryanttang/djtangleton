import type { Metadata } from "next"
import { Inter, Archivo_Narrow, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import VHSFilters from "./_filters/VHSFilters"
import MainNav from "@/components/nav/MainNav"
import AudioPlayer from "@/components/media/AudioPlayer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const archivo = Archivo_Narrow({ subsets: ["latin"], variable: "--font-archivo" })
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-plex" })

export const metadata: Metadata = {
  title: "DJ Name — Official Site",
  description: "Bookings, mixes, gigs, and press.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} ${plex.variable}`}>
      <body className="body-crt">
        <VHSFilters />
        <MainNav />
        {children}
        <AudioPlayer />
      </body>
    </html>
  )
}
