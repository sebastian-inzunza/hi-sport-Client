
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

import Image from 'next/image';


type Props = {}

const footercontenido = (props: Props) => {
    const imageBox = box.src;
    const imageFutbol = futbol.src;
    const imageFutbolAmericano = futbolAmericano.src;
    const imageBaseball = baseball.src;
    const imageHiEnergy = hiEnergy.src;

    return (
        <footer className="bg-gray-800/40 text-white pt-10 mt-10 relative">
            <div className="container mx-auto text-center flex md:justify-between justify-center">
                <div className=''>
                    <ul className="space-y-5">
                        <li className="flex items-center md:ml-0 ml-28">
                            <img className="w-12 h-12" src={imageBox} alt="Box" />
                            <span className="ml-2 md:ml-0">Boxeo</span>
                        </li>
                        <li className="w-80 h-0.5 bg-white/20"></li>
                        <li className="flex items-center md:ml-0 ml-28">

                            <img className="w-12 h-12 mr-5" src={imageBaseball} alt="Beisboll" />
                            <span>Beisbol</span>

                        </li>
                        <li className="w-80 h-0.5 bg-white/20"></li>
                        <li className="flex items-center md:ml-0 ml-28">

                            <img className="w-12 h-12 mr-5" src={imageFutbol} alt="Futbol" />
                            <span>Futbol</span>

                        </li>
                        <li className="w-80 h-0.5 bg-white/20"></li>
                        <li className="flex items-center md:ml-0 ml-28">

                            <img className="w-12 h-12 mr-5" src={imageFutbolAmericano} alt="Futbol Americano" />
                            <span>Futbol Americano</span>
                        </li>
                        <li className="w-80 h-0.5 bg-white/20"></li>

                    </ul>
                </div>
                <div>
                    <ul className="space-y-5 items-center hidden md:block">
                        <li className="flex items-center">
                            <Image className="w-12 h-12 mr-5" src={Facebook} alt="Facebook" />
                            <span>Facebook</span>

                        </li>
                        <li className='flex items-center'>
                            <Image className="w-12 h-12  mr-5" src={Instagram} alt="Instagram" />
                            <span>Instagram</span>

                        </li>
                        <li className='flex items-center'>
                            <Image className="w-12 h-12  mr-5" src={Twitter} alt="Twitter" />
                            <span>Twitter</span>

                        </li>
                        <li className='flex items-center'>
                            <Image className="w-12 h-12  mr-5" src={Youtube} alt="Youtube" />
                            <span>Youtube</span>

                        </li>

                    </ul>
                </div>
            </div>
            <div className='bg-purple-600/20 pt-2 mt-10 '>
                <div className='flex md:justify-between justify-center items-center container mx-auto'>
                    <div className='flex items-center'>
                        <div className='w-24 '>
                            <img src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' alt='logo' />

                        </div>
                        <span className='uppercase md:text-3xl font-bold md:ml-5'>#todo es posible</span>
                    </div>
                    <div className='md:flex md:items-center md:w-1/4 hidden '>
                        <div>
                            <img src="https://hi-sports.tv/media/LigaBBVA.png" alt="" />

                        </div>
                        <div>
                            <img src={imageHiEnergy} alt='logo' />

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footercontenido