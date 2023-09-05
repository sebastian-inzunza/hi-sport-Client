import { Row, Col, Divider } from 'antd';
import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react';
import Carousel from '../carousel';

const listCarouselDesk = [{ lista: [{ source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }] }, { lista: [{ source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }] }, { lista: [{ source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }, { source: 'https://hi-sports.tv/media/puroFutbol.png' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }] }];
const listCarouselMobile = [{ lista: [{ source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }] }, { lista: [{ source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }] }, { lista: [{ source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg' }, { source: 'https://hi-sports.tv/media/NCAA.png' }, { source: 'https://hi-sports.tv/media/LigaBBVA.png' }] }];
const listColumnistas = [
    { source: 'https://hi-sports.tv/media/columnista1.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista2.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista3.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista4.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista5.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista6.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista7.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista8.png', nombre: 'Raúl Sarmiento' },
];
export default function BreakingNewsContainer() {
    return (
        <Row justify='center' id='última hora'>
            <Col xs={0} md={24}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Col>
            <Col span={22}>
                <Divider orientation='left' style={{ color: 'white', fontSize: '2.3em' }}>
                    ÚLTIMA HORA
                </Divider>
                <Card isBlurred className='itemNavBar border-none bg-purple-600/40 cardEffect'>
                    <Col xs={0} md={24}>
                        <Carousel>
                            {listCarouselDesk.map((page, index) => (
                                <Row justify='space-around' className='relative flex-[0_0_100%]' key={index}>
                                    <Col span={22}>
                                        <Row justify='space-around' gutter={[8, 8]}>
                                            {page.lista.map((item, i) => (
                                                <Col span={2} key={i}>
                                                    <Col span={24}>Presentado por</Col>
                                                    <Col span={24}>
                                                        <img src={item.source} className='imgCarousel' alt='alt' />
                                                    </Col>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                </Row>
                            ))}
                        </Carousel>
                    </Col>
                    <Col xs={24} md={0}>
                        <Carousel>
                            {listCarouselMobile.map((page, index) => (
                                <Row justify='space-around' className='relative flex-[0_0_100%]' key={index}>
                                    <Col span={22}>
                                        <Row justify='space-around' gutter={[8, 8]}>
                                            {page.lista.map((item, i) => (
                                                <Col span={8} key={i}>
                                                    <Col span={24}>Presentado por</Col>
                                                    <Col span={24}>
                                                        <img src={item.source} className='imgCarousel' alt='alt' />
                                                    </Col>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                </Row>
                            ))}
                        </Carousel>
                    </Col>
                </Card>
                <br />
                <Card isBlurred className='itemNavBar border-none bg-purple-600/40 cardEffect'>
                    <Col span={24}>
                        <Row justify={'space-around'} gutter={[8, 8]}>
                            <Col sm={24} md={12}>
                                <Image src={'https://hi-sports.tv/media/banner1.png'} className='fullWidth' alt='banner1' />
                            </Col>
                            <Col sm={24} md={12}>
                                <Row justify='space-around' gutter={[8, 8]}>
                                    <Col span={12}>
                                        <Image src={'https://hi-sports.tv/media/banner2.png'} className='fullWidth' alt='banner1' />
                                    </Col>
                                    <Col span={12}>
                                        <Image src={'https://hi-sports.tv/media/banner3.png'} className='fullWidth' alt='banner1' />
                                    </Col>
                                </Row>
                                <Row justify='space-around' gutter={[8, 8]}>
                                    <Col span={12}>
                                        <Image src={'https://hi-sports.tv/media/banner4.png'} className='fullWidth' alt='banner1' />
                                    </Col>
                                    <Col span={12}>
                                        <Image src={'https://hi-sports.tv/media/banner5.png'} className='fullWidth' alt='banner1' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Card>

                <br />
                <Card isBlurred className='itemNavBar border-none bg-purple-600/40 cardEffect'>
                    <Col xs={0} md={24}>
                        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                            <p className=' text-large uppercase font-bold'>Presentadores</p>
                        </CardHeader>
                        <br />
                        <Row justify='space-around' className='relative flex-[0_0_100%]'>
                            <Col span={22}>
                                <Row justify='space-around' gutter={[8, 8]}>
                                    {listColumnistas.map((item, i) => (
                                        <Col span={3} key={i}>
                                            <Card isFooterBlurred radius='lg' className='border-none zoom' style={{ backgroundColor: 'transparent' }}>
                                                <img src={item.source} className='columnist' alt='Columnist' />

                                                <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
                                                    <p className='text-tiny text-white/80'>{item.nombre}</p>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <br />
                    </Col>
                    <Col xs={24} md={0}>
                        <br />
                        <Row justify='space-around' className='relative flex-[0_0_100%]'>
                            <Col span={22}>
                                <Row justify='space-around' gutter={[8, 8]}>
                                    {listColumnistas.map((item, i) => (
                                        <Col span={12} key={i}>
                                            <Card isFooterBlurred radius='lg' className='border-none zoom bg-purple-600/40'>
                                                <img src={item.source} className='columnist' alt='Columnist' />

                                                <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1  py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
                                                    <p className='text-tiny text-white/80'>{item.nombre}</p>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <br />
                    </Col>
                </Card>
            </Col>
        </Row>
    );
}
