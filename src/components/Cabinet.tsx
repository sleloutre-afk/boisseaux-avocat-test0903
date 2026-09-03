export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#f5f4f8', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="cabinet-grid">

          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', right: '1.5rem', bottom: '1.5rem', border: '1px solid rgba(122,106,154,0.22)' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/boisseaux.png"
              alt="Maître Marie Boisseaux — Avocate au Barreau de Bordeaux"
              style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center top', display: 'block', position: 'relative' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to top, rgba(30,28,46,0.45), transparent)' }} />
          </div>

          {/* Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '32px', height: '1px', background: '#7a6a9a' }} />
              <span style={{ fontFamily: 'var(--font-lato)', color: '#7a6a9a', fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Le cabinet</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 400, color: '#1e1c2e', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Maître Marie<br /><em style={{ color: '#7a6a9a' }}>Boisseaux</em>
            </h2>

            <p style={{ fontFamily: 'var(--font-lato)', color: 'rgba(30,28,46,0.65)', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '1rem' }}>
              Maître Marie Boisseaux a prêté serment le <strong style={{ color: '#1e1c2e' }}>16 novembre 2011</strong> au Barreau de Bordeaux. Titulaire d'un Master II en Droit privé fondamental de l'Université de Poitiers et d'un Master 2 en droit judiciaire de l'École du Centre Ouest des Avocats, elle a complété sa formation par un certificat en Droit des technologies de l'information au CNAM.
            </p>

            <p style={{ fontFamily: 'var(--font-lato)', color: 'rgba(30,28,46,0.65)', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '1rem' }}>
              Elle a exercé en contentieux civil et pénal au sein de la <strong style={{ color: '#1e1c2e' }}>SCP RIVRY LESEUR HUBERT</strong> à Meaux, puis comme juriste chez <strong style={{ color: '#1e1c2e' }}>CFDP Assurances</strong> à Paris, avant d'exercer au sein de l'association <strong style={{ color: '#1e1c2e' }}>Droits d'urgence</strong> pour des consultations généralistes dans plusieurs arrondissements parisiens.
            </p>

            <p style={{ fontFamily: 'var(--font-lato)', color: 'rgba(30,28,46,0.65)', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '2rem' }}>
              Installée à <strong style={{ color: '#1e1c2e' }}>Bordeaux depuis 2017</strong>, elle exerce à titre individuel et accompagne aussi bien des particuliers que des entreprises dans leurs litiges civils, pénaux et de consommation. Elle accepte l'aide juridictionnelle.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(122,106,154,0.30)' }}>
              {[
                'Master II Droit privé fondamental — Université de Poitiers',
                'Master 2 Droit judiciaire — École du Centre Ouest des Avocats (2011)',
                'Certificat Droit des TIC & données personnelles — CNAM (2016)',
                'Barreau de Bordeaux — Serment 16 novembre 2011',
                'Aide juridictionnelle acceptée · Anglais',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7a6a9a', flexShrink: 0, marginTop: '0.45rem' }} />
                  <span style={{ fontFamily: 'var(--font-lato)', color: 'rgba(30,28,46,0.60)', fontSize: '0.80rem', lineHeight: 1.60 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
