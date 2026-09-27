import { ImageResponse } from 'next/og'
import { site } from '@/lib/content'

export const runtime = 'edge'
export const alt = `${site.name} — ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#09090b',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #1a1a1f 0%, #09090b 60%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#22c55e',
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#a1a1aa',
            marginTop: 32,
            maxWidth: 800,
          }}
        >
          {site.description}
        </div>
      </div>
    ),
    { ...size }
  )
}
