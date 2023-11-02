import { GetServerSideProps } from "next";
import { SearchSlug, SearchSlugVideo } from "../../services/BlogsService";
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
  category: { name: string };
};

const notasSimilares = [
  {
    lista: {
      id: 1,
      source:
        "https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn",
      titulo: "Brave nunca recuerda lo que hace en una ventana de incógnito. ",
    },
  },
  {
    lista: {
      id: 2,
      source:
        "https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn",
      titulo: "Brave nunca recuerda lo que hace en una ventana de incógnito. ",
    },
  },
  {
    lista: {
      id: 3,
      source:
        "https://imgs.search.brave.com/OdtKwUhl1JijajWe_Ygn8kq8-gkKIAiyaWKzEuciB38/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9mb2NhbC03NTh4/Mzc5LGZfYXV0byxx/X2F1dG86YmVzdC9y/b2NrY21zLzIwMjMt/MDkvU2F1bC1DYW5l/bG8tQWx2YXJlei1h/MDU0MzYuanBn",
      titulo: "Brave nunca recuerda lo que hace en una ventana de incógnito. ",
    },
  },
];

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
  // Utiliza los datos cargados en la págin
  const [publicidad, setPublicidad] = useState<DataType[]>([]);

  const fetchData = async () => {
    try {
      const response = await getPublicidad();
      setPublicidad(response);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Hi! Sports</title>
        <meta name="description" content={"Hi Sports."} />
        <meta property="og:image" content={data.image} />

        <meta name="twitter:title" content="Hi! Sports" />
        <meta name="twitter:description" content={"Hi Sports"} />
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
          <div className="relative bg-stone-600/80 px-8 redondo container mx-auto">
            <div className="text-left md:text-4xl text-2xl py-4 font-bold mx-2 mb-4 leading-[1.5]">
              <span>{data.title}</span>
            </div>
            <div className="relative">
              {typeof data.url === "undefined" ? (
                <img
                  src={data.image}
                  alt="Imagen de la columna"
                  className="w-full md:h-[50em] object-cover object-center rounded-md"
                />
              ) : (
                <iframe
                  className="w-full lg:h-[600px]"
                  src={`https://www.youtube.com/embed/${
                    data.url.split("=")[1]
                  }`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
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
                <div className="text-xl md:mr-33 md:w-3/4">
                  <p className="my-4">{data.content}</p>
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

                {/* <div className='mt-10'>
                                    <img src='https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/07/20190623_7651.jpg?itok=4jekrXIS&changed=20230907130157' alt='Imagen de la columna' className='w-full h-full object-cover object-center rounded-md mb-3' />

                                    <div className='text-xl md:mr-33 md:w-3/4'>
                                        <p className='mb-10'>Christian Giménez reveló que la Selección Argentina Sub-23 buscó a su hijo Santiago, para portar la camiseta Albiceleste, sin embargo, la estrella de Feyenoord, decidió defender los colores del Tri.</p>
                                        <p className='mb-10'>“Hace tres años lo llamaron de la Selección Argentina para ir a la Sub 23 y él decidió México. Por una cuestión que vivió siempre aquí y él lo sintió así. Él tuvo la decisión y se decidió por México”, señaló Chaco Giménez para La Capitana.</p>

                                        <p>El canterano de Cruz Azul tomó la decisión de unirse al equipo mexicano debido a una profunda conexión con el país donde había vivió la mayor parte de su infancia, comentó que él siempre se sintió mexicano a pesar de haber nacido en Argentina.</p>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="relative md:mt-32 mt-10 container">
            <span className="md:text-2xl bg-purple-600/80 px-8 py-2 w-2/6 rounded-t-xl">
              Notas Recientes
            </span>

            <div className="mt-1 py-6 bg-stone-600/80 md:grid md:grid-cols-3  rounded-tr-[2em] rounded-b-[2em]">
              {notasSimilares.map((item, index) => (
                <div className="grid grid-cols-2 mx-3 items-center" key={index}>
                  <div className="relative">
                    <div className=" top-0 left-0 bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 py-1 md:text-sm md:w-3/4 md:font-bold rounded-t-xl md:text-md md:text-center">
                      Otros Deportes
                    </div>

                    <img
                      src={item.lista.source}
                      alt="Imagen de la columna"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="ml-2 mt-6 ">{item.lista.titulo}</div>
                </div>
              ))}
            </div>
          </div> */}

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
