import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { Row, Col } from 'antd';
import { Button, Image, Card } from '@nextui-org/react';
import Link from 'next/link';
import Carousel from '../carousel';


import { ArrowRightOutlined } from '@ant-design/icons';

const bebas = Bebas_Neue({ weight: '400', preload: false });

export default function ContentContainer() {
    return (
        <>
            <Row justify={'center'} id='inicio'>
                <Col span={22}>

                    <div className=' justify-end hidden md:flex'>
                        <Col xs={24} sm={24} md={6} className='mt-10'>
                            <Row justify='center' gutter={[8, 8]}>
                                <Col span={4}>
                                    <img className='logoRedes' src='https://hi-sports.tv/media/Facebook.svg' alt='Follow us on Facebook' />
                                </Col>
                                <Col span={6}>
                                    <img className='logoRedes' src='https://hi-sports.tv/media/Instagram.svg' alt='Follow us on Instagram' />
                                </Col>
                                <Col span={6}>
                                    <img className='logoRedes' src='https://hi-sports.tv/media/twitter.svg' alt='Follow us on Twitter' />
                                </Col>
                            </Row>
                        </Col>

                    </div>
                </Col>
            </Row>

            <Row justify='center' className='my-28 mx-auto'>
                <Col span={24} className='content'>
                    <span className={`titleContent ${bebas.className} `}>
                        <img src="https://hi-sports.tv/media/TodoEsPosible1.png" alt="Hastag" />
                    </span>
                </Col>
            </Row>

            <div className=' relative mb-4'>
                <img src="https://hi-sports.tv/media/cintahisportsnegro.gif" className='md:w-full md:block hidden' alt="" />
            </div>
            <div className='flex justify-center items-center mx-auto container' >
                <div className='w-screen flex justify-center items-center'> {/* Contenedor principal */}
                    <div className='max-w-screen-xl relative'> {/* Contenedor de la imagen y el fondo */}
                        <div className='flex justify-end'>
                            <div className=' m-2 text-white text-xl p-3 font-bold mt-4 absolute  mb-4 ml-4 '>
                                ESTAMOS EN <span className='en-vivo-icon'>VIVO</span>

                            </div>
                        </div>

                        <img
                            src={'https://imgs.search.brave.com/NR4L1TQawpQkMfBVfB6eVMj7_al0JCWa6sAYfQKVaYQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbm5l/c3Bhbm9sLmNubi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvMjIwOTMw/MTY1OTQzLTAxLW5l/eW1hci5qcGc_cXVh/bGl0eT0xMDAmc3Ry/aXA9aW5mbw'}
                            className='w-[1220px] h-auto rounded-md'
                            alt='banner1'

                        />
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md'></div> {/* Fondo negro transparente */}

                        <Button className='botonInicio absolute bottom-0 left-0 m-2' endContent={<ArrowRightOutlined />}>
                            VER AHORA
                        </Button>
                    </div>
                </div>
            </div>

            <div className=' relative mt-4'>
                <img src="https://hi-sports.tv/media/cintahisportsAzul.gif" className='md:w-full md:block hidden' alt="" />
            </div>

            <Row>
                <Col xs={24} md={0}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />


                </Col>

                {/* <Col xs={24} md={6}>

                        <Link href='https://www.youtube.com/watch?v=fU8-RTJz69k' target='_blank'>
                            <Button style={{ width: '100%' }} className='botonInicio' endContent={<ArrowRightOutlined />}>
                                VER AHORA
                            </Button>
                        </Link>
                    </Col> */}


            </Row >
        </>
    );
}
