"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { href: "/", label: "Home" },
  { href: "/epk", label: "EPK" },
  { href: "/mixes", label: "Mixes" },
  { href: "/gigs", label: "Gigs" },
  { href: "/contact", label: "Contact" },
]

export default function MainNav() {
  const path = usePathname()
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 border border-white/10 rounded-full px-6 py-5 sm:px-10 sm:py-6 md:px-12 md:py-8 backdrop-blur">
      <ul className="flex gap-6 sm:gap-10 md:gap-12">
        {items.map(i => (
          <li key={i.href}>
            <Link prefetch href={i.href} className={`font-boldonse text-xl sm:text-2xl md:text-3xl ${path === i.href ? "rgb-split" : "text-white/70 hover:text-white"}`}>
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
