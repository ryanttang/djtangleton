"use client"
import { useState, useEffect } from "react"
import CRTCard from "@/components/cards/CRTCard"

interface SoundCloudMixProps {
  mix: {
    id: string;
    title: string;
    url: string;
    description?: string;
    date?: string;
    youtubeUrl?: string;
  };
}

interface SoundCloudEmbedData {
  html: string;
  title: string;
  author_name: string;
  thumbnail_url?: string;
  description?: string;
}

export default function SoundCloudMix({ mix }: SoundCloudMixProps) {
  const [embedData, setEmbedData] = useState<SoundCloudEmbedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmbedData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://soundcloud.com/oembed?url=${encodeURIComponent(mix.url)}&format=json`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch SoundCloud data');
        }
        
        const data = await response.json();
        setEmbedData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load mix');
      } finally {
        setLoading(false);
      }
    };

    fetchEmbedData();
  }, [mix.url]);

  if (loading) {
    return (
      <CRTCard className="p-2 hover:border-cyan-500/50 transition-colors">
        <div className="aspect-square bg-black/50 border border-cyan-500/30 rounded mb-2 flex items-center justify-center">
          <div className="animate-pulse text-cyan-500 text-xs font-mono">LOADING</div>
        </div>
        <div className="space-y-1">
          <div className="h-2.5 bg-white/20 rounded animate-pulse"></div>
          <div className="h-1.5 bg-white/10 rounded animate-pulse w-2/3"></div>
          <div className="h-4 bg-cyan-500/20 rounded animate-pulse w-full mt-1.5"></div>
        </div>
      </CRTCard>
    );
  }

  if (error || !embedData) {
    return (
      <CRTCard className="p-2 hover:border-red-500/50 transition-colors">
        <div className="aspect-square bg-black/50 border border-red-500/30 rounded mb-2 flex items-center justify-center">
          <span className="text-red-500 text-xs font-mono">ERROR</span>
        </div>
        <div className="space-y-1">
          <h3 className="text-xs font-semibold text-white rgb-split truncate">{mix.title}</h3>
          <p className="text-red-400 text-xs">Failed to load mix</p>
          <a 
            href={mix.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full mt-1.5 px-2 py-1 bg-red-500/20 border border-red-500/50 text-red-400 rounded text-xs hover:bg-red-500/30 transition-colors text-center"
          >
            Listen on SoundCloud
          </a>
        </div>
      </CRTCard>
    );
  }

  return (
    <CRTCard className="p-2 hover:border-cyan-500/50 transition-colors group">
      {/* Cover Art - Main Visual Element */}
      <div className="aspect-square bg-black/50 border border-cyan-500/30 rounded mb-2 overflow-hidden relative">
        {embedData.thumbnail_url ? (
          <img 
            src={embedData.thumbnail_url} 
            alt={mix.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20">
            <span className="text-cyan-500 text-xs font-mono">MIX</span>
          </div>
        )}
        {/* Play overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-5 h-5 bg-cyan-500/80 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-xs font-semibold text-white rgb-split line-clamp-2 leading-tight">
          {embedData.title || mix.title}
        </h3>
        <p className="text-white/70 text-xs line-clamp-1">
          {mix.description || embedData.description || "DJ Mix"}
        </p>
        <div className="flex items-center gap-1 text-xs text-white/50">
          {mix.date && <span>{mix.date}</span>}
          {mix.date && <span>•</span>}
          <span>SoundCloud</span>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-1 mt-1.5">
          <a 
            href={mix.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full px-2 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded text-xs hover:bg-cyan-500/30 transition-colors text-center"
          >
            SoundCloud
          </a>
          {mix.youtubeUrl && (
            <a 
              href={mix.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full px-2 py-1 bg-red-500/20 border border-red-500/50 text-red-400 rounded text-xs hover:bg-red-500/30 transition-colors text-center"
            >
              YouTube
            </a>
          )}
        </div>
      </div>
    </CRTCard>
  );
}