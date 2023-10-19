import React from "react";
import { Row, Col } from "antd";
import { Image } from "@nextui-org/react";

type Props = {};

const Footercontenido = (props: Props) => {
  return (
    <footer className="bg-gray-800/40 text-white pt-10 relative">
      <div className="container mx-auto text-center flex md:justify-between justify-center">
        <div className="md:flex-col container">


          <div className="w-full h-1 bg-white/80 mt-5"></div>

          <ul className="flex md:mx-auto mt-10 justify-center">
            <div className="lg:w-24 w-16 ">
              <img
                className="logoRedes "
                src="/social/threads.png"
                alt="Follow us on Facebook"
              />
            </div>
            <div className="lg:w-24 w-16 ">
              <img
                className="logoRedes"
                src="/social/tiktok.png"
                alt="Follow us on Instagram"
              />
            </div>
            <div className="lg:w-24 w-16 ">
              <img
                className="logoRedes"
                src="/social/twich.png"
                alt="Follow us on Twitter"
              />
            </div>
            <div className="lg:w-24 w-16 ">
              <img
                className="logoRedes"
                src="/social/twiter.png"
                alt="Follow us on Twitter"
              />
            </div>
            <div className="lg:w-24 w-16 ">
              <img
                className="logoRedes"
                src="/social/youtube.png"
                alt="Follow us on Twitter"
              />
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
