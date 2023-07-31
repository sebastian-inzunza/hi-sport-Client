import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      {/* <Image src='/vercel.svg' alt='test background' width={100} height={24} priority /> */}
      hi sports under construction
    </main>
  )
}
