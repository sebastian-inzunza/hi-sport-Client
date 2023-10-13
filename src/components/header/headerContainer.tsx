import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { HomeOutlined, ClockCircleOutlined, CalendarOutlined, MenuOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Bebas_Neue } from 'next/font/google';
import { Button, Drawer, theme } from 'antd';
import ContentContainer from '../content/contentContainer';

const bebas = Bebas_Neue({ weight: '400', preload: false });

export default function HeaderContainer() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ['INICIO', 'PROGRAMACIÓN', 'ÚLTIMA HORA'];
    const menuItemsHamburguer = ['Breaking News', 'Hi News', 'Programación', 'LMB','Contenido HS', 'Puro Fútbol', 'Only Fut', 'Hi Energy','Hi Speed','Liga de Expanción', 'Podcast', 'Próximos eventos', 'Hi Punch', 'Pepsi Center', 'Copa Francia', 'Talento'];
    const verMenu = (value: boolean) => {
        console.log('value', value);
        setIsMenuOpen(value);
    };

    const { token } = theme.useToken();
    const [open, setOpen] = React.useState(false);

    const showDrawer = () => {
        setOpen(!open);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Navbar maxWidth={'2xl'} className=' flex space-between fondoNav items-center' onMenuOpenChange={setIsMenuOpen}>
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' style={{ color: 'white' }} />

                <div className='md:flex items-center hidden'>
                    <Button className='mi-boton' style={{ border: 'none', width: '3rem', height: '3rem', color: "white" }} onClick={showDrawer} icon={<MenuOutlined className=' icon-container' style={{ fontSize: '30px' }} />} />
                </div>

                <div className=' md:flex items-center hidden'>
                    <img className='w-20' src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' alt='logo' />
                    <span className={`titleContent ${bebas.className} `}>#Todo es posible</span>
                </div>

                {/* 
                <NavbarContent className='justify-between' justify='start'>
                    <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
                    <NavbarBrand>
                        <Image className='logoHeader' src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' alt='logo' />
                    </NavbarBrand>
                </NavbarContent> */}

                <div className='hidden sm:flex gap-11 itemNavBar'>
                    <NavbarItem>
                        <Link className='itemNavBar' href='/' style={{  color: "#ffee92" }}>
                            <HomeOutlined style={{ marginRight: '.5em' }} />
                            INICIO
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className='itemNavBar' href='#programación' style={{  color: "#ffee92" }}>
                            <CalendarOutlined style={{ marginRight: '.5em' }} />
                            PROGRAMACIÓN
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className='itemNavBar' href='#última hora' aria-current='page' style={{  color: "#ffee92" }}>
                            <ClockCircleOutlined style={{ marginRight: '.5em' }} />
                            ÚLTIMA HORA
                        </Link>
                    </NavbarItem>
                </div>

                <NavbarMenu className='fondoNav'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link className='w-full itemNavBar' href={'#' + item.toLowerCase()} size='lg' onClick={() => verMenu(false)}>
                                {item === 'INICIO' ? <HomeOutlined style={{ marginRight: '.5em' }} /> : item === 'PROGRAMACIÓN' ? <CalendarOutlined style={{ marginRight: '.5em' }} /> : <ClockCircleOutlined style={{ marginRight: '.5em' }} />}
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

                <div className='md:flex items-center hidden'>
                    <img className='w-10 mr-2' src='https://hi-sports.tv/media/Facebook.svg' alt='Follow us on Facebook' />
                    <img className='w-16' src='https://hi-sports.tv/media/Instagram.svg' alt='Follow us on Instagram' />
                    <img className='w-16' src='https://hi-sports.tv/media/twitter.svg' alt='Follow us on Twitter' />
                </div>
            </Navbar>

            <div className='md:flex hidden  justify-between'>
                <Drawer
                    title={
                        <div className='flex items-center'>
                            <img className='w-20' src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' alt='logo' />
                            <span className={`titleContent ${bebas.className} `}>#Todo es posible</span>
                        </div>
                    }
                    style={{ background: 'linear-gradient(45deg, #014aad, #692495, #692495, #014aad)', width: '350px' }}
                    placement='left'
                    onClose={onClose}
                    open={open}
                >
                    {menuItemsHamburguer.map((item, index) => (
                        <button key={index} style={{ color: '#ffee92' }} className={`flex justify-center text-xl  mb-3 w-full py-3 rounded-md hover:bg-burger border-2 border-borderMorado`}>
                            {item}
                        </button>
                    ))}
                </Drawer>
            </div>
        </>
    );
}
