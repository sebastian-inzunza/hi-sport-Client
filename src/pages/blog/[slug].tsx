import { GetServerSideProps } from "next";
import {
  BlogReleated,
  SearchSlug,
  SearchSlugVideo,
} from "../../services/BlogsService";
import HeaderContainer from "@/components/header/headerContainer";
import Head from "next/head";
import Link from "next/link";
import { Col } from "antd";
import Footercontenido from "@/components/FooterContainer/footercontenido";
import React, { useEffect, useState } from "react";
import { getPublicidad } from "../../services/publicidadService";

type MyData = {
  title: string;
  image: string;
  content: string;
  category: { name: string; id: string };
};

export const getServerSideProps: GetServerSideProps<{ data: any }> = async (
  context
) => {
  const { slug } = context.params ?? {};
  const { type } = context.query;

  let data;
  if (!type) {
    data = await SearchSlug(slug);
  } else {
    data = await SearchSlugVideo(slug);
  }

  return {
    props: { data },
  };
};

function MyPage({ data }: { data: any }) {
  interface DataType {
    image: string;
    url: string;
  }
  interface DataTypeNotesRelated {
    image: string;
    slug: string;
    title: string;
    content: string;
    category: { name: string; id: string };
  }
  // Utiliza los datos cargados en la págin
  const [publicidad, setPublicidad] = useState<DataType[]>([]);
  const [blogRelated, setBlogRelated] = useState<DataTypeNotesRelated[]>([]);

  const fetchData = async () => {
    try {
      const response = await getPublicidad();
      setPublicidad(response);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };

  const fetchDataRelated = async (id: string) => {
    try {
      const response = await BlogReleated(id);
      setBlogRelated(response);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };

  useEffect(() => {
    fetchData();
    if ("category" in data) {
      fetchDataRelated(data.category.id);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Hi! Sports</title>
        <meta name="description" content={"Hi Sports."} />
        <meta property="og:image" content={data.image} />

        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.image} />
        <meta name="twitter:card" content={data.image} />
      </Head>

      <div className="background-image" />
      <HeaderContainer />
      <div className="flex justify-between mt-20">
        <div className="w-1/6 mx-2 ">
          <div className="hidden md:block">
            {publicidad[0]?.url && (
              <Link href={publicidad[0].url} passHref={true} target="_blank">
                <img
                  src={publicidad[0]?.image}
                  alt="Publicidad"
                  className="relative w-full"
                />
              </Link>
            )}
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
          <div className="relative bg-stone-800/80 px-8 redondo container mx-auto">
            <div className="text-left md:text-4xl text-base py-4 font-bold mx-2 mb-4 leading-[1.5]">
              <span>{data.title}</span>
            </div>
            <div className="relative">
              {typeof data.url === "undefined" ? (
                <img
                  src={data.image}
                  alt="Imagen de la columna"
                  className="lg:w-full  w-[120em] lg:h-[50em] object-cover object-center rounded-md"
                />
              ) : (
                <iframe
                  className="lg:w-[60em] lg:h-[540px] h-[170px] w-[19em]"
                  src={`https://www.youtube.com/embed/${
                    data.url.split("=")[1]
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              {typeof data.url === "undefined" ? (
                <div className="absolute top-0 left-0  flex justify-center items-center text-white md:text-xl text-sm px-3 py-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-br-md ">
                  {data.category.name}
                </div>
              ) : null}
            </div>
            <div className="pb-8 rounded-b-lg">
              <div className="md:ml-16 pt-2 text-left flex">
                <div className="md:mr-33 md:w-3/4">
                  <p className="my-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.content as string,
                      }}
                    />
                  </p>
                </div>
                <div className="w-1/4">
                  <div className="md:flex justify-around hidden">
                    <Link
                      href="http://www.facebook.com/hisportst"
                      target="_blank"
                    >
                      <img
                        className=" w-12"
                        src="/social/facebook.png"
                        alt="facebook"
                      />
                    </Link>
                    <Link
                      href="http://www.instagram.com/hisportstv"
                      target="_blank"
                    >
                      <img
                        className=" w-12"
                        src="/social/insta.png"
                        alt="instagram"
                      />
                    </Link>
                    <Link href="http://www.x.com/hisportstv" target="_blank">
                      <img
                        className=" w-12"
                        src="/social/twiter.png"
                        alt="twiter"
                      />
                    </Link>
                    <Link
                      href="http://www.youtube.com/@HiSportsTV1"
                      target="_blank"
                    >
                      <img
                        className=" w-12"
                        src="/social/youtube.png"
                        alt="youtube"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {blogRelated.length > 0 ? (
            <div className="relative md:mt-32 mt-10 container">
              <span className="md:text-2xl bg-purple-600/80 px-8 py-2 w-2/6 rounded-t-xl">
                Notas Relacionadas
              </span>

              <div
                className={`mt-1 py-6 bg-stone-600/80 rounded-tr-[2em] grid lg:grid-cols-3 grid-cols-1 rounded-b-[2em]`}
              >
                {blogRelated.slice(0, 3).map((item, index) => (
                  <>
                    <div
                      className={`items-center lg:mt-0 mt-3 grid mx-3 grid-cols-2 `}
                      key={index}
                    >
                      <div className="relative ">
                        <div className=" top-0 left-0 bg-gradient-to-r text-center from-blue-500 to-green-500 text-white px-2 py-1 md:text-sm md:w-3/4 md:font-bold rounded-t-xl md:text-md md:text-center">
                          {item.category.name}
                        </div>
                        <Link href={`/blog/${item.slug}`}>
                          <img
                            src={item.image}
                            alt="Imagen de la columna"
                            className="w-full h-[7em] lg:h-full]
                        "
                          />
                        </Link>
                      </div>
                      <div
                        className={`ml-2 mt-6 text-sm uppercase ${
                          blogRelated.length === 1 ? "lg:text-xl" : null
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10 container relative w-full">
            <div className="hidden md:block">
              {publicidad[2]?.url && (
                <Link href={publicidad[2].url} passHref={true} target="_blank">
                  <img
                    src={publicidad[2]?.image}
                    alt="Publicidad"
                    className="relative w-full"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="w-1/6 mx-2">
          <div className="hidden md:block">
            {publicidad[0]?.url && (
              <Link href={publicidad[1].url} passHref={true} target="_blank">
                <img
                  src={publicidad[1]?.image}
                  alt="Publicidad"
                  className="relative w-full"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <Col xs={0} md={24}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Col>
      <Footercontenido />
    </>
  );
}

export default MyPage;
