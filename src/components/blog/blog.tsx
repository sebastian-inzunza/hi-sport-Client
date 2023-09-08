import React from 'react';
import Head from 'next/head';
import { Bebas_Neue } from 'next/font/google';
import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Link from 'next/link';


type Props = {}

import { ArrowRightOutlined } from '@ant-design/icons';

import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import Twitter from '../../assets/twitter.svg';
import { Row } from 'antd';


const notasSimilares = [{
    lista: {
        id: 1,
        source: "https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn",
        titulo: "Brave nunca recuerda lo que hace en una ventana de incógnito. "
    }
},
{
    lista: {
        id: 2,
        source: "https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn",
        titulo: "Brave nunca recuerda lo que hace en una ventana de incógnito. "
    }
},
{
    lista: {
        id: 3,
        source: "https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn",
        titulo: "Brave nunca recuerda lo que hace en una ventana de incógnito. "
    }
}


]


const bebas = Bebas_Neue({ weight: '400', preload: false });

const blog = (props: Props) => {
    const router = useRouter();
    const { id } = router.query;

    return (

        <>
            <Head>
                <title>Hi! Sports</title>
                <meta name='description' content={'Hi Sports. id=' + id} />
                <meta property='og:image' content='https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn' />

                <meta name='twitter:title' content='Hi! Sports' />
                <meta name='twitter:description' content={'Hi Sports. id=' + id} />
                <meta name='twitter:image' content='https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn' />
                <meta name='twitter:card' content='https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn' />
            </Head>
            <div className='flex justify-between mt-20'>
                <div className='w-1/6 mx-2 '>
                    <div className='hidden md:block'>
                        <Link href='https://www.caliente.mx/' target='_blank'>
                            <img
                                src="https://sissamx.com.mx/hi-sports/images/home/160x600.png"
                                alt="Publicidad"
                                className="relative w-full "
                            />
                        </Link>


                    </div>
                    {/* <div className='mt-[800px]'>
                        <Link href='https://www.caliente.mx/' target='_blank'>
                            <img
                                src="https://sissamx.com.mx/hi-sports/images/home/160x600.png"
                                alt="Imagen de Publicidad Derecha"
                                className="relative w-full redondo"
                            />
                        </Link>


                    </div> */}

                </div>

                <div>
                    <div className='relative bg-stone-600/80 px-8 redondo container mx-auto'>
                        <div className='text-left md:text-4xl text-2xl py-4 font-bold mx-2 mb-4 leading-[1.5]'>
                            <span>CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR</span>
                        </div>
                        <div className="relative">
                            <img
                                src="https://imgs.search.brave.com/PF8NFRsdU_fz82OUzuP35Jxm1U7eIJ9WGyjSz9oPNBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS02/LWUxNTg3NDI5Njc3/NjUyLmpwZw"
                                alt="Imagen de la columna"
                                className="w-full h-full object-cover object-center rounded-md"
                            />
                            <div className="absolute top-0 left-0  flex justify-center items-center text-white md:text-3xl md:text-xl text-sm px-3 py-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-br-md ">
                                {"PUMAS"}
                            </div>
                        </div>
                        <div className='pb-8 rounded-b-lg'>
                            <div className='md:mx-24 pt-2 text-left'>
                                <div className='md:text-3xl text-xl text-white font-bold text-left mb-10'>
                                    <p>El pitcher mexicano no podrá jugar ningún partido mientras se llevan a cabo las investigaciones</p>
                                </div>

                                <div className='text-xl md:mr-33 md:w-3/4'>
                                    <p className='mb-10'>Christian Giménez reveló que la Selección Argentina Sub-23 buscó a su hijo Santiago, para portar la camiseta Albiceleste, sin embargo, la estrella de Feyenoord, decidió defender los colores del Tri.</p>
                                    <p className='mb-10'>“Hace tres años lo llamaron de la Selección Argentina para ir a la Sub 23 y él decidió México. Por una cuestión que vivió siempre aquí y él lo sintió así. Él tuvo la decisión y se decidió por México”, señaló Chaco Giménez para La Capitana.</p>

                                    <p>El canterano de Cruz Azul tomó la decisión de unirse al equipo mexicano debido a una profunda conexión con el país donde había vivió la mayor parte de su infancia, comentó que él siempre se sintió mexicano a pesar de haber nacido en Argentina.</p>
                                </div>


                                <div className='mt-10'>
                                    <img
                                        src="https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/07/20190623_7651.jpg?itok=4jekrXIS&changed=20230907130157"
                                        alt="Imagen de la columna"
                                        className="w-full h-full object-cover object-center rounded-md mb-3"
                                    />

                                    <div className='text-xl md:mr-33 md:w-3/4'>
                                        <p className='mb-10'>Christian Giménez reveló que la Selección Argentina Sub-23 buscó a su hijo Santiago, para portar la camiseta Albiceleste, sin embargo, la estrella de Feyenoord, decidió defender los colores del Tri.</p>
                                        <p className='mb-10'>“Hace tres años lo llamaron de la Selección Argentina para ir a la Sub 23 y él decidió México. Por una cuestión que vivió siempre aquí y él lo sintió así. Él tuvo la decisión y se decidió por México”, señaló Chaco Giménez para La Capitana.</p>

                                        <p>El canterano de Cruz Azul tomó la decisión de unirse al equipo mexicano debido a una profunda conexión con el país donde había vivió la mayor parte de su infancia, comentó que él siempre se sintió mexicano a pesar de haber nacido en Argentina.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='relative md:mt-32 mt-10 container'>
                        <span className='md:text-3xl bg-purple-600/80 px-8 py-2 w-2/6 rounded-t-xl'>
                            Notas Relacionadas
                        </span>

                        <div className='mt-1 py-6 bg-stone-600/80 md:grid md:grid-cols-3  rounded-tr-[2em] rounded-b-[2em]'>
                            {notasSimilares.map((item, index) => (
                                <div className='grid grid-cols-2 mx-3 items-center'>
                                    <div className="relative">
                                        <div className=" top-0 left-0 bg-gradient-to-r from-blue-500 to-green-500 text-white w-3/4 text-xs px-2 py-1 md:text-lg md:w-3/4 md:font-bold rounded-t-xl text-md md:text-center">Otros Deportes</div>

                                        <img src={item.lista.source} alt="Imagen de la columna" className="w-full h-auto" />
                                    </div>
                                    <div className='ml-2 mt-6 md:text-xl'>
                                        {item.lista.titulo}
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className='mt-10 container relative w-full'>
                        <div className='hidden md:block'>
                            <img
                                src="https://sissamx.com.mx/hi-sports/images/home/970x250.png"
                                alt="publicidad"
                                className="w-full h-full object-cover "
                            />
                        </div>
                    </div>

                </div>




                <div className='w-1/6 mx-2'>
                    <div className='hidden md:block'>
                        <Link href='https://www.caliente.mx/' target='_blank'>
                            <img
                                src="https://sissamx.com.mx/hi-sports/images/home/160x600.png"
                                alt="Publicidad"
                                className="relative w-full "
                            />
                        </Link>


                    </div>
                    {/* <div className='mt-[800px]'>
                        <Link href='https://www.caliente.mx/' target='_blank'>
                            <img
                                src="https://sissamx.com.mx/hi-sports/images/home/160x600.png"
                                alt="Imagen de Publicidad Derecha"
                                className="relative w-full redondo"
                            />
                        </Link>


                    </div> */}

                </div>
            </div >
        </>
    )
}

export default blog