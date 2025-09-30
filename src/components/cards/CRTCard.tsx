import { cn } from "@/lib/utils"

export default function CRTCard({ className, children }: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn(
      "rounded-xl border shadow-crt relative overflow-hidden",
      "border-cyan-500/30 [box-shadow:0_0_0_1px_rgba(255,255,255,.03)_inset]",
      "bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/5 to-green-500/10",
      className
    )}>
      {/* Chromatic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 opacity-20"
           style={{ backgroundImage: "url('/textures/scanlines.png')", mixBlendMode: 'overlay' }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
