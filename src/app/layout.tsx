import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maître Marie Boisseaux — Avocate à Bordeaux',
  description: 'Cabinet Marie Boisseaux Avocat — Droit pénal, droit civil, indemnisation des victimes et droit de la consommation à Bordeaux.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
