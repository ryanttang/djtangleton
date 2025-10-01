import MixesScene from "@/scenes/MixesScene"
import type { Metadata } from "next"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Mixes - QUITPLAYING, WHATUDO, AFTERTHEAFTERS Series",
  description: "Listen to Tangleton's latest DJ mixes including QUITPLAYING, WHATUDO, and AFTERTHEAFTERS series. House, trap, rap, R&B, and more wavy blends.",
  keywords: [
    "Tangleton mixes",
    "QUITPLAYING series",
    "WHATUDO series", 
    "AFTERTHEAFTERS series",
    "DJ mixes",
    "House mixes",
    "Trap mixes",
    "SoundCloud mixes",
    "YouTube mixes",
    "analog-future",
    "glitch-city-sessions",
    "rgb-nights",
    "vhs-dreams"
  ],
  openGraph: {
    title: "Tangleton Mixes - QUITPLAYING, WHATUDO, AFTERTHEAFTERS Series",
    description: "Listen to Tangleton's latest DJ mixes including QUITPLAYING, WHATUDO, and AFTERTHEAFTERS series. House, trap, rap, R&B, and more wavy blends.",
    images: [
      {
        url: "/images/mix1.jpg",
        width: 1200,
        height: 630,
        alt: "Tangleton DJ Mixes",
      },
    ],
  },
  twitter: {
    title: "Tangleton Mixes - QUITPLAYING, WHATUDO, AFTERTHEAFTERS Series",
    description: "Listen to Tangleton's latest DJ mixes including QUITPLAYING, WHATUDO, and AFTERTHEAFTERS series. House, trap, rap, R&B, and more wavy blends.",
    images: ["/images/mix1.jpg"],
  },
}

export default function MixesCanonical() {
  return <MixesScene />
}
