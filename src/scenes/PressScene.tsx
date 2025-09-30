"use client"
import CRTCard from "@/components/cards/CRTCard"

export default function MixesScene({ intercepted }: { intercepted?: boolean }) {
  const mixes = [
    {
      title: "VHS Dreams Vol. 1",
      date: "2024-12-15",
      duration: "45:32",
      description: "Deep house journey through neon-lit streets",
      cover: "/images/mix1.jpg",
      link: "/mixes/vhs-dreams-vol1.mp3"
    },
    {
      title: "Glitch City Sessions",
      date: "2024-11-20",
      duration: "52:18",
      description: "Breaks and glitch-hop fusion",
      cover: "/images/mix2.jpg",
      link: "/mixes/glitch-city-sessions.mp3"
    },
    {
      title: "RGB Nights",
      date: "2024-10-08",
      duration: "38:45",
      description: "Chromatic house vibes for late nights",
      cover: "/images/mix3.jpg",
      link: "/mixes/rgb-nights.mp3"
    },
    {
      title: "Analog Future",
      date: "2024-09-12",
      duration: "41:22",
      description: "Retro-futuristic electronic soundscape",
      cover: "/images/mix4.jpg",
      link: "/mixes/analog-future.mp3"
    }
  ]
  
  return (
    <section className="h-dvh w-dvw flex flex-col overflow-y-auto">
      <header className="p-6">
        <h2 className="text-4xl font-boldonse rgb-split">Mixes</h2>
        <p className="text-white/60 mt-2">Latest DJ mixes and live sessions</p>
      </header>
      <div className="flex-1 px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mixes.map((mix, i) => (
            <CRTCard key={i} className="p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-black/50 border border-cyan-500/30 rounded flex-shrink-0 flex items-center justify-center">
                  <span className="text-cyan-500 text-xs font-mono">MIX</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white rgb-split truncate">{mix.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{mix.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-white/50">
                    <span>{mix.date}</span>
                    <span>•</span>
                    <span>{mix.duration}</span>
                  </div>
                  <button className="mt-3 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded text-sm hover:bg-cyan-500/30 transition-colors">
                    Play Mix
                  </button>
                </div>
              </div>
            </CRTCard>
          ))}
        </div>
        
        <div className="mt-8">
          <CRTCard className="p-6 text-center">
            <h3 className="text-xl font-boldonse rgb-split mb-2">More Mixes</h3>
            <p className="text-white/70 mb-4">Check out my full catalog on SoundCloud and Mixcloud</p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 rounded hover:bg-fuchsia-500/30 transition-colors">
                SoundCloud
              </button>
              <button className="px-6 py-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded hover:bg-green-500/30 transition-colors">
                Mixcloud
              </button>
            </div>
          </CRTCard>
        </div>
      </div>
    </section>
  )
}
