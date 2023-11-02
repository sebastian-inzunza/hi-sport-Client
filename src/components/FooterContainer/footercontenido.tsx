import React from "react";
import { Row, Col } from "antd";
import { Image } from "@nextui-org/react";
import Link from "next/link";

type Props = {};

const Footercontenido = (props: Props) => {
  return (
    <footer className="bg-gray-800/40 text-white pt-10 relative">
      <div className="container mx-auto text-center flex md:justify-between justify-center">
        <div className="md:flex-col container">


          <div className="w-full h-1 bg-white/80 mt-5"></div>

          <ul className="flex md:mx-auto mt-10 justify-center">
           
           
            <div className="lg:w-24 w-16 ">
              <Link href="http://www.facebook.com/hisportst" target="_blank">
              <img
                className="logoRedes"
                src="/social/facebook.png"
                alt="Follow us on Twitter"
              />
              
              </Link>
             
            </div>

            <div className="lg:w-24 w-16 ">
              <Link href="http://www.instagram.com/hisportstv" target="_blank">
              <img
                className="logoRedes"
                src="/social/insta.png"
                alt="Follow us on Twitter"
              />
              </Link>
             
            </div>
            <div className="lg:w-24 w-16 ">
              <Link href="http://www.x.com/hisportstv" target="_blank">
              <img
                className="logoRedes"
                src="/social/twiter.png"
                alt="Follow us on Twitter"
              />
              </Link>
            
            </div>
            <div className="lg:w-24 w-16 ">
              <Link href="http://www.youtube.com/@HiSportsTV1" target="_blank">
              <img
                className="logoRedes"
                src="/social/youtube.png"
                alt="Follow us on Twitter"
              />
              </Link>
            
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-purple-600/20 pt-2 mt-10 ">
        <div className="flex justify-center items-center container mx-auto">
          <div className="flex items-center">
            <div className="w-24 ">
              <Image
                src="https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png"
                alt="logo"
              />
            </div>
            <span
              className="uppercase md:text-3xl font-bold md:ml-5 text-2xl"
              style={{ color: "#ffee92" }}
            >
              #todo es posible
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footercontenido;
