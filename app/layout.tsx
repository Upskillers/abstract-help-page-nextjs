import '../styles/globals.css';
import type { Metadata } from 'next'
import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Abstract Help Centre',
  description: 'Abstract Help Centre',
}
 
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
      <div className='min-h-[100vh] px-0 py-0 flex flex-col justify-center items-center'>

        <Navbar />
        <main className='pb-[5rem] flex grow flex-col flex-wrap items-center justify-center w-full'>
          {children}
        </main>
        <Footer />
      </div>
      </body>
    </html>
  )
}