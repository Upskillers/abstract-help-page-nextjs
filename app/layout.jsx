import '../styles/globals.css';
import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';
import Script from 'next/script';
import Head from 'next/head';
export const metadata = {
  title: 'Abstract Help Centre',
  description: 'Abstract Help Centre',
}
 
export default function RootLayout({children}) {
  // function dark(){
  //   const theme = JSON.parse(localStorage.getItem('theme'));
  //   // if not theme and user OS is dark mode
  //   if ((!theme &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches) || theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     //     themeToggleDarkIcon.classList.remove('hidden');
  //   }
  // }
  
  // dark()
  return (
    <html lang="en">
    <Head>
      </Head>
      <body>
      <div className='min-h-[100vh] px-0 py-0 flex flex-col justify-center items-center'>

        <Navbar />
        <main className='py-[5rem] w-full flex grow flex-col flex-wrap items-center justify-center dark:bg-primary-950'>
          {children}
        </main>
        <Footer />
      </div>
      </body>
    </html>
  )
}