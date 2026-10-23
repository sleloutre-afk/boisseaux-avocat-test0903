'use client'

const domaines = [
  {
    titre: 'Droit pénal',
    texte: 'Défense des personnes mises en cause à tous les stades de la procédure — garde à vue, instruction, jugement et appel. Assistance aux victimes d\'infractions. Contentieux pénal général : atteintes aux personnes, aux biens, infractions routières, défense d\'urgence.',
    svg: '/icons/penal.svg',
  },
  {
    titre: 'Droit civil & contentieux',
    texte: 'Litiges du quotidien entre particuliers et entreprises : conflits de voisinage, troubles anormaux, responsabilité civile, exécution des contrats, recouvrement de créances, procédures d\'urgence et référés. Représentation devant les juridictions civiles et d\'appel.',
    svg: '/icons/justice.svg',
  },
  {
    titre: 'Indemnisation des victimes',
    texte: 'Accompagnement des victimes d\'accidents corporels, d\'infractions pénales et de préjudices divers dans l\'évaluation et l\'obtention de leur indemnisation. Négociation avec les assureurs, recours devant les fonds de garantie (FGTI, FIVA) et contentieux judiciaire.',
    svg: '/icons/victime.svg',
  },
  {
    titre: 'Droit de la consommation & crédit',
    texte: 'Défense des consommateurs face aux pratiques déloyales, litiges relatifs aux crédits à la consommation et immobiliers, annulation de contrats abusifs. Expertise particulière dans le contentieux des contrats de vente et de crédit liés aux panneaux solaires.',
    svg: '/icons/consommation.svg',
  },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ background: '#ece6dc', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8a6c3e', marginBottom: '12px' }}>Domaines d'intervention</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#1a2233', fontWeight: 400, margin: 0 }}>
            Un accompagnement global
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {domaines.map((d, i) => (
            <div key={i} style={{ background: '#f6f3ee', padding: '40px 36px', borderTop: '3px solid #b08d57' }}>
              <div style={{ marginBottom: '20px' }}>
                <div aria-hidden="true"
                  style={{ width: '40px', height: '40px', background: '#b08d57', WebkitMask: `url(${d.svg}) center / contain no-repeat`, mask: `url(${d.svg}) center / contain no-repeat` }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1a2233', fontWeight: 400, marginBottom: '16px' }}>{d.titre}</h3>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#6b6f78', lineHeight: 1.75, margin: 0, fontSize: '0.92rem' }}>{d.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
