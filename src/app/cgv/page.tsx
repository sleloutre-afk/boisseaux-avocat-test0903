import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CGV() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f6f3ee', minHeight: '100vh' }}>
        <div style={{ background: '#1a2233', padding: '120px 24px 64px' }}>
          <div className="max-w-3xl mx-auto">
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f6f3ee', fontWeight: 400, margin: 0 }}>Conditions générales de vente</h1>
          </div>
        </div>
        <div style={{ padding: '64px 24px' }}>
          <div className="max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-lato)', color: '#6b6f78', lineHeight: 1.8 }}>
            {[
              { titre: '1. Objet', contenu: 'Les présentes conditions générales régissent les prestations d\'avocat fournies par Maître Marie Boisseaux, inscrite au Barreau de Bordeaux, dont le cabinet est situé 99 rue Amédée Saint Germain, 33800 Bordeaux.' },
              { titre: '2. Honoraires', contenu: 'Les honoraires sont fixés librement en accord avec le client, conformément à l\'article 10 de la loi du 31 décembre 1971. Une convention d\'honoraires est établie avant tout commencement de mission. Maître Boisseaux accepte les missions au titre de l\'aide juridictionnelle.' },
              { titre: '3. Facturation et paiement', contenu: 'Les factures sont payables à réception. Des facilités de paiement peuvent être accordées selon les situations. En cas de retard de paiement, des pénalités légales sont applicables.' },
              { titre: '4. Secret professionnel', contenu: 'Maître Boisseaux est soumise au secret professionnel absolu (art. 66-5 loi 31 décembre 1971). Toutes les informations communiquées dans le cadre de la relation avocat-client sont strictement confidentielles.' },
              { titre: '5. Responsabilité', contenu: 'Maître Boisseaux est couverte par une assurance responsabilité civile professionnelle. Sa responsabilité ne peut être engagée qu\'en cas de faute prouvée dans l\'exécution de la mission convenue.' },
              { titre: '6. Médiation', contenu: 'En cas de litige relatif aux honoraires, le client peut saisir le Bâtonnier du Barreau de Bordeaux ou le médiateur de la consommation compétent.' },
              { titre: '7. Droit applicable', contenu: 'Les présentes conditions sont soumises au droit français. En cas de litige, les juridictions du ressort du Tribunal judiciaire de Bordeaux sont compétentes.' },
            ].map((s, i) => (
              <section key={i} style={{ marginBottom: '40px' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1a2233', fontWeight: 400, marginBottom: '16px' }}>{s.titre}</h2>
                <p style={{ margin: 0 }}>{s.contenu}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
