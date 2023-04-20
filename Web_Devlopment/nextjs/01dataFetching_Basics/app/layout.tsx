import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href={'/users'} >about page</Link>
        </nav>
        {children}</body>
    </html>
  )
}
