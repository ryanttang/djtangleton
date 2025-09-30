import EPKScene from "@/scenes/EPKScene"

export const revalidate = 60

export default function EPKCanonical() {
  return <EPKScene intercepted={false} />
}
