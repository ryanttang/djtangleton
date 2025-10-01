import EPKScene from "@/scenes/EPKScene"
import type { Metadata } from "next"

export const revalidate = 60

export const metadata: Metadata = {
  title: "EPK - Electronic Press Kit",
  description: "Official Electronic Press Kit for Tangleton - Vietnamese American LA-based DJ. Download PDF, view bio, genres, venues played, and booking information.",
  keywords: [
    "Tangleton EPK",
    "DJ EPK",
    "Electronic Press Kit",
    "DJ booking",
    "Tangleton bio",
    "DJ genres",
    "venues played",
    "ISOULATION",
    "WAVY.FM",
    "STIIIZY",
    "Riot Games"
  ],
  openGraph: {
    title: "Tangleton EPK - Electronic Press Kit",
    description: "Official Electronic Press Kit for Tangleton - Vietnamese American LA-based DJ. Download PDF, view bio, genres, venues played, and booking information.",
    images: [
      {
        url: "/images/tangletonwhite.png",
        width: 1200,
        height: 630,
        alt: "Tangleton EPK",
      },
    ],
  },
  twitter: {
    title: "Tangleton EPK - Electronic Press Kit",
    description: "Official Electronic Press Kit for Tangleton - Vietnamese American LA-based DJ. Download PDF, view bio, genres, venues played, and booking information.",
    images: ["/images/tangletonwhite.png"],
  },
}

export default function EPKCanonical() {
  return <EPKScene intercepted={false} />
}
