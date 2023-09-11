import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { Row, Col } from 'antd';
import { Button, Image } from '@nextui-org/react';

import { ArrowRightOutlined } from '@ant-design/icons';

const bebas = Bebas_Neue({ weight: '400', preload: false });

export default function ContentContainer() {
    return (
        <Row justify={'center'} className='marginHome' id='inicio'>
            <Col span={22}>
                <Row justify='center'>
                    <Col span={24} className='content'>
                        <h2 className={`titleContent ${bebas.className}`}>#todo es posible</h2>
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
                        <a href='#programación'>
                            <Button style={{ width: '100%' }} className='botonInicio' endContent={<ArrowRightOutlined />}>
                                VER AHORA
                            </Button>
                        </a>
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
