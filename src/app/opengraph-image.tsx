import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Grab - Restaurant Burgers Gourmet à Dakar'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, #32CD32 0%, transparent 50%), radial-gradient(circle at 70% 80%, #32CD32 0%, transparent 50%)',
            opacity: 0.1,
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              color: '#32CD32',
              marginBottom: 20,
              textShadow: '0 4px 8px rgba(0,0,0,0.5)',
            }}
          >
            Grab
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 48,
              color: '#FFFFFF',
              marginBottom: 30,
              fontWeight: 600,
            }}
          >
            Restaurant Burgers Gourmet
          </div>
          
          {/* Location */}
          <div
            style={{
              fontSize: 36,
              color: '#CCCCCC',
              marginBottom: 40,
            }}
          >
            Ngor, Dakar - Sénégal
          </div>
          
          {/* CTA */}
          <div
            style={{
              background: '#32CD32',
              color: '#FFFFFF',
              padding: '20px 40px',
              borderRadius: 50,
              fontSize: 32,
              fontWeight: 'bold',
              boxShadow: '0 8px 16px rgba(50, 205, 50, 0.3)',
            }}
          >
            Découvrez nos burgers artisanaux
          </div>
        </div>
        
        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #32CD32 0%, #00FF00 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
} 