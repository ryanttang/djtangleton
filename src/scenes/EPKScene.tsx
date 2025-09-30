"use client"
import CRTCard from "@/components/cards/CRTCard"
import CRTImage from "@/components/media/CRTImage"

export default function EPKScene({ intercepted }: { intercepted?: boolean }) {
  return (
    <section className="h-dvh w-dvw grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <CRTCard className="p-6">
        <h3 className="text-3xl font-boldonse rgb-split mb-2">Bio</h3>
        <p className="text-white/80">LA-based DJ blending house, breaks, and glitchy VHS textures...</p>
        <a download href="/epk/one-sheet.pdf" className="underline text-accent-cyan mt-4 inline-block">Download One-Sheet</a>
      </CRTCard>
      <div className="grid grid-cols-2 gap-4">
        <CRTImage src="/images/portrait1.jpg" alt="Portrait" />
        <CRTImage src="/images/portrait2.jpg" alt="Press" />
        <CRTImage src="/images/live1.jpg" alt="Live" />
        <CRTImage src="/images/live2.jpg" alt="Live 2" />
      </div>
    </section>
  )
}
