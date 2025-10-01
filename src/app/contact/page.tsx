import ContactScene from "@/scenes/ContactScene"
import type { Metadata } from "next"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Contact & Booking - Book Tangleton DJ",
  description: "Contact Tangleton for DJ bookings, collaborations, and inquiries. Available for events, parties, venues, and festivals worldwide. Professional DJ services.",
  keywords: [
    "Tangleton contact",
    "DJ booking",
    "book Tangleton",
    "DJ inquiry",
    "event DJ",
    "party DJ",
    "venue booking",
    "collaboration",
    "DJ services",
    "booking inquiry",
    "tangs.email@gmail.com"
  ],
  openGraph: {
    title: "Contact & Booking - Book Tangleton DJ",
    description: "Contact Tangleton for DJ bookings, collaborations, and inquiries. Available for events, parties, venues, and festivals worldwide. Professional DJ services.",
    images: [
      {
        url: "/images/portrait1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Tangleton DJ",
      },
    ],
  },
  twitter: {
    title: "Contact & Booking - Book Tangleton DJ",
    description: "Contact Tangleton for DJ bookings, collaborations, and inquiries. Available for events, parties, venues, and festivals worldwide. Professional DJ services.",
    images: ["/images/portrait1.jpg"],
  },
}

export default function ContactCanonical() {
  return <ContactScene />
}
