import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { HomeOutlined, ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons';

export default function HeaderContainer() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ['INICIO', 'PROGRAMACIÓN', 'ÚLTIMA HORA'];
    const verMenu = (value: boolean) => {
        console.log('value', value);
        setIsMenuOpen(value);
    };
    return (
        <Navbar className='fondoNav' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className='justify-end' justify='start'>
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
                <NavbarBrand>
                    <img className='logoHeader' src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' alt='logo' />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-11 itemNavBar' justify='end'>
                <NavbarItem>
                    <Link className='itemNavBar' href='#inicio'>
                        <HomeOutlined style={{ marginRight: '.5em' }} />
                        INICIO
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='itemNavBar' href='#programación'>
                        <CalendarOutlined style={{ marginRight: '.5em' }} />
                        PROGRAMACIÓN
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='itemNavBar' href='#última hora' aria-current='page'>
                        <ClockCircleOutlined style={{ marginRight: '.5em' }} />
                        ÚLTIMA HORA
                    </Link>
                </NavbarItem>
            </NavbarContent>
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
        </Navbar>
    );
}
