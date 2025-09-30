"use client"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

export default function EmblaStrip({ images }: { images: { src: string; alt: string }[] }) {
  const [ref] = useEmblaCarousel({ loop: true, dragFree: true })
  
  return (
    <div className="overflow-hidden" ref={ref}>
      <div className="flex gap-4">
        {images.map((im, i) => (
          <div key={i} className="min-w-[60vw] md:min-w-[40vw] lg:min-w-[30vw] h-[40vh] relative">
            <Image src={im.src} alt={im.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
