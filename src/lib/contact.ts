export const AGENT = {
  name: 'Sales Inmobiliaria',
  title: 'Soluciones inmobiliarias',
  city: 'Fernán Núñez',
  province: 'Córdoba',
  tagline: 'Asesoramiento personalizado para compra, venta y alquiler en Fernán Núñez y la provincia de Córdoba.',
} as const

export const CONTACT = {
  address: {
    line1: 'C. Adolfo Darhan',
    line2: '14520 Fernán Núñez, Córdoba',
    full: 'C. Adolfo Darhan, 14520 Fernán Núñez, Córdoba',
    mapsQuery: 'C.+Adolfo+Darhan,+14520+Fernan+Nunez,+Cordoba',
  },
  phone: {
    display: '619 59 03 53',
    e164: '+34619590353',
    wa: '34619590353',
  },
  email: '',
} as const

export const OPENING_HOURS = [
  { day: 'Lunes', hours: '10:00–14:00 · 18:00–21:00' },
  { day: 'Martes', hours: '10:00–14:00 · 18:00–21:00' },
  { day: 'Miércoles', hours: '10:00–14:00 · 18:00–21:00' },
  { day: 'Jueves', hours: '10:00–14:00 · 18:00–21:00' },
  { day: 'Viernes', hours: '10:00–14:00 · 18:00–21:00' },
  { day: 'Sábado', hours: 'Cerrado' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const

export const mapsHref = `https://maps.google.com/?q=${CONTACT.address.mapsQuery}`
export const phoneHref = `tel:${CONTACT.phone.e164}`
export const whatsappHref = `https://wa.me/${CONTACT.phone.wa}`
export const hasEmail = CONTACT.email.trim().length > 0
export const emailHref = hasEmail ? `mailto:${CONTACT.email}` : ''
export const whatsappDisplay = `+34 ${CONTACT.phone.display}`

export const scheduleSummary = 'Lun–Vie: 10:00–14:00 · 18:00–21:00 · Sáb y Dom: Cerrado'
