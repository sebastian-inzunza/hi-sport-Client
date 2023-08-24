import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import Head from 'next/head'

import Carousel from '../components/carousel'

const bebas = Bebas_Neue({ weight: '400', preload: false })

const videos = [
  'https://sissamx.com.mx/hi-sports/videos/05.mp4',
  'https://sissamx.com.mx/hi-sports/videos/06.mp4',
  'https://sissamx.com.mx/hi-sports/videos/07.mp4'
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi! Sports</title>
        <meta name='description' content='Hi Sports. En pretemporada' />
        <meta property='og:image' content='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' />

        <meta name='twitter:title' content='Hi! Sports' />
        <meta name='twitter:description' content='Hi Sports. En pretemporada' />
        <meta name='twitter:image' content='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' />
        <meta name='twitter:card' content='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' />
      </Head>
      <main
        className={
          'flex min-h-screen flex-col items-center align-middle justify-center bg-example-bg bg-cover bg-center bg-fixed'
        }
      >
        <h1 className={`text-[4rem] md:text-[6rem] ${bebas.className} text-font`}>en pretemporada</h1>

        <div className='pl-[2%] pr-[2%] lg:pl-[10%] lg:pr-[10%] block lg:flex justify-between items-strech'>
          <div className='basis-2/3'>
            <a
              href='https://online.caliente.mx/promoRedirect?member=hisports&campaign=DEFAULT&channel=DEFAULT&zone=54623980&lp=0'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className='h-[100%] hidden lg:block'
                src='https://sissamx.com.mx/hi-sports/images/home/160x600.png'
                alt='caliente-publicidad-160x600.png'
                width={1024}
                height={1024}
                priority
              />
            </a>
          </div>
          <div className='basis-1/8'>
            <Carousel>
              {videos.map((video) => (
                <video src={video} key={video} autoPlay loop muted />
              ))}
            </Carousel>
          </div>
          <div className='basis-2/3'>
            <a
              href='https://online.caliente.mx/promoRedirect?member=hisports&campaign=DEFAULT&channel=DEFAULT&zone=54623980&lp=0'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className='h-[100%] hidden lg:block'
                src='https://sissamx.com.mx/hi-sports/images/home/160x600.png'
                alt='caliente-publicidad-160x600.png'
                width={1024}
                height={1024}
                priority
              />
            </a>
          </div>
        </div>
        <div className='pl-[2%] pr-[2%] pb-[2%] lg:pl-[10%] lg:pr-[10%]'>
          <a
            href='https://online.caliente.mx/promoRedirect?member=hisports&campaign=DEFAULT&channel=DEFAULT&zone=54623980&lp=0'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              className='w-screen h-auto'
              src='https://sissamx.com.mx/hi-sports/images/home/970x250.png'
              alt='construccion.png'
              width={1024}
              height={1024}
              priority
            />
          </a>
        </div>
      </main>
    </>
  )
}
