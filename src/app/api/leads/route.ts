import { NextRequest, NextResponse } from 'next/server'
import { getAdminTokenFromRequest, verifyAdminSessionToken } from '@/lib/admin-session'
import { LEAD_INTENTS, LEAD_PRIORITIES, LEAD_SOURCES, LEAD_STATUSES } from '@/lib/leads'
import type { Lead } from '@/types'

function unauthorized() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

async function sendLeadEmailNotification(payload: {
  fullName: string
  phone: string
  email?: string
  source: string
  intent: string
  notes?: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEADS_NOTIFICATION_EMAIL
  const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
  if (!apiKey || !to) return

  const text = [
    'Nuevo lead recibido',
    '',
    `Nombre: ${payload.fullName}`,
    `Telefono: ${payload.phone}`,
    `Email: ${payload.email || 'No indicado'}`,
    `Origen: ${payload.source}`,
    `Interes: ${payload.intent}`,
    `Notas: ${payload.notes || 'No indicado'}`,
  ].join('\n')

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Nuevo lead: ${payload.fullName}`,
      text,
    }),
  }).catch(() => null)
}

function createLeadResponse(body: {
  fullName: string
  phone: string
  email: string | null
  notes: string | null
  source: string
  intent: string
  priority: string
  propertyRef: string | null
  saleTimeline: string | null
}): Lead {
  const now = new Date()
  return {
    id: crypto.randomUUID(),
    fullName: body.fullName,
    email: body.email,
    phone: body.phone,
    source: body.source as Lead['source'],
    intent: body.intent as Lead['intent'],
    status: 'nuevo',
    priority: body.priority as Lead['priority'],
    propertyRef: body.propertyRef,
    notes: body.notes,
    saleTimeline: body.saleTimeline,
    assignedTo: null,
    firstResponseAt: null,
    lastContactAt: null,
    createdAt: now,
    updatedAt: now,
  }
}

export async function GET(request: NextRequest) {
  if (!verifyAdminSessionToken(getAdminTokenFromRequest(request))) {
    return unauthorized()
  }
  return NextResponse.json([])
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const fullName = String(body.fullName || '').trim()
    const phone = String(body.phone || '').trim()
    const email = String(body.email || '').trim() || null
    const notes = String(body.notes || '').trim() || null
    const source = String(body.source || 'web_contacto')
    const intent = String(body.intent || 'otro')
    const priority = String(body.priority || 'media')
    const propertyRef = String(body.propertyRef || '').trim() || null
    const saleTimeline = String(body.saleTimeline || '').trim() || null

    if (!fullName || !phone) {
      return NextResponse.json({ error: 'Nombre y telefono son obligatorios' }, { status: 400 })
    }
    if (!LEAD_SOURCES.includes(source as (typeof LEAD_SOURCES)[number])) {
      return NextResponse.json({ error: 'Origen de lead no valido' }, { status: 400 })
    }
    if (!LEAD_INTENTS.includes(intent as (typeof LEAD_INTENTS)[number])) {
      return NextResponse.json({ error: 'Tipo de interes no valido' }, { status: 400 })
    }
    if (!LEAD_PRIORITIES.includes(priority as (typeof LEAD_PRIORITIES)[number])) {
      return NextResponse.json({ error: 'Prioridad no valida' }, { status: 400 })
    }

    await sendLeadEmailNotification({
      fullName,
      phone,
      email: email || undefined,
      source,
      intent,
      notes: notes || undefined,
    })

    return NextResponse.json(
      createLeadResponse({
        fullName,
        phone,
        email,
        notes,
        source,
        intent,
        priority,
        propertyRef,
        saleTimeline,
      }),
      { status: 201 }
    )
  } catch {
    return NextResponse.json({ error: 'Error al crear lead' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  if (!verifyAdminSessionToken(getAdminTokenFromRequest(request))) {
    return unauthorized()
  }

  void request
  return NextResponse.json(
    { error: 'La edicion de leads requiere almacenamiento persistente (no disponible).' },
    { status: 501 }
  )
}
