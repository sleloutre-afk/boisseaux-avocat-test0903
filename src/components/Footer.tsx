import Link from 'next/link'
import { MonogramMB } from './Navbar'

export default function Footer() {
  return (
    <footer style={{ background: '#111020', borderTop: '1px solid rgba(122,106,154,0.15)', padding: '56px 24px 32px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <MonogramMB size={40} color="#7a6a9a" />
              <span style={{ fontFamily: 'var(--font-playfair)', color: '#f5f4f8', fontSize: '0.9rem', letterSpacing: '0.06em' }}>
                Marie Boisseaux
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-lato)', color: '#6a6080', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
              Avocate au Barreau de Bordeaux.<br />
              Pénal · Civil · Victimes · Consommation
            </p>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7a6a9a', marginBottom: '16px' }}>Navigation</p>
            {[
              { href: '#cabinet', label: 'Le Cabinet' },
              { href: '#domaines', label: 'Domaines' },
              { href: '#honoraires', label: 'Honoraires' },
              { href: '/ressources', label: 'Ressources' },
              { href: '#contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-lato)', color: '#6a6080', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '8px' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7a6a9a', marginBottom: '16px' }}>Coordonnées</p>
            <address style={{ fontStyle: 'normal' }}>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#6a6080', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '8px' }}>
                99 rue Amédée Saint Germain<br />33800 Bordeaux
              </p>
              <a href="tel:+33615997161" style={{ display: 'block', fontFamily: 'var(--font-lato)', color: '#6a6080', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '4px' }}>06 15 99 71 61</a>
              <a href="mailto:marieboisseauxavocat@gmail.com" style={{ display: 'block', fontFamily: 'var(--font-lato)', color: '#6a6080', fontSize: '0.85rem', textDecoration: 'none' }}>marieboisseauxavocat@gmail.com</a>
            </address>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(122,106,154,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', color: '#6a6080', fontSize: '0.75rem', margin: 0 }}>
            © {new Date().getFullYear()} Maître Marie Boisseaux — Avocate au Barreau de Bordeaux
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/mentions-legales" style={{ fontFamily: 'var(--font-lato)', color: '#6a6080', fontSize: '0.75rem', textDecoration: 'none' }}>Mentions légales</Link>
            <Link href="/cgv" style={{ fontFamily: 'var(--font-lato)', color: '#6a6080', fontSize: '0.75rem', textDecoration: 'none' }}>CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
