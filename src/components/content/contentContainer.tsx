import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { Row, Col } from 'antd';
import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';

import { ArrowRightOutlined } from '@ant-design/icons';

const bebas = Bebas_Neue({ weight: '400', preload: false });

export default function ContentContainer() {
    return (
        <Row justify={'center'} className='marginHome' id='inicio'>
            <Col span={22}>
                <Row justify='center'>
                    <Col span={24} className='content'>
                        <span className={`titleContent ${bebas.className} `}>
                            <img src="https://hi-sports.tv/media/TodoEsPosible1.png" alt="" />
                        </span>
                    </Col>
                </Row>
                <Row justify='space-between'>
                    <Col xs={24} md={0}>
                        <br />
                        <br />
                        <br />
                        <br />
                    </Col>

                    <Col xs={24} md={6}>
                        <Link href='https://www.youtube.com/watch?v=fU8-RTJz69k' target='_blank'>
                            <Button style={{ width: '100%' }} className='botonInicio' endContent={<ArrowRightOutlined />}>
                                VER AHORA
                            </Button>
                        </Link>
                    </Col>

                    <Col xs={24} md={6}>
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
                </Row>
            </Col>
        </Row>
    );
}
