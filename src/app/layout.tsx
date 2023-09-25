import './globals.css'

import { Inter } from 'next/font/google'

// import { Noto_Sans_JP } from 'next/font/google'
import StoreProvider from './_store/StoreProvider'

import type { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })
// export const notoSansJP = Noto_Sans_JP({
//   weight: ['300', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: '料金計算',
  description: '料金を計算するアプリです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="ja">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
