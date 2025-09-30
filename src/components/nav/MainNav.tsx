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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 border border-white/10 rounded-full px-3 py-2 backdrop-blur">
      <ul className="flex gap-4">
        {items.map(i => (
          <li key={i.href}>
            <Link prefetch href={i.href} className={`text-sm ${path === i.href ? "rgb-split" : "text-white/70 hover:text-white"}`}>
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
