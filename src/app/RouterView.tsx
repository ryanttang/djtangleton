"use client"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export default function RouterView({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return <div className="fixed inset-0">{children}</div>

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "url(#vhs-displace)" }}
        animate={{ opacity: 1, filter: "none", transition: { duration: 0.45 } }}
        exit={{ opacity: 0, y: 8, transition: { duration: 0.25 } }}
        className="fixed inset-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
