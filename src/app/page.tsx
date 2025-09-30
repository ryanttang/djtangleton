"use client"
import RouterView from "./RouterView"
import HomeScene from "@/scenes/HomeScene"

export default function Page() {
  return (
    <main className="relative h-dvh overflow-hidden">
      <RouterView>
        <HomeScene />
      </RouterView>
    </main>
  )
}
