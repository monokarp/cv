import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const title = 'CV Oleg Bondarenko';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content="A brief summary of my professional career in SE" key="ogdesc" />
        <meta property="og:site_name" content={title} key="ogsn" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
