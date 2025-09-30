"use client"
import Image from "next/image"

export default function CRTImage(
  { src, alt, label }: { src: string; alt: string; label?: string }
) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-black">
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover contrast-125 brightness-90" 
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{ backgroundImage: "url('/textures/scanlines.png')", mixBlendMode: 'overlay' }} />
      {label && <p className="absolute bottom-2 left-2 text-white text-sm rgb-split">{label}</p>}
    </div>
  )
}
