"use client"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { soundcloudMixes, SoundCloudMix } from "@/config/soundcloud-mixes"


interface SoundCloudEmbedData {
  html: string;
  title: string;
  author_name: string;
  thumbnail_url?: string;
  description?: string;
}

export default function AudioPlayer() {
  const pathname = usePathname()
  const [currentTrack, setCurrentTrack] = useState<SoundCloudMix | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [embedData, setEmbedData] = useState<SoundCloudEmbedData | null>(null)
  const [loading, setLoading] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const _iframeRef = useRef<HTMLIFrameElement>(null)

  // Initialize with first track
  useEffect(() => {
    if (soundcloudMixes.length > 0 && !currentTrack) {
      setCurrentTrack(soundcloudMixes[0])
      setCurrentIndex(0)
    }
  }, [currentTrack])

  // Auto-minimize when not on home page
  useEffect(() => {
    if (pathname !== '/') {
      setIsMinimized(true)
    } else {
      setIsMinimized(false)
    }
  }, [pathname])

  // Fetch embed data for current track
  useEffect(() => {
    if (!currentTrack) return

    const fetchEmbedData = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://soundcloud.com/oembed?url=${encodeURIComponent(currentTrack.url)}&format=json`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch SoundCloud data')
        }
        
        const data = await response.json()
        setEmbedData(data)
      } catch (err) {
        console.error('Failed to load track:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchEmbedData()
  }, [currentTrack])


  const playTrack = (index: number) => {
    if (index >= 0 && index < soundcloudMixes.length) {
      setCurrentTrack(soundcloudMixes[index])
      setCurrentIndex(index)
    }
  }

  const nextTrack = () => {
    const nextIndex = (currentIndex + 1) % soundcloudMixes.length
    playTrack(nextIndex)
  }

  const prevTrack = () => {
    const prevIndex = currentIndex === 0 ? soundcloudMixes.length - 1 : currentIndex - 1
    playTrack(prevIndex)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // Note: Actual volume control would need SoundCloud Widget API
    // This is a visual state indicator for now
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return // Don't interfere with text input
      }
      
      switch (e.code) {
        case 'ArrowRight':
          e.preventDefault()
          nextTrack()
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevTrack()
          break
        case 'KeyM':
          e.preventDefault()
          toggleMute()
          break
        case 'KeyH':
          e.preventDefault()
          toggleMinimize()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, isMuted])


  if (!currentTrack) {
    return null
  }

  // Minimized view
  if (isMinimized) {
    return (
      <div 
        className="fixed bottom-3 right-3 z-40 bg-black/60 border border-cyan-500/30 rounded-md backdrop-blur cursor-pointer hover:bg-black/70 hover:border-cyan-500/50 transition-all duration-200"
        onClick={toggleMinimize}
        title="Click to expand player (H)"
      >
        <div className="flex items-center gap-2 p-2">
          {/* Mini cover art */}
          <div className="w-8 h-8 bg-black/50 border border-cyan-500/30 rounded overflow-hidden">
            {embedData?.thumbnail_url ? (
              <img 
                src={embedData.thumbnail_url} 
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20">
                <span className="text-cyan-500 text-xs font-mono">MIX</span>
              </div>
            )}
          </div>
          
          {/* Track title */}
          <div className="text-xs text-white/80 truncate max-w-32">
            {embedData?.title || currentTrack.title}
          </div>
          
          {/* Expand icon indicator */}
          <div className="p-1 text-white/50">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-40 bg-black/60 border border-cyan-500/30 rounded-md backdrop-blur w-[800px] max-w-[calc(100vw-24px)] max-h-[calc(100vh-6rem)] sm:max-h-none">
      {/* Header with minimize button */}
      <div 
        className="flex justify-end p-2 border-b border-cyan-500/20 cursor-pointer hover:bg-black/20 transition-all duration-200"
        onClick={toggleMinimize}
        title="Click to minimize to corner (H)"
      >
        <div className="p-1 bg-black/30 border border-cyan-500/30 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 text-white/70 hover:text-white transition-all duration-200">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13H5v-2h14v2z"/>
          </svg>
        </div>
      </div>
      
      <div className="flex gap-3 p-3">
        {/* Left Side - Cover Art & Controls */}
        <div className="flex-shrink-0">
          <div className="flex gap-3">
            {/* Cover Art */}
            <a 
              href={currentTrack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 sm:w-24 sm:h-24 bg-black/50 border border-cyan-500/30 rounded overflow-hidden hover:border-cyan-500/60 hover:scale-105 transition-all duration-200 cursor-pointer group"
              title="Listen on SoundCloud"
            >
              {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-cyan-500 text-xs font-mono">Loading...</div>
                </div>
              ) : embedData?.thumbnail_url ? (
                <img 
                  src={embedData.thumbnail_url} 
                  alt={currentTrack.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 group-hover:from-cyan-500/30 group-hover:to-fuchsia-500/30 transition-colors duration-200">
                  <span className="text-cyan-500 text-sm font-mono group-hover:text-cyan-400 transition-colors duration-200">MIX</span>
                </div>
              )}
            </a>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTrack}
                className="p-2 bg-black/30 border border-cyan-500/30 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 text-white/70 hover:text-white transition-all duration-200"
                title="Previous track (←)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>
              
              <button
                onClick={toggleMute}
                className="p-2 bg-cyan-500/20 border border-cyan-500/50 rounded hover:bg-cyan-500/30 hover:border-cyan-500/70 text-cyan-400 hover:text-cyan-300 transition-all duration-200"
                title={`${isMuted ? 'Unmute' : 'Mute'} (M)`}
              >
                {isMuted ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                )}
              </button>
              
              <button
                onClick={nextTrack}
                className="p-2 bg-black/30 border border-cyan-500/30 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 text-white/70 hover:text-white transition-all duration-200"
                title="Next track (→)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Track Info */}
          <div className="mt-3 w-full">
            <h4 className="text-sm font-semibold text-white rgb-split leading-tight mb-2">
              {embedData?.title || currentTrack.title}
            </h4>
            {/* Waveform Visualization */}
            <div className="h-4 sm:h-6 flex items-center gap-0.5 w-full">
              {Array.from({ length: 40 }, (_, i) => (
                <div
                  key={i}
                  className="bg-cyan-500/40 rounded-sm waveform-bar flex-1"
                  style={{
                    height: `${Math.random() * 16 + 6}px`,
                    animationDelay: `${i * 30}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Playlist */}
        <div className="flex-1 min-w-0">
          <div className="h-full flex flex-col">
            {/* Playlist Header */}
            <div className="mb-1">
              <h5 className="text-xs font-semibold text-white/80">Playlist ({soundcloudMixes.length} tracks)</h5>
            </div>

            {/* Playlist */}
            <div className="h-16 sm:h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent hover:scrollbar-thumb-cyan-500/50">
              <div className="space-y-0.5 pr-2">
                {soundcloudMixes.map((track, index) => (
                  <button
                    key={track.id}
                    onClick={() => playTrack(index)}
                    className={`w-full text-left p-2 rounded text-xs transition-colors ${
                      index === currentIndex
                        ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400'
                        : 'hover:bg-white/5 text-white/70 hover:text-white'
                    }`}
                  >
                    <div className="font-medium truncate">{track.title}</div>
                    <div className="text-white/50 truncate text-xs">{track.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SoundCloud Embed */}
      {loading ? (
        <div className="px-3 pb-3">
          <div className="h-16 sm:h-20 bg-black/30 border border-cyan-500/20 rounded flex items-center justify-center">
            <div className="text-cyan-500 text-xs font-mono">Loading...</div>
          </div>
        </div>
      ) : embedData ? (
        <div className="px-3 pb-3">
          <div 
            className="soundcloud-embed max-h-16 sm:max-h-20 overflow-hidden"
            dangerouslySetInnerHTML={{ __html: embedData.html }}
          />
        </div>
      ) : (
        <div className="px-3 pb-3">
          <div className="h-16 sm:h-20 bg-black/30 border border-cyan-500/20 rounded flex items-center justify-center">
            <a 
              href={currentTrack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 text-xs font-mono hover:text-cyan-400 transition-colors"
            >
              Listen on SoundCloud
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
