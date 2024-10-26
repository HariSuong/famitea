import type { Metadata } from 'next'
import { Josefin_Sans, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Providers from '@/lib/providers'
import { Toaster } from '@/components/ui/sonner'

const josefin_sans = Josefin_Sans({
  subsets: ['vietnamese'],
  variable: '--font-josefin-sans'
})
const montserrat = Montserrat({
  subsets: ['vietnamese'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'FamiTea',
  description: 'FAMI TEA đã được ấp ủ bởi tình yêu thương và mong muốn mang đến cho mọi người những ly trà ngon, trọn vẹn. '
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='vi'>
      <head>
        {/* <img src="/img/logo/logo.png"  /> */}
        
      <link rel="icon" href="/img/logo/logo.png" /> 
      </head>
      <body className={`${josefin_sans.variable} ${montserrat.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

        <Toaster
          toastOptions={{
            unstyled: true,
            classNames: {
              content: 'pb-4 pt-1 px-6 text-white',
              error: 'bg-[#b74444]',
              success: 'bg-[#44b751]'
              // warning: 'bg-[#ffda6a]',
              // info: 'bg-[#6edff6]'
            }
          }}
        />
      </body>
    </html>
  )
}
