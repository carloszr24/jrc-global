'use client'

import Image from 'next/image'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-950" aria-hidden="true">
      <Image
        src="/images/jrc-1.png"
        alt="Propiedad en Puente Genil — JRC Global"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-stone-950/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/55 via-stone-950/25 to-stone-950/60" />
      <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
    </div>
  )
}
