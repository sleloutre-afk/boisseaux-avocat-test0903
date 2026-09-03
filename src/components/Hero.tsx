'use client'

import { MonogramMB } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', background: '#1e1c2e', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <img src="/hero.png" alt="" aria-hidden="true" className="hero-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(30,28,46,0.3) 0%, rgba(30,28,46,0.65) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: '760px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <MonogramMB size={96} color="#7a6a9a" />
        </div>
        <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#7a6a9a', marginBottom: '20px' }}>
          Cabinet Marie Boisseaux Avocat
        </p>
        <h1 style={{ fontFamily: 'var(--font-playfair)', color: '#f5f4f8', fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.18, margin: '0 0 24px' }}>
          Maître Marie Boisseaux
        </h1>
        <p style={{ fontFamily: 'var(--font-lato)', color: '#ccc8da', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 40px', fontWeight: 300 }}>
          Droit pénal · Droit civil · Indemnisation des victimes<br />
          Droit de la consommation
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact"
            style={{ display: 'inline-block', padding: '14px 32px', background: '#7a6a9a', color: '#f5f4f8', fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#5a4a7a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#7a6a9a')}
          >Prendre contact</a>
          <a href="#domaines"
            style={{ display: 'inline-block', padding: '14px 32px', border: '1px solid rgba(122,106,154,0.5)', color: '#ccc8da', fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#7a6a9a'; e.currentTarget.style.color = '#9080b8' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(122,106,154,0.5)'; e.currentTarget.style.color = '#ccc8da' }}
          >Domaines d'intervention</a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)' }}>
        <span style={{ display: 'block', width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(122,106,154,0.6))' }} />
      </div>
    </section>
  )
}
