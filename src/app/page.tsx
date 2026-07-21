import Link from 'next/link'
import { getFeaturedPropertiesForHome } from '@/lib/properties-store'
import { ReviewsCarousel } from '@/components/home/ReviewsCarousel'
import { FeaturedPropertiesGrid } from '@/components/home/FeaturedPropertiesGrid'
import { HeroCarousel } from '@/components/home/HeroCarousel'

export const dynamic = 'force-dynamic'

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
      <path d="M3 11.25 12 4l9 7.25" />
      <path d="M5.25 10.5V20h13.5v-9.5" />
      <path d="M9.75 20v-5.5h4.5V20" />
    </svg>
  )
}

function FinanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h2" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.5 2.8 7.8 7 9 4.2-1.2 7-4.5 7-9V6l-7-3Z" />
    </svg>
  )
}

function EnergyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  )
}

const homeServices = [
  {
    icon: HomeIcon,
    title: 'Inmobiliaria',
    desc: 'Compra, venta y alquiler con acompañamiento completo en Puente Genil y Córdoba.',
  },
  {
    icon: FinanceIcon,
    title: 'Financiera',
    desc: 'Hipotecas, rehipotecas y reunificación de deudas con estudio personalizado.',
  },
  {
    icon: ShieldIcon,
    title: 'Seguros',
    desc: 'Protección para tu hogar y tu patrimonio en cada operación.',
  },
  {
    icon: EnergyIcon,
    title: 'Consultoría energética',
    desc: 'Eficiencia y asesoramiento energético para valorizar tu inmueble.',
  },
]

export default async function HomePage() {
  const featured = await getFeaturedPropertiesForHome()

  return (
    <>
      {/* HERO */}
      <section className="relative h-svh min-h-[32rem] flex items-center justify-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-10">
        <div className="absolute inset-0">
          <HeroCarousel />
        </div>

        <div className="relative z-10 -mt-4 md:-mt-6 text-center px-4 min-[400px]:px-6 max-w-5xl mx-auto">
          <h1 className="font-display text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] text-balance max-md:tracking-[-0.02em] text-[calc(clamp(2rem,6.5vw+0.25rem,3.2rem)+2pt)] md:text-[calc(clamp(2.5rem,4.8vw+0.9rem,5.2rem)+2pt)] leading-[1.12] md:leading-[1.06] mb-4 md:mb-5 animate-fade-up">
            Tu operación, de principio a fin
          </h1>
          <p className="text-stone-200 text-base sm:text-lg md:text-xl font-normal max-w-[min(100%,24rem)] sm:max-w-2xl mx-auto mb-6 md:mb-7 leading-relaxed text-pretty animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            Inmobiliaria, financiera, seguros y consultoría energética en Puente Genil
          </p>
          <div
            className="flex w-full max-w-xl mx-auto flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <Link
              href="/propiedades"
              className="btn-gold w-full sm:flex-1 sm:min-w-0 min-h-[3rem] md:min-h-[3.25rem] px-8 py-3.5 md:py-4 text-sm md:text-base tracking-wide text-center border-2 border-transparent box-border"
            >
              Ver propiedades
            </Link>
            <Link
              href="/sobre-nosotros"
              className="inline-flex w-full sm:flex-1 sm:min-w-0 min-h-[3rem] md:min-h-[3.25rem] items-center justify-center px-8 py-3.5 md:py-4 text-sm md:text-base tracking-wide font-medium border-2 border-white text-white box-border hover:bg-white hover:text-black transition-colors duration-200"
            >
              Nuestros servicios
            </Link>
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      {/* FEATURED PROPERTIES */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        {featured.length > 0 ? (
          <div className="space-y-7">
            <div className="relative min-h-10">
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-center">
                Nuevas <span className="text-gold">oportunidades</span>
              </h2>
              <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2">
                <Link href="/propiedades" className="btn-outline text-xs shrink-0">
                  Ver todas →
                </Link>
              </div>
            </div>
            <FeaturedPropertiesGrid properties={featured} />
            <div className="flex justify-end md:hidden">
              <Link href="/propiedades" className="btn-outline text-xs shrink-0">
                Ver todas →
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-stone-400">
            <p>Pronto añadiremos propiedades destacadas.</p>
          </div>
        )}
      </section>

      {/* SERVICES STRIP — 4 líneas de negocio */}
      <section className="bg-stone-900 py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.13em] text-stone-400">Servicio integral</p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
              Cuatro áreas, un solo acompañamiento
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((item) => (
              <div key={item.title} className="rounded-xl p-8 border border-stone-700 bg-stone-950/40 hover:border-white/40 transition-colors duration-300">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-stone-700 text-stone-100">
                  <item.icon />
                </span>
                <h3 className="mb-2 font-medium text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-stone-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/sobre-nosotros" className="inline-flex text-sm text-stone-300 underline-offset-4 hover:text-white hover:underline">
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-black py-24 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto rounded-2xl border border-white/20 bg-white/5 px-6 py-10 md:px-10 md:py-12">
          <p className="mb-4 text-xs uppercase tracking-[0.13em] text-neutral-400">
            Puente Genil · Córdoba
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            ¿Hablamos de tu próximo paso?
          </h2>
          <p className="mb-10 text-lg font-light leading-relaxed text-white/90">
            Cuéntanos qué necesitas y te proponemos la mejor estrategia.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-md border border-transparent bg-white px-10 py-3 text-sm font-medium tracking-wide text-black hover:bg-neutral-200 transition-colors duration-200"
            >
              Hablar con nosotros
            </Link>
            <Link
              href="/propiedades"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-md border border-white px-10 py-3 text-sm font-medium tracking-wide text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Ver propiedades
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
