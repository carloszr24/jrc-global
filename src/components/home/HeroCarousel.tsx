'use client'

import Image from 'next/image'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-950" aria-hidden="true">
      <Image
        src="/images/puente-genil.jpg"
        alt="Vista de Puente Genil, Córdoba"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-stone-950/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/30 to-stone-950/65" />
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
    </div>
  )
}
