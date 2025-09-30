"use client"
import Image from "next/image"
import CRTCard from "@/components/cards/CRTCard"
import CRTImage from "@/components/media/CRTImage"

export default function EPKScene({ intercepted }: { intercepted?: boolean }) {
  return (
    <section className="min-h-dvh w-dvw p-6 space-y-8">
      {/* Header with Logo */}
      <div className="flex justify-center mb-8">
        <div className="relative w-64 h-32">
          <Image 
            src="/images/tangletonwhite.png" 
            alt="Tangleton" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <CRTImage src="/images/DJimages/DSC02254 Large.jpeg" alt="DJ Performance" />
        <CRTImage src="/images/DJimages/IMG_2511 Large.jpeg" alt="DJ Performance" />
        <CRTImage src="/images/DJimages/rob.img_isoulationdayparty_06.04.2023_325 Large.jpeg" alt="Isolation Day Party" />
        <CRTImage src="/images/DJimages/WID07468_Original Large.jpeg" alt="DJ Performance" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bio Section */}
        <CRTCard className="p-6">
          <h3 className="text-3xl font-bold rgb-split mb-4">Bio</h3>
          <p className="text-white/80 leading-relaxed">
            LA-based DJ blending house, breaks, and glitchy VHS textures into immersive electronic experiences. 
            Known for creating atmospheric soundscapes that transport audiences through analog nostalgia and 
            digital futures. Tangleton&apos;s sets seamlessly weave between genres, creating unique moments that 
            resonate with both underground and mainstream audiences.
          </p>
        </CRTCard>

        {/* Location Section */}
        <CRTCard className="p-6">
          <h3 className="text-3xl font-bold rgb-split mb-4">Location</h3>
          <p className="text-white/80 text-lg">
            Los Angeles, California
          </p>
          <p className="text-white/60 text-sm mt-2">
            Available for bookings worldwide
          </p>
        </CRTCard>

        {/* Venues & Cities */}
        <CRTCard className="p-6">
          <h3 className="text-3xl font-bold rgb-split mb-4">Venues & Cities Played At</h3>
          <div className="space-y-2 text-white/80">
            <p>• Los Angeles, CA</p>
            <p>• San Francisco, CA</p>
            <p>• San Diego, CA</p>
            <p>• Las Vegas, NV</p>
            <p>• Phoenix, AZ</p>
            <p>• Denver, CO</p>
            <p>• Austin, TX</p>
            <p>• Miami, FL</p>
          </div>
        </CRTCard>

        {/* Music Platforms */}
        <CRTCard className="p-6">
          <h3 className="text-3xl font-bold rgb-split mb-4">Music Platforms</h3>
          <div className="space-y-3">
            <a href="#" className="block text-accent-cyan hover:text-cyan-300 transition-colors">
              Soundcloud
            </a>
            <a href="#" className="block text-accent-cyan hover:text-cyan-300 transition-colors">
              YouTube
            </a>
            <a href="#" className="block text-accent-cyan hover:text-cyan-300 transition-colors">
              Mixcloud
            </a>
          </div>
        </CRTCard>

        {/* Social Media */}
        <CRTCard className="p-6 md:col-span-2">
          <h3 className="text-3xl font-bold rgb-split mb-4">Social Media</h3>
          <div className="flex items-center space-x-4">
            <a 
              href="https://instagram.com/tangleton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-cyan hover:text-cyan-300 transition-colors text-lg"
            >
              Instagram @tangleton
            </a>
          </div>
        </CRTCard>

        {/* Download One-Sheet */}
        <CRTCard className="p-6 md:col-span-2">
          <div className="text-center">
            <a 
              download 
              href="/epk/one-sheet.pdf" 
              className="inline-block bg-accent-cyan/20 hover:bg-accent-cyan/30 border border-accent-cyan/50 px-6 py-3 rounded-lg text-accent-cyan transition-colors"
            >
              Download One-Sheet PDF
            </a>
          </div>
        </CRTCard>
      </div>
    </section>
  )
}
