export default function Citation() {
  return (
    <section style={{ background: '#1e1c2e', padding: '80px 24px' }}>
      <div className="max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, rgba(122,106,154,0.6))', margin: '0 auto 32px' }} />
        <blockquote style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', color: '#f5f4f8', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.55, margin: '0 0 28px' }}>
          « Chaque dossier mérite une défense rigoureuse et un accompagnement humain. C'est cette conviction qui guide mon exercice depuis le premier jour. »
        </blockquote>
        <cite style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6a9a', fontStyle: 'normal' }}>
          Maître Marie Boisseaux — Avocate au Barreau de Bordeaux
        </cite>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to top, transparent, rgba(122,106,154,0.6))', margin: '32px auto 0' }} />
      </div>
    </section>
  )
}
