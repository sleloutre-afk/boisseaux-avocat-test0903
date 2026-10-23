import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f6f3ee', minHeight: '100vh' }}>
        <div style={{ background: '#1a2233', padding: '120px 24px 64px' }}>
          <div className="max-w-3xl mx-auto">
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f6f3ee', fontWeight: 400, margin: 0 }}>Mentions légales</h1>
          </div>
        </div>
        <div style={{ padding: '64px 24px' }}>
          <div className="max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-lato)', color: '#6b6f78', lineHeight: 1.8 }}>
            {[
              { titre: 'Éditeur du site', contenu: 'Maître Marie Boisseaux, avocate inscrite au Barreau de Bordeaux.\n99 rue Amédée Saint Germain — 33800 Bordeaux\nTél. : 06 15 99 71 61\nE-mail : marieboisseauxavocat@gmail.com' },
              { titre: 'Réglementation professionnelle', contenu: 'Maître Marie Boisseaux est avocate au Barreau de Bordeaux, soumise aux règles déontologiques définies par la loi du 31 décembre 1971 et le Règlement Intérieur National (RIN).\nOrdre des avocats de Bordeaux — Place de la République, 33000 Bordeaux.' },
              { titre: 'Hébergement', contenu: 'Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, California 94104, États-Unis.' },
              { titre: 'Propriété intellectuelle', contenu: 'L\'ensemble du contenu de ce site est la propriété exclusive de Maître Marie Boisseaux. Toute reproduction, même partielle, est interdite sans autorisation préalable.' },
              { titre: 'Données personnelles', contenu: 'Les informations recueillies via ce site sont destinées uniquement à Maître Boisseaux. Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression : marieboisseauxavocat@gmail.com.' },
            ].map((s, i) => (
              <section key={i} style={{ marginBottom: '40px' }}>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', color: '#1a2233', fontWeight: 400, marginBottom: '16px' }}>{s.titre}</h2>
                <p style={{ whiteSpace: 'pre-line', margin: 0 }}>{s.contenu}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
