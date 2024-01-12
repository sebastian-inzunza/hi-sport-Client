import React, { useEffect, useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { Row, Col, Spin } from "antd";
import { Button, Image, Card } from "@nextui-org/react";
import Link from "next/link";
import { getBanners } from "../../services/BannersService";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LoadingOutlined } from "@ant-design/icons";

interface DataType {
  image: string;
  url: string;
}

// const listVideoLive = [
//   {
//     imgVideo:
//       "https://imgs.search.brave.com/NR4L1TQawpQkMfBVfB6eVMj7_al0JCWa6sAYfQKVaYQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbm5l/c3Bhbm9sLmNubi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvMjIwOTMw/MTY1OTQzLTAxLW5l/eW1hci5qcGc_cXVh/bGl0eT0xMDAmc3Ry/aXA9aW5mbw",
//     url: "https://www.youtube.com/watch?v=_znd2EKiTUc",
//   },
//   {
//     imgVideo:
//       "https://imgs.search.brave.com/NR4L1TQawpQkMfBVfB6eVMj7_al0JCWa6sAYfQKVaYQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbm5l/c3Bhbm9sLmNubi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvMjIwOTMw/MTY1OTQzLTAxLW5l/eW1hci5qcGc_cXVh/bGl0eT0xMDAmc3Ry/aXA9aW5mbw",

//     url: "https://www.youtube.com/watch?v=twOMe6o1eLU",
//   },
//   {
//     imgVideo:
//       "https://imgs.search.brave.com/NR4L1TQawpQkMfBVfB6eVMj7_al0JCWa6sAYfQKVaYQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbm5l/c3Bhbm9sLmNubi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDkvMjIwOTMw/MTY1OTQzLTAxLW5l/eW1hci5qcGc_cXVh/bGl0eT0xMDAmc3Ry/aXA9aW5mbw",
//     url: "https://www.youtube.com/watch?v=PSanJ5swYBM",
//   },
// ];

import { CaretRightOutlined } from "@ant-design/icons";

export default function ContentContainer() {
  const [banner, setBanner] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getBanners();
      setBanner(response);
       setLoading(false); // Después de cargar los datos, establece loading en false
    } catch (error) {
      console.error("Error al cargar los datos", error);
       setLoading(false); // En caso de error, también establece loading en false
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loaderIcon = (
    <LoadingOutlined style={{ fontSize: "200px", color: "#8e44ad" }} />
  ); 

  return (
    <>
      {loading ? (
        <div className="flex justify-center py-[300px]">
        <Spin spinning={loading} indicator={loaderIcon} size="large" />

        </div>
      ) : (
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
          {banner.map((page, index) => (
            <div className="flex justify-center items-center mt-6" key={index}>
              <div className="w-screen lg:h-[770px] flex justify-center items-center">
                {/* <div className="absolute top-1 right-1 ">
            <div className="m-2 text-white text-xl p-3 font-bold mt-4  mb-4 ml-4">
              ESTAMOS EN <span className="en-vivo-icon">VIVO</span>
            </div>
          </div> */}

                <img src={page.image} alt="banner1" />

                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md"></div> */}

                <Link href={page.url} target="_blank">
                  <Button
                    className="botonInicio absolute bottom-[4.5em] left-5  lg:bottom-[152px] lg:left-[87px] lg:m-2"
                    startContent={<CaretRightOutlined />}
                  >
                    VER AHORA
                  </Button>
                </Link>
              </div>
            </div>
            // </div>
          ))}
        </Carousel>
      )}

      <div className=" relative">
        <img
          src="https://hi-sports.tv/media/CintaNaranja.gif"
          className="md:w-full md:block hidden"
          alt=""
        />
      </div>

      <Row>
        <Col xs={24} md={0}>
          <br />
        </Col>

        {/* <Col xs={24} md={6}>

                        <Link href='https://www.youtube.com/watch?v=fU8-RTJz69k' target='_blank'>
                            <Button style={{ width: '100%' }} className='botonInicio' endContent={<ArrowRightOutlined />}>
                                VER AHORA
                            </Button>
                        </Link>
                    </Col> */}
      </Row>
    </>
  );
}
