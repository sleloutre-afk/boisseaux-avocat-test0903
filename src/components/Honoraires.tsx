export default function Honoraires() {
  return (
    <section id="honoraires" style={{ background: '#f6f3ee', padding: '96px 24px' }}>
      <div className="max-w-5xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8a6c3e', marginBottom: '12px' }}>Honoraires</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#1a2233', fontWeight: 400, margin: '0 0 20px' }}>
            Transparence et accessibilité
          </h2>
          <p style={{ fontFamily: 'var(--font-lato)', color: '#6b6f78', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Les honoraires sont fixés librement et en accord avec le client, conformément à l'article 10 de la loi du 31 décembre 1971. Une convention d'honoraires est systématiquement établie avant toute mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              titre: 'Taux horaire',
              desc: 'Facturation au temps passé pour la gestion des dossiers contentieux, les plaidoiries et les missions de conseil nécessitant un suivi régulier.',
            },
            {
              titre: 'Forfait',
              desc: 'Honoraire global déterminé en amont pour les prestations bien définies : consultation, rédaction d\'acte, assistance à une audience unique.',
            },
            {
              titre: 'Aide juridictionnelle',
              desc: 'Maître Boisseaux accepte les missions au titre de l\'aide juridictionnelle totale ou partielle, sous réserve des conditions d\'attribution.',
            },
          ].map((item, i) => (
            <div key={i} style={{ padding: '36px 28px', background: '#ece6dc', borderTop: '2px solid rgba(176,141,87,0.4)' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: '#1a2233', fontWeight: 400, marginBottom: '14px' }}>{item.titre}</h3>
              <p style={{ fontFamily: 'var(--font-lato)', color: '#6b6f78', lineHeight: 1.7, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#ece6dc', padding: '32px 36px', borderLeft: '3px solid #b08d57' }}>
          <p style={{ fontFamily: 'var(--font-lato)', color: '#6b6f78', lineHeight: 1.75, margin: 0 }}>
            Des facilités de paiement échelonné peuvent être envisagées selon les situations. La première consultation peut être réalisée au cabinet, par téléphone ou en visioconférence.
          </p>
        </div>
      </div>
    </section>
  )
}
