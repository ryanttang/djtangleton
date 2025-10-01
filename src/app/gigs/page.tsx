import GigsScene from "@/scenes/GigsScene"
import type { Metadata } from "next"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Gigs & Events - Upcoming DJ Performances",
  description: "Check out Tangleton's upcoming DJ gigs and events. Book Tangleton for your next party, event, or venue. Available for bookings worldwide.",
  keywords: [
    "Tangleton gigs",
    "DJ events",
    "upcoming performances",
    "DJ booking",
    "Los Angeles DJ",
    "party DJ",
    "event DJ",
    "venue booking",
    "club DJ",
    "festival DJ"
  ],
  openGraph: {
    title: "Tangleton Gigs & Events - Upcoming DJ Performances",
    description: "Check out Tangleton's upcoming DJ gigs and events. Book Tangleton for your next party, event, or venue. Available for bookings worldwide.",
    images: [
      {
        url: "/images/live1.jpg",
        width: 1200,
        height: 630,
        alt: "Tangleton Live Performance",
      },
    ],
  },
  twitter: {
    title: "Tangleton Gigs & Events - Upcoming DJ Performances",
    description: "Check out Tangleton's upcoming DJ gigs and events. Book Tangleton for your next party, event, or venue. Available for bookings worldwide.",
    images: ["/images/live1.jpg"],
  },
}

export default function GigsCanonical() {
  return <GigsScene />
}
