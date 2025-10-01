import HomeScene from "@/scenes/HomeScene"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Tangleton DJ Official Site",
  description: "Welcome to Tangleton's official website. Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce. Watch QUITPLAYING series, view EPK, and book for events.",
  keywords: [
    "Tangleton",
    "DJ Tangleton",
    "Vietnamese American DJ",
    "LA DJ",
    "Los Angeles DJ",
    "QUITPLAYING series",
    "DJ booking",
    "House music",
    "Trap music",
    "Electronic music",
    "wavy blends",
    "groove and bounce"
  ],
  openGraph: {
    title: "Tangleton - Vietnamese American LA-based DJ",
    description: "Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce. Watch QUITPLAYING series, view EPK, and book for events.",
    images: [
      {
        url: "/images/tangletonwhite.png",
        width: 1200,
        height: 630,
        alt: "Tangleton DJ Logo",
      },
    ],
  },
  twitter: {
    title: "Tangleton - Vietnamese American LA-based DJ",
    description: "Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce. Watch QUITPLAYING series, view EPK, and book for events.",
    images: ["/images/tangletonwhite.png"],
  },
}

export default function Page() {
  return <HomeScene />
}
