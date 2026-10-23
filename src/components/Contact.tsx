export default function Contact() {
  return (
    <section id="contact" style={{ background: '#f6f3ee', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0" style={{ overflow: 'hidden' }}>
        {/* Infos */}
        <div style={{ background: '#1a2233', padding: '64px 56px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b08d57', marginBottom: '16px' }}>Contact</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#f6f3ee', fontWeight: 400, lineHeight: 1.25, margin: '0 0 32px' }}>
            Prendre rendez-vous
          </h2>
          <div style={{ width: '32px', height: '2px', background: '#b08d57', marginBottom: '36px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6f78', marginBottom: '6px' }}>Adresse</p>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#d4cdc0', lineHeight: 1.6, margin: 0 }}>
                99 rue Amédée Saint Germain<br />33800 Bordeaux
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6f78', marginBottom: '6px' }}>Téléphone</p>
              <a href="tel:+33615997161" style={{ fontFamily: 'var(--font-lato)', color: '#d4cdc0', textDecoration: 'none', letterSpacing: '0.04em' }}>
                06 15 99 71 61
              </a>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6f78', marginBottom: '6px' }}>E-mail</p>
              <a href="mailto:marieboisseauxavocat@gmail.com" style={{ fontFamily: 'var(--font-lato)', color: '#d4cdc0', textDecoration: 'none' }}>
                marieboisseauxavocat@gmail.com
              </a>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6f78', marginBottom: '6px' }}>Barreau</p>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#d4cdc0', margin: 0 }}>
                Barreau de Bordeaux<br />
                Serment le 16 novembre 2011
              </p>
            </div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="tel:+33615997161"
              style={{ display: 'inline-block', padding: '12px 24px', background: '#b08d57', color: '#f6f3ee', fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Appeler
            </a>
            <a href="mailto:marieboisseauxavocat@gmail.com"
              style={{ display: 'inline-block', padding: '12px 24px', border: '1px solid rgba(176,141,87,0.5)', color: '#d4cdc0', fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Écrire
            </a>
          </div>
        </div>

        {/* Image bureau */}
        <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
          <img src="/office.png" alt="Cabinet Marie Boisseaux Avocat"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,34,51,0.2)' }} />
        </div>
      </div>
    </section>
  )
}
