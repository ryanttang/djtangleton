"use client"
export default function GigsScene() {
  const gigs = [
    { name: "Club VHS", date: "2025-10-31", city: "Los Angeles, CA", venue: "EchoPlex" },
    { name: "RGB Fest", date: "2025-11-12", city: "San Diego, CA", venue: "Quartyard" },
  ]
  
  return (
    <section className="h-dvh w-dvw p-6">
      <h2 className="text-4xl font-boldonse rgb-split mb-4">Upcoming Shows</h2>
      <ul className="space-y-3">
        {gigs.map((g, i) => (
          <li key={i} className="flex items-center justify-between border-b border-white/10 py-3">
            <div className="text-white">
              <div className="font-semibold">{g.name}</div>
              <div className="text-white/60">{g.venue} — {g.city}</div>
            </div>
            <time className="text-accent-green">{g.date}</time>
          </li>
        ))}
      </ul>
    </section>
  )
}
