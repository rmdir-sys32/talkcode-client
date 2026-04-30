import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const alt = 'Slate: AI Coding Interviewer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #111111, #000000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '40px',
            padding: '60px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 800,
              letterSpacing: '-0.05em',
              background: 'linear-gradient(to right, #ffffff, #a3a3a3)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
            }}
          >
            Slate
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: '#d4d4d4',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            AI Coding Interviewer
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: '#737373',
              textAlign: 'center',
              marginTop: 40,
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Stop solving in silence. Practice with purpose.
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
