"use client"
import Image from "next/image"
import CRTCard from "@/components/cards/CRTCard"
import CRTImage from "@/components/media/CRTImage"

export default function EPKScene({ intercepted }: { intercepted?: boolean }) {
  return (
    <section 
      className="min-h-dvh w-dvw p-6 pt-24 space-y-8 relative"
      style={{
        backgroundImage: "url('/images/background2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* CRT scanlines */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-10"
        style={{ 
          backgroundImage: "url('/textures/scanlines.png')", 
          mixBlendMode: 'overlay' 
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20">
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
        {/* Bio & Location Section */}
        <CRTCard className="p-6">
          <h3 className="text-3xl font-bold rgb-split mb-4">Bio</h3>
          <p className="text-white/80 leading-relaxed mb-6">
            LA-based DJ blending house, breaks, and glitchy VHS textures into immersive electronic experiences. 
            Known for creating atmospheric soundscapes that transport audiences through analog nostalgia and 
            digital futures. Tangleton&apos;s sets seamlessly weave between genres, creating unique moments that 
            resonate with both underground and mainstream audiences.
          </p>
          <div className="border-t border-white/20 pt-4">
            <h4 className="text-xl font-bold rgb-split mb-2">Location</h4>
            <p className="text-white/80 text-lg">
              Los Angeles, California
            </p>
            <p className="text-white/60 text-sm mt-2">
              Available for bookings worldwide
            </p>
          </div>
        </CRTCard>

        {/* Right Column - Stacked Cards */}
        <div className="space-y-6">
          {/* Cities Played At */}
          <CRTCard className="p-4">
            <h3 className="text-2xl font-bold rgb-split mb-3">Cities Played At</h3>
            <div className="space-y-1 text-white/80 text-sm">
              <p>• Los Angeles, CA</p>
              <p>• Long Beach, CA</p>
              <p>• Shibuya, Japan</p>
            </div>
          </CRTCard>

          {/* Mixes & Social Media */}
          <CRTCard className="p-4">
            <h3 className="text-2xl font-bold rgb-split mb-3">Mixes & Social Media</h3>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://soundcloud.com/tangleton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors text-sm"
              >
                <span className="text-lg">🎵</span>
                <span>SoundCloud</span>
              </a>
              <a 
                href="https://instagram.com/tangleton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors text-sm"
              >
                <span className="text-lg">📷</span>
                <span>Instagram</span>
              </a>
              <a 
                href="https://youtube.com/@tangleton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors text-sm"
              >
                <span className="text-lg">📺</span>
                <span>YouTube</span>
              </a>
              <a 
                href="https://tiktok.com/@djtangleton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors text-sm"
              >
                <span className="text-lg">🎬</span>
                <span>TikTok</span>
              </a>
            </div>
          </CRTCard>
        </div>

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
      </div>
    </section>
  )
}
