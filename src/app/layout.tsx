import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './pages/navbar'
import Head from 'next/head'



export const metadata: Metadata = {
  title: 'AJI RAMDANI - ARIDEV',
  description: 'Portofolio Aji Ramdani',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
         <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="bg-[#080808]">
        <Navbar />
        {children}
        </body>
    </html>
  )
}
