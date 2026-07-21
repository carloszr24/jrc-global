'use client'

import Image from 'next/image'
import {
  AGENT,
  CONTACT,
  emailHref,
  mapsHref,
  phoneHref,
  whatsappDisplay,
} from '@/lib/contact'
import { FinancialPartnerSection } from '@/components/services/FinancialPartnerSection'

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path d="M3 11.25 12 4l9 7.25" />
      <path d="M5.25 10.5V20h13.5v-9.5" />
      <path d="M9.75 20v-5.5h4.5V20" />
    </svg>
  )
}

function FinanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h2" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.5 2.8 7.8 7 9 4.2-1.2 7-4.5 7-9V6l-7-3Z" />
    </svg>
  )
}

function EnergyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  )
}

const services = [
  {
    icon: HomeIcon,
    title: 'Inmobiliaria',
    desc: 'Compra, venta y alquiler de viviendas en Puente Genil y la provincia de Córdoba, con acompañamiento de principio a fin.',
  },
  {
    icon: FinanceIcon,
    title: 'Financiera',
    desc: 'Hipotecas, rehipotecas y reunificación de deudas con estudio personalizado junto a nuestro colaborador financiero.',
  },
  {
    icon: ShieldIcon,
    title: 'Seguros',
    desc: 'Asesoramiento en protección para tu hogar y tu patrimonio, con soluciones adaptadas a cada operación.',
  },
  {
    icon: EnergyIcon,
    title: 'Consultoría energética',
    desc: 'Eficiencia energética y acompañamiento para optimizar el consumo y el valor de tu inmueble.',
  },
]

const reasons = [
  {
    title: 'Experiencia local',
    desc: 'Conocemos el mercado de Puente Genil y Córdoba: precios, demanda y oportunidades reales.',
  },
  {
    title: 'Servicio integral',
    desc: 'Inmobiliaria, financiera, seguros y energía en un solo interlocutor para simplificar tu operación.',
  },
  {
    title: 'Trato personalizado',
    desc: 'Cada cliente tiene un plan a medida, con seguimiento cercano y comunicación clara en cada paso.',
  },
  {
    title: 'Resultados',
    desc: 'Estrategia comercial y acompañamiento profesional orientados a cerrar con seguridad y confianza.',
  },
]

export default function SobreNosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-svh flex-col items-center justify-center bg-[#F9F9F9] px-6 pb-16 pt-28 text-center md:pt-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <Image
            src="/images/jrc-global.png"
            alt={`${AGENT.name} logo`}
            width={320}
            height={88}
            priority
            className="h-14 w-auto md:h-16"
          />
          <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500 md:mt-12">
            Servicios
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-black md:text-6xl lg:text-7xl">
            Inmobiliaria
          </h1>
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 md:text-xs">
            Agencia inmobiliaria en Puente Genil
          </p>
        </div>

        <a
          href="#financiacion"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-neutral-400 transition-colors hover:text-neutral-700"
        >
          Sigue bajando
          <span aria-hidden="true" className="text-base leading-none">
            ↓
          </span>
        </a>
      </section>

      <div id="financiacion">
        <FinancialPartnerSection />
      </div>

      {/* Nuestros servicios */}
      <section className="bg-white px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-center text-sm font-medium uppercase tracking-[0.28em] text-neutral-800 md:mb-16">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-7 md:p-8"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 text-neutral-800">
                  <service.icon />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-black">{service.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="bg-[#F9F9F9] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-center text-sm font-medium uppercase tracking-[0.28em] text-neutral-800 md:mb-16">
            Por qué elegirnos
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-12">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <div className="mb-3 flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-2 w-2 rotate-45 bg-black"
                  />
                  <h3 className="text-lg font-semibold text-black">{reason.title}</h3>
                </div>
                <p className="pl-5 text-sm leading-relaxed text-neutral-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contáctanos */}
      <section className="bg-white px-6 py-24 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-black md:text-5xl">
            Contáctanos
          </h2>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-sm text-neutral-500 transition-colors hover:text-neutral-800"
          >
            {CONTACT.address.full}
          </a>
          <a
            href={phoneHref}
            className="mt-4 block text-2xl font-semibold tracking-tight text-black md:text-3xl"
          >
            {whatsappDisplay}
          </a>
          <a
            href={emailHref || '/contacto'}
            className="mt-10 inline-flex min-h-[3rem] items-center justify-center bg-neutral-900 px-10 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-black"
          >
            Escríbenos
          </a>
        </div>
      </section>
    </div>
  )
}
