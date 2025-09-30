import { cn } from "@/lib/utils"

export default function CRTCard({ className, children }: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn(
      "rounded-xl border bg-black/60 shadow-crt relative overflow-hidden",
      "border-cyan-500/30 [box-shadow:0_0_0_1px_rgba(255,255,255,.03)_inset]",
      className
    )}>
      <div className="pointer-events-none absolute inset-0 opacity-20"
           style={{ backgroundImage: "url('/textures/scanlines.png')", mixBlendMode: 'overlay' }} />
      {children}
    </div>
  )
}
