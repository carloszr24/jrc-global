export const AGENT = {
  name: 'JRC Global',
  title: 'Inmobiliaria · Financiera · Seguros · Consultoría energética',
  city: 'Puente Genil',
  province: 'Córdoba',
  tagline: 'Soluciones integrales en Puente Genil y la provincia de Córdoba.',
} as const

export const CONTACT = {
  address: {
    line1: 'Av. Andalucía, 4',
    line2: '14500 Puente Genil, Córdoba',
    full: 'Av. Andalucía, 4, 14500 Puente Genil, Córdoba',
    mapsQuery: 'Av.+Andalucia,+4,+14500+Puente+Genil,+Cordoba',
  },
  phone: {
    display: '687 89 24 00',
    e164: '+34687892400',
    wa: '34687892400',
  },
  email: 'info@jrcglobal.es',
} as const

export const OPENING_HOURS = [
  { day: 'Lunes', hours: '9:30–14:00 · 17:00–20:00' },
  { day: 'Martes', hours: '9:30–14:00 · 17:00–20:00' },
  { day: 'Miércoles', hours: '9:30–14:00 · 17:00–20:00' },
  { day: 'Jueves', hours: '9:30–14:00 · 17:00–20:00' },
  { day: 'Viernes', hours: '9:30–14:00 · 17:00–20:00' },
  { day: 'Sábado', hours: 'Cerrado' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const

export const mapsHref = `https://maps.google.com/?q=${CONTACT.address.mapsQuery}`
export const phoneHref = `tel:${CONTACT.phone.e164}`
export const whatsappHref = `https://wa.me/${CONTACT.phone.wa}`
export const hasEmail = CONTACT.email.trim().length > 0
export const emailHref = hasEmail ? `mailto:${CONTACT.email}` : ''
export const whatsappDisplay = `+34 ${CONTACT.phone.display}`

export const scheduleSummary = 'Lun–Vie: 9:30–14:00 · 17:00–20:00 · Sáb y Dom: Cerrado'
