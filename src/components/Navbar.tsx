'use client'

import { useEffect, useState } from 'react'

export function MonogramMB({ color = '#b08d57', size = 64 }: { color?: string; size?: number }) {
  const r = size / 2
  const stroke = size * 0.025
  const fsMain = size * 0.210
  const fsSub  = size * 0.095
  const gap    = size * 0.052
  const yMain  = r - fsSub * 0.5 - gap * 0.5 + fsMain * 0.36
  const ySub   = yMain + fsSub + gap
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      <circle cx={r} cy={r} r={r - stroke} stroke={color} strokeWidth={stroke} fill="none" />
      <circle cx={r} cy={r} r={r - stroke * 4} stroke={color} strokeWidth={stroke * 0.4} fill="none" opacity="0.35" />
      <text x={r} y={yMain} textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize={fsMain} fontWeight="400" letterSpacing="0.04em" fill={color}>M.B.</text>
      <text x={r} y={ySub}  textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize={fsSub}  fontWeight="400" letterSpacing="0.22em" fill={color} opacity="0.65">AVOCAT</text>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#cabinet',    label: 'Le Cabinet' },
    { href: '#domaines',   label: 'Domaines' },
    { href: '#honoraires', label: 'Honoraires' },
    { href: '#ressources', label: 'Ressources' },
    { href: '#contact',    label: 'Contact' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(26,34,51,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(176,141,87,0.18)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        <a href="#" className="flex items-center gap-3" aria-label="Cabinet Marie Boisseaux Avocat">
          <MonogramMB size={44} color="#b08d57" />
          <span style={{ fontFamily: 'var(--font-playfair)', color: '#f6f3ee', fontSize: '1rem', letterSpacing: '0.08em', lineHeight: 1.2 }}>
            Marie <span style={{ color: '#b08d57' }}>Boisseaux</span>
            <span style={{ display: 'block', fontFamily: 'var(--font-lato)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b6f78', fontWeight: 400, marginTop: '2px' }}>Avocate au Barreau de Bordeaux</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: '#d4cdc0', fontFamily: 'var(--font-lato)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c9a872')}
              onMouseLeave={e => (e.currentTarget.style.color = '#d4cdc0')}
            >{l.label}</a>
          ))}
        </nav>

        <button className="flex md:hidden flex-col justify-center items-center gap-1.5 w-8 h-8" onClick={() => setOpen(!open)} aria-label="Menu">
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#b08d57', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(3px,3px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#b08d57', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#b08d57', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(3px,-3px)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(15,21,32,0.98)', borderTop: '1px solid rgba(176,141,87,0.2)' }} className="md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '14px 24px', color: '#d4cdc0', fontFamily: 'var(--font-lato)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(176,141,87,0.1)' }}
            >{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
