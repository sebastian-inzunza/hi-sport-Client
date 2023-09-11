
import React from 'react';
import box from "../../assets/deportes/box.png"
import futbol from "../../assets/deportes/futbol.png"
import baseball from "../../assets/deportes/baseball.png"
import futbolAmericano from "../../assets/deportes/futbolAmericano.png"
import hiEnergy from "../../assets/hiEnergy.png"
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';
import { Row, Col } from 'antd';
import Image from 'next/image';


type Props = {}

const Footercontenido = (props: Props) => {
    const imageBox = box.src;
    const imageFutbol = futbol.src;
    const imageFutbolAmericano = futbolAmericano.src;
    const imageBaseball = baseball.src;
    const imageHiEnergy = hiEnergy.src;

    return (
        <footer className="bg-gray-800/40 text-white pt-10 relative">
            <div className="container mx-auto text-center flex md:justify-between justify-center">
                <div className="md:flex-col container">
                    {/* <ul className="md:flex hidden">

                        <li className="flex-grow text-center">
                            <span className="md:ml-0">Boxeo</span>
                            <img className="w-12 h-12 mx-auto mt-2" src={imageBox} alt="Box" />
                        </li>
                        ¿
                        <li className="flex-grow text-center">
                            <span className="md:ml-0">Beisbol</span>
                            <img className="w-12 h-12 mx-auto mt-2" src={imageBaseball} alt="Beisboll" />
                        </li>
                        <li className="flex-grow text-center">
                            <span className="md:ml-0">Futbol</span>
                            <img className="w-12 h-12 mx-auto mt-2" src={imageFutbol} alt="Futbol" />
                        </li>
                        <li className="flex-grow text-center">
                            <span className="md:ml-0">Futbol Americano</span>
                            <img className="w-12 h-12 mx-auto mt-2" src={imageFutbolAmericano} alt="Futbol Americano" />
                        </li>
                    </ul> */}

                    <div className="w-full h-1 bg-white/80 mt-5"></div>

                    <ul className='flex md:w-1/4 md:justify-between md:mx-auto mt-10 justify-center'>
                        <Col span={4} className='md:mx-3 mx-6'>
                            <Image className='logoRedes ' src={Facebook} alt='Follow us on Facebook' />
                        </Col>
                        <Col span={6} className='md:mx-3'>
                            <Image className='logoRedes' src={Instagram} alt='Follow us on Instagram' />
                        </Col>
                        <Col span={6} className='mr-3'>
                            <Image className='logoRedes' src={Twitter} alt='Follow us on Twitter' />
                        </Col>

                    </ul>
                </div>

            </div>
            <div className='bg-purple-600/20 pt-2 mt-10 '>
                <div className='flex md:justify-between justify-center items-center container mx-auto'>
                    <div className='flex items-center'>
                        <div className='w-24 '>
                            <Image src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' alt='logo' />

                        </div>
                        <span className='uppercase md:text-3xl font-bold md:ml-5'>#todo es posible</span>
                    </div>
                    <div className='md:flex md:items-center md:w-1/4 hidden '>
                        <div>
                            <Image src="https://hi-sports.tv/media/LigaBBVA.png" alt="" />

                        </div>
                        <div>
                            <Image src={imageHiEnergy} alt='logo' />

                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footercontenido