export default function Citation() {
  return (
    <section style={{ background: '#1a2233', padding: '80px 24px' }}>
      <div className="max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, rgba(176,141,87,0.6))', margin: '0 auto 32px' }} />
        <blockquote style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', color: '#f6f3ee', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.55, margin: '0 0 28px' }}>
          « Chaque dossier mérite une défense rigoureuse et un accompagnement humain. C'est cette conviction qui guide mon exercice depuis le premier jour. »
        </blockquote>
        <cite style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b08d57', fontStyle: 'normal' }}>
          Maître Marie Boisseaux — Avocate au Barreau de Bordeaux
        </cite>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to top, transparent, rgba(176,141,87,0.6))', margin: '32px auto 0' }} />
      </div>
    </section>
  )
}
