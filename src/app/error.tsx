"use client"
import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className="h-dvh w-dvw grid place-items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Content */}
      <div className="text-center max-w-xl relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-boldonse rgb-split mb-4">Error</h1>
          <p className="text-white/80 text-lg mb-4">Something went wrong!</p>
          <p className="text-white/60 text-sm">{error.message}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-md transition-all duration-200 hover:scale-105 backdrop-blur-sm"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-accent-cyan/20 hover:bg-accent-cyan/30 text-accent-cyan border border-accent-cyan/30 rounded-md transition-all duration-200 hover:scale-105 backdrop-blur-sm"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  )
}
