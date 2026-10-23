'use client'

import { MonogramMB } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', background: '#1a2233', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <img src="/hero.png" alt="" aria-hidden="true" className="hero-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,34,51,0.3) 0%, rgba(26,34,51,0.65) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: '760px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <MonogramMB size={96} color="#b08d57" />
        </div>
        <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08d57', marginBottom: '20px' }}>
          Cabinet Marie Boisseaux Avocat
        </p>
        <h1 style={{ fontFamily: 'var(--font-playfair)', color: '#f6f3ee', fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.18, margin: '0 0 24px' }}>
          Maître Marie Boisseaux
        </h1>
        <p style={{ fontFamily: 'var(--font-lato)', color: '#d4cdc0', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 40px', fontWeight: 300 }}>
          Droit pénal · Droit civil · Indemnisation des victimes<br />
          Droit de la consommation
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact"
            style={{ display: 'inline-block', padding: '14px 32px', background: '#b08d57', color: '#1a2233', fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c9a872')}
            onMouseLeave={e => (e.currentTarget.style.background = '#b08d57')}
          >Prendre contact</a>
          <a href="#domaines"
            style={{ display: 'inline-block', padding: '14px 32px', border: '1px solid rgba(176,141,87,0.5)', color: '#d4cdc0', fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#b08d57'; e.currentTarget.style.color = '#c9a872' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(176,141,87,0.5)'; e.currentTarget.style.color = '#d4cdc0' }}
          >Domaines d'intervention</a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)' }}>
        <span style={{ display: 'block', width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(176,141,87,0.6))' }} />
      </div>
    </section>
  )
}
