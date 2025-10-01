import PressScene from "@/scenes/PressScene"
import type { Metadata } from "next"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Press & Media - Tangleton DJ Coverage",
  description: "Press coverage, interviews, and media features for Tangleton - Vietnamese American LA-based DJ. Latest news, articles, and press releases.",
  keywords: [
    "Tangleton press",
    "DJ interviews",
    "music media",
    "DJ coverage",
    "music journalism",
    "DJ features",
    "music articles",
    "press releases",
    "media kit",
    "DJ news"
  ],
  openGraph: {
    title: "Tangleton Press & Media - DJ Coverage",
    description: "Press coverage, interviews, and media features for Tangleton - Vietnamese American LA-based DJ. Latest news, articles, and press releases.",
    images: [
      {
        url: "/images/press1.jpg",
        width: 1200,
        height: 630,
        alt: "Tangleton Press Coverage",
      },
    ],
  },
  twitter: {
    title: "Tangleton Press & Media - DJ Coverage",
    description: "Press coverage, interviews, and media features for Tangleton - Vietnamese American LA-based DJ. Latest news, articles, and press releases.",
    images: ["/images/press1.jpg"],
  },
}

export default function PressCanonical() {
  return <PressScene />
}
