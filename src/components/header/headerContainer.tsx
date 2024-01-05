import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { getLateralMenu } from "../../services/BannersService";

import {
  HomeOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import { Bebas_Neue } from "next/font/google";
import { Button, Drawer, theme } from "antd";
import ContentContainer from "../content/contentContainer";

const bebas = Bebas_Neue({ weight: "400", preload: false });

interface DataType {
  title: string;
  url: string;
}

export default function HeaderContainer() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menu, setMenu] = useState<DataType[]>([]);

  const menuItems = ["INICIO", "PROGRAMACIÓN", "ÚLTIMA HORA"];
  const menuItemsHamburguer = [
    "Breaking News",
    "Hi News",
    "Programación",
    "LMB",
    "Contenido HS",
    "Puro Fútbol",
    "Only Fut",
    "Hi Energy",
    "Hi Speed",
    "Liga de Expanción",
    "Podcast",
    "Próximos eventos",
    "Hi Punch",
    "Pepsi Center",
    "Copa Francia",
    "Talento",
  ];
  const verMenu = (value: boolean) => {
  
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

  const fetchData = async () => {
    try {
      const response = await getLateralMenu();
      setMenu(response);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar
        maxWidth={"2xl"}
        className=" fondoNav items-center"
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* <div className="flex items-center lg:hidden ">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            style={{ color: "white" }}
          />
          <div className=" lg:hidden flex items-center ml-3 ">
            <img
              className="w-16"
              src="https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png"
              alt="logo"
            />
            <span className={`titleContent ${bebas.className}  text-xl `}>
              #Todo es posible
            </span>
          </div>
        </div> */}

        <div className="items-center flex">
          <Button
            className="mi-boton"
            style={{
              border: "none",
              width: "3rem",
              height: "3rem",
              color: "#ffee92",
            }}
            onClick={showDrawer}
            icon={
              <MenuOutlined
                className=" icon-container"
                style={{ fontSize: "30px" }}
              />
            }
          />
          <div className=" flex items-center">
            <img
              className="lg:w-20 w-16"
              src="https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png"
              alt="logo"
            />
            <span className={`titleContent ${bebas.className} `}>
              #Todo es posible
            </span>
          </div>
        </div>

        {/* 
                <NavbarContent className='justify-between' justify='start'>
                    <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
                    <NavbarBrand>
                        <Image className='logoHeader' src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png' alt='logo' />
                    </NavbarBrand>
                </NavbarContent> */}

        <div className="hidden sm:flex gap-11 itemNavBar">
          <NavbarItem>
            <Link className="itemNavBar" href="/" style={{ color: "#ffee92" }}>
              <HomeOutlined style={{ marginRight: ".5em" }} />
              INICIO
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="itemNavBar"
              href="#programación"
              style={{ color: "#ffee92" }}
            >
              <CalendarOutlined style={{ marginRight: ".5em" }} />
              PROGRAMACIÓN
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="itemNavBar"
              href="#última hora"
              aria-current="page"
              style={{ color: "#ffee92" }}
            >
              <ClockCircleOutlined style={{ marginRight: ".5em" }} />
              ÚLTIMA HORA
            </Link>
          </NavbarItem>
        </div>

        <NavbarMenu className="fondoNav">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full itemNavBar"
                href={"#" + item.toLowerCase()}
                size="lg"
                onClick={() => verMenu(false)}
              >
                {item === "INICIO" ? (
                  <HomeOutlined style={{ marginRight: ".5em" }} />
                ) : item === "PROGRAMACIÓN" ? (
                  <CalendarOutlined style={{ marginRight: ".5em" }} />
                ) : (
                  <ClockCircleOutlined style={{ marginRight: ".5em" }} />
                )}
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <div className="md:flex items-center hidden">
          <Link href="https://www.facebook.com/hisportst" target="_blank">
            <img
              className="w-12 mr-1"
              src="/social/facebook.png"
              alt="Follow us on Facebook"
            />
          </Link>
          <Link href="https://www.instagram.com/hisportstv" target="_blank">
            <img
              className="w-12 mr-1"
              src="/social/insta.png"
              alt="Follow us on Instagram"
            />
          </Link>
          <Link href="https://www.youtube.com/@HiSportsTV1" target="_blank">
            <img
              className="w-12"
              src="/social/youtube.png"
              alt="Follow us on Twitter"
            />
          </Link>
        </div>
      </Navbar>

      <div className="md:flex hidden  justify-between">
        <Drawer
          title={
            <div className="flex items-center">
              <img
                className="w-20"
                src="https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png"
                alt="logo"
              />
              <span className={`titleContent ${bebas.className} `}>
                #Todo es posible
              </span>
            </div>
          }
          style={{
            background:
              "linear-gradient(45deg, #014aad, #692495, #692495, #014aad)",
            width: "350px",
          }}
          placement="left"
          onClose={onClose}
          open={open}
        >
          {menu.map((item, index) => (
            <Link
              key={index}
              className="flex flex-col space-y-4"
              target="_blank"
              href={item.url}
            >
              <button
                key={index}
                style={{ color: "#ffee92" }}
                className={`flex justify-center text-xl  mb-3 w-full py-3 rounded-md hover:bg-burger border-2 border-borderMorado`}
              >
                {item.title}
              </button>
            </Link>
          ))}
        </Drawer>
      </div>
    </>
  );
}
