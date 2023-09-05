import Head from 'next/head';
import { Col } from 'antd';
import HeaderContainer from '@/components/header/headerContainer';
import ContentContainer from '@/components/content/contentContainer';
import ProgramacionContainer from '@/components/content/programacionContainer';
import BreakingNewsContainer from '../components/content/breakingNewsContainer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Hi! Sports</title>
                <meta name='description' content='Hi Sports. #TODO ES POSIBLE' />
                <meta property='og:image' content='favicon.ico' />

                <meta name='twitter:title' content='Hi! Sports' />
                <meta name='twitter:description' content='Hi Sports. #TODO ES POSIBLE' />
                <meta name='twitter:image' content='favicon.ico' />
                <meta name='twitter:card' content='favicon.ico' />
            </Head>
            {/* 
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
        </div>*/}
            <div className='background-image' />
            <HeaderContainer />
            <ContentContainer />
            <ProgramacionContainer />
            <BreakingNewsContainer />
            <Col xs={0} md={24}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Col>
        </>
    );
}
