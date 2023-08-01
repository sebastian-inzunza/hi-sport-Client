import Image from 'next/image'
import { Inter } from 'next/font/google'

import Carousel from '../components/carousel'
import img from '../assets/images/HS_Sitio_contruccion.png'

const inter = Inter({ subsets: ['latin'] })

const videos = [
  'https://sissamx.com.mx/hi-sports/videos/05.mp4',
  'https://sissamx.com.mx/hi-sports/videos/06.mp4',
  'https://sissamx.com.mx/hi-sports/videos/07.mp4'
]

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center align-middle justify-center ${inter.className}`}>
      <Image className='w-screen h-auto' src='https://sissamx.com.mx/hi-sports/images/home/construction.png' alt='bajo construccion' width={1024} height={1024} priority />
      <div className='p-[10%]'>
        <Carousel>
          {videos.map((video) => (
            <video className='w-screen h-auto' src={video} key={video} autoPlay loop muted />
          ))}
        </Carousel>
      </div>
    </main>
  )
}
