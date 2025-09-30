"use client"
import LightGallery from "lightgallery/react"
import "lightgallery/css/lightgallery.css"

export default function Lightbox({ items }: { items: { src: string; thumb?: string; subHtml?: string }[] }) {
  return (
    <LightGallery speed={300} download={false} backdropDuration={300}>
      {items.map((it, i) => (
        <a key={i} href={it.src} data-sub-html={it.subHtml ?? ""}>
          <img src={it.thumb ?? it.src} alt="" className="h-40 w-64 object-cover rounded" />
        </a>
      ))}
    </LightGallery>
  )
}
