export default function Contact() {
  return (
    <section id="contact" style={{ background: '#f5f4f8', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0" style={{ overflow: 'hidden' }}>
        {/* Infos */}
        <div style={{ background: '#1e1c2e', padding: '64px 56px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#7a6a9a', marginBottom: '16px' }}>Contact</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#f5f4f8', fontWeight: 400, lineHeight: 1.25, margin: '0 0 32px' }}>
            Prendre rendez-vous
          </h2>
          <div style={{ width: '32px', height: '2px', background: '#7a6a9a', marginBottom: '36px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6a6080', marginBottom: '6px' }}>Adresse</p>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#ccc8da', lineHeight: 1.6, margin: 0 }}>
                99 rue Amédée Saint Germain<br />33800 Bordeaux
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6a6080', marginBottom: '6px' }}>Téléphone</p>
              <a href="tel:+33615997161" style={{ fontFamily: 'var(--font-lato)', color: '#ccc8da', textDecoration: 'none', letterSpacing: '0.04em' }}>
                06 15 99 71 61
              </a>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6a6080', marginBottom: '6px' }}>E-mail</p>
              <a href="mailto:marieboisseauxavocat@gmail.com" style={{ fontFamily: 'var(--font-lato)', color: '#ccc8da', textDecoration: 'none' }}>
                marieboisseauxavocat@gmail.com
              </a>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6a6080', marginBottom: '6px' }}>Barreau</p>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#ccc8da', margin: 0 }}>
                Barreau de Bordeaux<br />
                Serment le 16 novembre 2011
              </p>
            </div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="tel:+33615997161"
              style={{ display: 'inline-block', padding: '12px 24px', background: '#7a6a9a', color: '#f5f4f8', fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Appeler
            </a>
            <a href="mailto:marieboisseauxavocat@gmail.com"
              style={{ display: 'inline-block', padding: '12px 24px', border: '1px solid rgba(122,106,154,0.5)', color: '#ccc8da', fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Écrire
            </a>
          </div>
        </div>

        {/* Image bureau */}
        <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
          <img src="/office.png" alt="Cabinet Marie Boisseaux Avocat"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,28,46,0.2)' }} />
        </div>
      </div>
    </section>
  )
}
