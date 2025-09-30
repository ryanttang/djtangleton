"use client"
import GlitchButton from "@/components/buttons/GlitchButton"

export default function HomeScene() {
  return (
    <section className="h-dvh w-dvw grid place-items-center relative overflow-hidden">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/08Znc62_ZHA?autoplay=1&mute=1&loop=1&playlist=08Znc62_ZHA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&start=10"
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.77777778vh', // 16:9 aspect ratio
            height: '56.25vw', // 16:9 aspect ratio
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none'
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* YouTube Link Button */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 z-20">
        <a
          href="https://youtube.com/watch?v=08Znc62_ZHA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white text-sm font-semibold rounded-md border border-red-500/50 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
        >
          <svg className="w-6 h-6 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch & Listen to my QUITPLAYING series
        </a>
      </div>

      {/* Content */}
      <div className="text-center max-w-xl relative z-10">
        <div className="mb-4">
          <img 
            src="/images/tangletonwhite.png" 
            alt="Tangleton" 
            className="h-20 md:h-24 mx-auto rgb-split"
          />
        </div>
        <p className="mt-4 text-white/80">Los Angeles based DJ / Designer</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <GlitchButton onClick={() => location.assign('/epk')}>View EPK</GlitchButton>
          <GlitchButton onClick={() => location.assign('/gigs')}>Gigs</GlitchButton>
        </div>
      </div>
    </section>
  )
}
