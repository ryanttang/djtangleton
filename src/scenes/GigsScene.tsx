"use client"
export default function GigsScene() {
  return (
    <section className="h-dvh w-dvw p-6 flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-boldonse rgb-split">Upcoming Shows</h2>
        <p className="text-white/60 text-lg">More info coming soon</p>
        
        <div className="mt-8">
          <a 
            href="mailto:tangs.email@gmail.com?subject=DJ Booking Inquiry"
            className="relative inline-flex items-center justify-center px-6 py-3 font-semibold bg-black border border-fuchsia-500/60 text-white rounded-md transition-transform hover:translate-y-[-1px] active:translate-y-[0px] shadow-[0_0_0_1px_#0ff_inset] hover:shadow-[0_0_0_1px_#f0f_inset]"
          >
            <span className="relative rgb-split">Book Me Soon!</span>
          </a>
        </div>
      </div>
    </section>
  )
}
