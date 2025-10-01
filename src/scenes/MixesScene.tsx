"use client"
import CRTCard from "@/components/cards/CRTCard"
import SoundCloudMix from "@/components/media/SoundCloudMix"
import { quitplayingMixes, vibesRnBounceMixes, houseAndBounceMixes } from "@/config/soundcloud-mixes"

export default function MixesScene({ intercepted: _intercepted }: { intercepted?: boolean }) {
  
  return (
    <section className="h-dvh w-dvw flex flex-col overflow-y-auto pt-24">
      <header className="p-4 text-center">
        <h2 className="text-4xl font-boldonse rgb-split">Mixes</h2>
        <p className="text-white/60 mt-2 text-lg">Latest DJ mixes and live sessions</p>
      </header>
      <div className="flex-1 px-4 pb-4">
        {/* QUITPLAYING SERIES Section */}
        <section className="mb-7">
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-boldonse rgb-split mb-2">QUITPLAYING SERIES</h3>
            <p className="text-white/60 text-sm">A collection of experimental DJ mixes exploring different genres and moods</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {quitplayingMixes.map((mix) => (
              <SoundCloudMix key={mix.id} mix={mix} />
            ))}
          </div>
        </section>

        {/* Vibes&R&Bounce Section */}
        <section className="mb-7">
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-boldonse rgb-split mb-2">Vibes&R&Bounce</h3>
            <p className="text-white/60 text-sm">Smooth R&B vibes and soulful bounce for the heart</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {vibesRnBounceMixes.map((mix) => (
              <SoundCloudMix key={mix.id} mix={mix} />
            ))}
          </div>
        </section>

        {/* House&Bounce Section */}
        <section className="mb-7">
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-boldonse rgb-split mb-2">House&Bounce</h3>
            <p className="text-white/60 text-sm">Deep house beats with infectious bounce energy</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {houseAndBounceMixes.map((mix) => (
              <SoundCloudMix key={mix.id} mix={mix} />
            ))}
          </div>
        </section>
        
        <div className="mt-5">
          <CRTCard className="p-4 text-center">
            <h3 className="text-lg font-display rgb-split mb-1.5">More Mixes</h3>
            <p className="text-white/70 mb-3 text-sm">Check out my full catalog on SoundCloud and Mixcloud</p>
            <div className="flex gap-3 justify-center">
              <a 
                href="https://soundcloud.com/tangleton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 rounded text-sm hover:bg-fuchsia-500/30 transition-colors"
              >
                SoundCloud
              </a>
              <a 
                href="https://mixcloud.com/tangleton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-green-500/20 border border-green-500/50 text-green-400 rounded text-sm hover:bg-green-500/30 transition-colors"
              >
                Mixcloud
              </a>
            </div>
          </CRTCard>
        </div>
      </div>
    </section>
  )
}
