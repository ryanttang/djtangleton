export default function VHSFilters() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      {/* Subtle displacement for analog wobble */}
      <filter id="vhs-displace">
        <feTurbulence type="fractalNoise" baseFrequency="0.004" numOctaves="2" seed="4" />
        <feDisplacementMap in="SourceGraphic" scale="5" />
      </filter>

      {/* Chromatic aberration via RGB channel offsets */}
      <filter id="chromatic">
        <feColorMatrix type="matrix" values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 1 0" result="base"/>
        <feOffset in="base" dx="1" dy="0" result="r"/>
        <feColorMatrix in="r" type="matrix" values="
          1 0 0 0 0
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 1 0" result="rC"/>
        <feOffset in="base" dx="-1" dy="0" result="b"/>
        <feColorMatrix in="b" type="matrix" values="
          0 0 0 0 0
          0 0 0 0 0
          0 0 1 0 0
          0 0 0 1 0" result="bC"/>
        <feBlend in="rC" in2="bC" mode="screen" result="rgb"/>
        <feBlend in="base" in2="rgb" mode="screen"/>
      </filter>
    </svg>
  )
}
