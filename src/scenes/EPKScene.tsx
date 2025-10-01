"use client"
import Image from "next/image"
import CRTCard from "@/components/cards/CRTCard"
import CRTImage from "@/components/media/CRTImage"

export default function EPKScene({ intercepted }: { intercepted?: boolean }) {
  const generatePDF = async (type: 'desktop' | 'mobile') => {
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `tangleton-epk-${type}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    }
  }
  return (
    <div className="h-dvh w-dvw relative">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/vhsbackground.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
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
      <section className="relative z-20 h-full w-full p-6 pt-24 space-y-8 overflow-y-auto md:overflow-hidden">
      {/* Header with Logo and Download Buttons */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative w-64 h-32">
          <Image 
            src="/images/tangletonwhite.png" 
            alt="Tangleton" 
            fill 
            className="object-contain"
          />
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => generatePDF('mobile')}
            className="relative inline-flex items-center justify-center px-4 py-2 font-semibold bg-black border border-fuchsia-500/60 text-white rounded-md transition-transform hover:translate-y-[-1px] active:translate-y-[0px] shadow-[0_0_0_1px_#0ff_inset] hover:shadow-[0_0_0_1px_#f0f_inset] text-sm"
          >
            <span className="relative rgb-split">Download Mobile PDF</span>
          </button>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {/* Column 1: Bio & Location */}
        <CRTCard className="p-6 h-fit">
          <h3 className="text-3xl font-bold rgb-split mb-4">Bio</h3>
          <p className="text-white/80 leading-relaxed mb-6">
            Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce. 
            Known for creating atmospheric soundscapes that transport audiences through analog nostalgia and 
            digital futures. Tangleton&apos;s sets seamlessly weave between genres, creating unique moments that 
            resonate with both underground and mainstream audiences.
          </p>
          <div className="border-t border-white/20 pt-4">
            <h4 className="text-xl font-bold rgb-split mb-2">Location</h4>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 text-lg">
                  Los Angeles, California
                </p>
                <p className="text-white/60 text-sm mt-2">
                  Available for bookings worldwide
                </p>
              </div>
              <a 
                href="mailto:tangs.email@gmail.com?subject=DJ Booking Inquiry"
                className="relative inline-flex items-center justify-center px-4 py-2 font-semibold bg-black border border-fuchsia-500/60 text-white rounded-md transition-transform hover:translate-y-[-1px] active:translate-y-[0px] shadow-[0_0_0_1px_#0ff_inset] hover:shadow-[0_0_0_1px_#f0f_inset] whitespace-nowrap"
              >
                <span className="relative rgb-split">Book Me Soon!</span>
              </a>
            </div>
          </div>
        </CRTCard>

        {/* Column 2: Played At + Genres */}
        <div className="space-y-4 h-fit">
          <CRTCard className="p-4 h-fit">
            <h3 className="text-2xl font-bold rgb-split mb-3">Played At:</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white/90 mb-2">Cities</h4>
                <div className="space-y-1 text-white/80 text-sm">
                  <p>• Los Angeles, CA</p>
                  <p>• Long Beach, CA</p>
                  <p>• Shibuya, Japan</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white/90 mb-2">Parties</h4>
                <div className="space-y-1 text-white/80 text-sm">
                  <p>• ISOULATION</p>
                  <p>• WAVY.FM</p>
                  <p>• Down Bad Party</p>
                </div>
              </div>
              <div>
                <div className="space-y-1 text-white/80 text-sm mt-7">
                  <p>• STIIIZY Holiday Party</p>
                  <p>• Catalyst Capo Con</p>
                  <p>• Riot Games</p>
                  <p>• Toasty Radio</p>
                </div>
              </div>
            </div>
          </CRTCard>

          <CRTCard className="p-4 h-fit">
            <h3 className="text-2xl font-bold rgb-split mb-3">Genres</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              House, Trap, Rap, R&B, Jersey Club, Baile Funk, Afrobeats, Future Beats, Phonk, Hip Hop, Classics, and Throwbacks.
            </p>
          </CRTCard>
        </div>

        {/* Column 3: Mixed by tangleton + Social Media + Listen to my Mixes */}
        <div className="space-y-4 h-fit">
          <CRTCard className="p-4 h-fit">
            <h3 className="text-2xl font-bold rgb-split mb-3">Mixed by tangleton</h3>
            <div className="space-y-1 text-white/80 text-sm">
              <p>• QUITPLAYING Series</p>
              <p>• WHATUDO Series</p>
              <p>• AFTERTHEAFTERS Series</p>
            </div>
          </CRTCard>

          <CRTCard className="p-4 h-fit">
            <h3 className="text-2xl font-bold rgb-split mb-3">Social Media</h3>
            <div className="grid grid-cols-2 gap-3">
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

          <CRTCard className="p-4 h-fit">
            <h3 className="text-2xl font-bold rgb-split mb-3">Listen to my Mixes</h3>
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
                href="https://youtube.com/@tangleton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors text-sm"
              >
                <span className="text-lg">📺</span>
                <span>YouTube</span>
              </a>
            </div>
          </CRTCard>
        </div>

      </div>
      </section>
    </div>
  )
}
