import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticle, getArticles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return getArticles().map(a => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <>
      <Navbar />
      <main style={{ background: '#f5f4f8', minHeight: '100vh' }}>
        <div style={{ background: '#1e1c2e', padding: '120px 24px 64px' }}>
          <div className="max-w-3xl mx-auto">
            <Link href="/ressources" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a6a9a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
              ← Retour aux ressources
            </Link>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a6a9a', marginBottom: '16px' }}>{article.categorie}</p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#f5f4f8', fontWeight: 400, lineHeight: 1.28, margin: '0 0 20px' }}>{article.titre}</h1>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.8rem', color: '#6a6080', margin: 0 }}>
              {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · Cabinet Marie Boisseaux Avocat
            </p>
          </div>
        </div>
        <div style={{ padding: '64px 24px' }}>
          <div className="max-w-3xl mx-auto">
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', color: '#1e1c2e', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #ccc8da' }}>
              {article.resume}
            </p>
            <div className="article-body"
              style={{ fontFamily: 'var(--font-lato)', color: '#6a6080', lineHeight: 1.85, fontSize: '1rem' }}
              dangerouslySetInnerHTML={{ __html: article.contenu }}
            />
            <div style={{ marginTop: '56px', background: '#ebe8f2', padding: '36px' }}>
              <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.8rem', color: '#6a6080', lineHeight: 1.7, margin: '0 0 16px' }}>
                Cet article est fourni à titre informatif et ne constitue pas un conseil juridique. Pour toute situation spécifique, consultez un avocat.
              </p>
              <Link href="/#contact" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a6a9a', textDecoration: 'none', borderBottom: '1px solid rgba(122,106,154,0.4)', paddingBottom: '2px' }}>
                Contacter Maître Boisseaux →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
