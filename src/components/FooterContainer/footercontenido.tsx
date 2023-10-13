import React from 'react';
import { Row, Col } from 'antd';
import { Image } from '@nextui-org/react';

type Props = {};

const Footercontenido = (props: Props) => {


    return (
        <footer className='bg-gray-800/40 text-white pt-10 relative'>
            <div className='container mx-auto text-center flex md:justify-between justify-center'>
                <div className='md:flex-col container'>
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

                    <div className='w-full h-1 bg-white/80 mt-5'></div>

                    <ul className='flex md:w-1/4 md:justify-between md:mx-auto mt-10 justify-center'>
                        <Col span={6} className=''>
                            <img className='logoRedes ' src='/iconsZyan/twitch.png' alt='Follow us on Facebook' />
                        </Col>
                        <Col span={6} className=''>
                            <img className='logoRedes' src='/iconsZyan/insta.png' alt='Follow us on Instagram' />
                        </Col>
                        <Col span={6} className=''>
                            <img className='logoRedes' src='/iconsZyan/twiter.png' alt='Follow us on Twitter' />
                        </Col>
                    </ul>
                </div>
            </div>
            <div className='bg-purple-600/20 pt-2 mt-10 '>
                <div className='flex justify-center items-center container mx-auto'>
                    <div className='flex items-center'>
                        <div className='w-24 '>
                            <Image src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' alt='logo' />
                        </div>
                        <span className='uppercase md:text-3xl font-bold md:ml-5 text-2xl' style={{ color: "#ffee92" }}>#todo es posible</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footercontenido;
