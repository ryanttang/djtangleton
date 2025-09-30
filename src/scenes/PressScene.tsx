"use client"
import CRTCard from "@/components/cards/CRTCard"
import CRTImage from "@/components/media/CRTImage"

export default function PressScene({ intercepted }: { intercepted?: boolean }) {
  return (
    <section className="h-dvh w-dvw grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <CRTCard className="p-6">
        <h3 className="text-3xl font-boldonse rgb-split mb-2">Press Kit</h3>
        <p className="text-white/80 mb-4">Download high-resolution images, bio, and press materials for media use.</p>
        <div className="space-y-2">
          <a download href="/epk/one-sheet.pdf" className="block underline text-accent-cyan hover:text-accent-cyan/80">
            Download One-Sheet (PDF)
          </a>
          <a download href="/images/DJimages/DSC02246 Large.jpeg" className="block underline text-accent-cyan hover:text-accent-cyan/80">
            High-Res Portrait 1
          </a>
          <a download href="/images/DJimages/DSC02250 Large.jpeg" className="block underline text-accent-cyan hover:text-accent-cyan/80">
            High-Res Portrait 2
          </a>
        </div>
      </CRTCard>
      
      <div className="grid grid-cols-2 gap-4">
        <CRTImage src="/images/press1.jpg" alt="Press Photo 1" />
        <CRTImage src="/images/press2.jpg" alt="Press Photo 2" />
        <CRTImage src="/images/live1.jpg" alt="Live Performance" />
        <CRTImage src="/images/live2.jpg" alt="Live Performance 2" />
      </div>
    </section>
  )
}