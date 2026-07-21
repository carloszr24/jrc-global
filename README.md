# Sales Inmobiliaria — Web

Next.js + TypeScript + Tailwind. Catálogo de propiedades en archivo local (`src/data/properties.ts`).

---

## Setup en local

### 1. Instalar dependencias

```bash
npm install
```

### 2. Variables de entorno

```bash
cp .env.example .env
```

- `ADMIN_PASSWORD` — acceso a `/admin`
- `RESEND_API_KEY` (opcional) — alertas por email de nuevos leads
- `RESEND_FROM_EMAIL` (opcional)
- `LEADS_NOTIFICATION_EMAIL` (opcional)

### 3. Desarrollo

```bash
npm run dev
```

- Web: [http://localhost:3000](http://localhost:3000)
- Admin propiedades: `/admin`

### 4. Propiedades

Edita [`src/data/properties.ts`](src/data/properties.ts) o sube imágenes a `public/images/properties/`.

---

## Despliegue en Vercel

1. Conecta el repo en [Vercel](https://vercel.com).
2. **Environment Variables**: `ADMIN_PASSWORD` y, si quieres alertas de leads, las de Resend.
3. Deploy: `next build` (por defecto).

---

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
