import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

type Props = {}

import { ArrowRightOutlined } from '@ant-design/icons';

import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';
import Twitter from '../../assets/twitter.svg';
import { Row } from 'antd';

const bebas = Bebas_Neue({ weight: '400', preload: false });

const blog = (props: Props) => {
    return (
        <Row justify="center" className='mt-20'>
            <div className='relative bg-stone-600/80 px-8 rounded-md container mx-auto'>
                <div className='text-left md:text-4xl text-2xl py-4 font-bold mx-2 mb-4 leading-[1.5]'>
                    <span>CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR</span>
                </div>
                <div className="relative">
                    <img
                        src="https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/05/chinohuertatri2.jpg?itok=yGRMnuc0&changed=20230905210351"
                        alt="Imagen de la columna"
                        className="w-full h-full object-cover object-center rounded-md"
                    />
                    <div className="absolute top-0 left-0  flex justify-center items-center text-white md:text-3xl text-xl px-3 py-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-tl-md">
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


                    </div>
                </div>
            </div>
        </Row >

    )
}

export default blog