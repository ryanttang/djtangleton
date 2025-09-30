import { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export default function GlitchButton(
  { className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center px-5 py-3 font-semibold",
        "bg-black border border-fuchsia-500/60 text-white rounded-md",
        "transition-transform hover:translate-y-[-1px] active:translate-y-[0px]",
        "shadow-[0_0_0_1px_#0ff_inset] hover:shadow-[0_0_0_1px_#f0f_inset]",
        className
      )}
    >
      <span className="relative rgb-split">{children}</span>
      <span className="absolute inset-0 opacity-0 hover:opacity-100 glitch-in" aria-hidden />
    </button>
  )
}
