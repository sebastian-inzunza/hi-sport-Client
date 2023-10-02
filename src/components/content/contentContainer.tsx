import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { Row, Col } from 'antd';
import { Button, Image, Card } from '@nextui-org/react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const listVideoLive = [
    {
        imgVideo: "https://imgs.search.brave.com/NR4L1TQawpQkMfBVfB6eVMj7_al0JCWa6sAYfQKVaYQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbm5l/c3Bhbm9sLmNubi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvMjIwOTMw/MTY1OTQzLTAxLW5l/eW1hci5qcGc_cXVh/bGl0eT0xMDAmc3Ry/aXA9aW5mbw",
        url: "https://www.youtube.com/watch?v=_znd2EKiTUc"

    },
    {
        imgVideo: "https://imgs.search.brave.com/NR4L1TQawpQkMfBVfB6eVMj7_al0JCWa6sAYfQKVaYQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbm5l/c3Bhbm9sLmNubi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvMjIwOTMw/MTY1OTQzLTAxLW5l/eW1hci5qcGc_cXVh/bGl0eT0xMDAmc3Ry/aXA9aW5mbw",

        url: "https://www.youtube.com/watch?v=twOMe6o1eLU"

    },
    {
        imgVideo: "https://imgs.search.brave.com/NR4L1TQawpQkMfBVfB6eVMj7_al0JCWa6sAYfQKVaYQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbm5l/c3Bhbm9sLmNubi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvMjIwOTMw/MTY1OTQzLTAxLW5l/eW1hci5qcGc_cXVh/bGl0eT0xMDAmc3Ry/aXA9aW5mbw",
        url: "https://www.youtube.com/watch?v=PSanJ5swYBM"
    }

]


import { ArrowRightOutlined } from '@ant-design/icons';



export default function ContentContainer() {
    return (
        <>
            <Row justify={'center'} id='inicio'>
                <Col span={22}>

                    {/* <div className=' justify-end hidden md:flex'>
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

                    </div> */}
                </Col>
            </Row>

            {/* <div className='my-28 mx-auto'>
                <div className='flex justify-center my-56'>
                    <span className={`titleContent ${bebas.className} `}>
                        <img src="https://hi-sports.tv/media/TodoEsPosible1.png" alt="Hastag" />
                    </span> 


                    <div >
                        <div className="one6 prueba" ></div>
                        <div className="one7 prueba" ></div>
                        <div className="one8 prueba" ></div>
                        <div className="one9 prueba" ></div>
                        <div className="one10 prueba"></div>
                        <div className="one11 prueba"></div>
                        <div className="one12 prueba"></div>
                        <div className="one13 prueba"></div>
                        <div className="one14 prueba"></div>
                        <div className="one15 prueba"></div>
                        <div className="one16 prueba"></div>
                        <div className="one17 prueba"></div>
                        <div className="one18 prueba"></div>
                        <div className="one19 prueba"></div>
                        <div className="one20 prueba"></div>
                        <div className="one21 prueba"></div>
                        <div className="one22 prueba"></div>
                        <div className="one23 prueba"></div>
                        <div className="one24 prueba"></div>
                        <div className="one25 prueba"></div>
                        <div className="one26 prueba"></div>
                        <div className="one27 prueba"></div>
                        <div className="one28 prueba"></div>
                        <div className="one29 prueba"></div>
                        <div className="one30 prueba"></div>
                        <div className="one31 prueba"></div>
                        <div className="one32 prueba"></div>
                        <div className="one33 prueba"></div>

                    </div>







                </div>
            </div>  */}

            {/* <Carousel>
                {listVideoLive.map((page, index) => (
                    <div className='flex justify-center items-center mt-5' key={index} >
                        <div className='w-screen flex justify-center items-center'>
                            <div className='max-w-screen-xl relative'>

                                <div className='flex justify-end'>
                                    <div className=' m-2 text-white text-xl p-3 font-bold mt-4 absolute  mb-4 ml-4 '>
                                        ESTAMOS EN <span className='en-vivo-icon'>VIVO</span>

                                    </div>
                                </div>

                                <img
                                    src={page.imgVideo}
                                    className='w-[1220px] h-auto rounded-md'
                                    alt='banner1'

                                />
                                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md'></div>

                                <Button className='botonInicio absolute bottom-0 left-0 m-2' endContent={<ArrowRightOutlined />}>
                                    VER AHORA
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel> */}

            <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                {listVideoLive.map((page, index) => (
                    <div className='flex justify-center items-center my-10' key={index}>
                        <div className='w-screen flex justify-center items-center'>
                            <div className='max-w-screen-xl relative'>
                                <div className='flex justify-end'>
                                    <div className='m-2 text-white text-xl p-3 font-bold mt-4 absolute mb-4 ml-4'>
                                        ESTAMOS EN <span className='en-vivo-icon'>VIVO</span>
                                    </div>
                                </div>

                                {/* Aplica un estilo CSS para establecer un ancho común */}
                                <img
                                    src={page.imgVideo}
                                    className='w-[100%] max-w-[1500px] h-auto rounded-md' // Ajusta el valor de maxWidth según tus necesidades
                                    alt='banner1'
                                />

                                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md'></div>
                                <Link href={page.url} target='_blank'>
                                    <Button className='botonInicio absolute bottom-0 left-0 m-2' endContent={<ArrowRightOutlined />}>
                                        VER AHORA
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>



            <div className=' relative mt-4'>
                <img src="https://hi-sports.tv/media/CintaNaranja.gif" className='md:w-full md:block hidden' alt="" />
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
