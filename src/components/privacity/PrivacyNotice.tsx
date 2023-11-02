import { Divider } from "antd";
import React, { useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import "animate.css";
type Props = {};

export const PrivacyNotice = (props: Props) => {
  const [textoVisible, setTextoVisible] = useState(false);
  const [textoVisible2, setTextoVisible2] = useState(false);
  const [textoVisible3, setTextoVisible3] = useState(false);
  const [textoVisible4, setTextoVisible4] = useState(false);
  const [textoVisible5, setTextoVisible5] = useState(false);
  const [textoVisible6, setTextoVisible6] = useState(false);

  const toggleTexto = () => {
    setTextoVisible(!textoVisible);
  };

  const toggleTexto2 = () => {
    setTextoVisible2(!textoVisible2);
  };

  const toggleTexto3 = () => {
    setTextoVisible3(!textoVisible3);
  };
  const toggleTexto4 = () => {
    setTextoVisible4(!textoVisible4);
  };

  const toggleTexto5 = () => {
    setTextoVisible5(!textoVisible5);
  };
  const toggleTexto6 = () => {
    setTextoVisible6(!textoVisible6);
  };
  return (
    <div className="relative mx-10">
      <Divider
        className="uppercase"
        orientation="center"
        style={{ color: "white"}}
      >
        <span className="lg:text-4xl text-xl">
        Aviso de privacidad
        </span>
     
      </Divider>
      <div className="border-1 rounded-md  lg:mx-10 p-5">
        <p className="">
          HI BROADCASTING S.A. DE C.V., mejor conocido como HI SPORTS, con
          domicilio en calle NUEVA YORK 280-B, colonia AMPLIACIÓN NÁPOLES,
          ciudad CIUDAD DE MÉXICO, municipio o delegación BENITO JUÁREZ, c.p.
          03840, en la entidad de CIUDAD DE MÉXICO, país MÉXICO, y portal de
          internet hi-sports.tv, es el responsable del uso y protección de sus
          datos personales.
        </p>

        <div className="mt-5">
          <button
            className="w-full bg-purple-500 text-left bg-opacity-50 px-4 lg:h-11 h-20 rounded-md text-base transition-all hover:bg-purple-300 hover:text-stone-800 hover:bg-opacity-50 "
            onClick={toggleTexto}
          >
            <div className="flex justify-between">
              <span> ¿Para qué fines utilizaremos sus datos personales? </span>
            </div>
          </button>
          {textoVisible && (
            <p className="bg-purple-950 bg-opacity-50 py-3 px-5 text-justify ">
              <div className="animate__animated animate__fadeIn">
                Los datos personales que recabamos de usted, los utilizaremos
                para las siguientes finalidades que son necesarias para el
                servicio que solicita y mejorar una prospeccion comercial.{" "}
                <br />
                De manera adicional, utilizaremos su información personal para
                las siguientes finalidades secundarias que no son necesarias
                para el servicio solicitado, pero que nos permiten y facilitan
                brindarle una mejor atención.
              </div>
            </p>
          )}
        </div>

        <div className="mt-5">
          <button
            className="w-full bg-purple-500 text-left bg-opacity-50 px-4  lg:h-11 h-20 rounded-md text-base transition-all hover:bg-purple-300 hover:text-stone-800 hover:bg-opacity-50 "
            onClick={toggleTexto2}
          >
            <div className="flex justify-between">
              <span> ¿Qué datos personales utilizaremos para estos fines?</span>
            </div>
          </button>
          {textoVisible2 && (
            <p className="bg-purple-950 bg-opacity-50 py-3 px-5 text-justify ">
              <div className="animate__animated animate__fadeIn">
                Para llevar a cabo las finalidades descritas en el presente
                aviso de privacidad, utilizaremos los siguientes datos
                personales como datos de identificación y datos de contacto.
              </div>
            </p>
          )}
        </div>

        <div className="mt-5">
          <button
            className="w-full bg-purple-500 text-left bg-opacity-50 px-4 lg:h-11 h-20 rounded-md text-base transition-all hover:bg-purple-300 hover:text-stone-800 hover:bg-opacity-50 "
            onClick={toggleTexto3}
          >
            <div className="flex justify-between">
              <span>
                {" "}
                ¿Cómo puede acceder, rectificar o cancelar sus datos personales,
                u oponerse a su uso?
              </span>
            </div>
          </button>
          {textoVisible3 && (
            <p className="bg-purple-950 bg-opacity-50 py-3 px-5 text-justify ">
              <div className="animate__animated animate__fadeIn">
                Usted tiene derecho a conocer qué datos personales tenemos de
                usted, para qué los utilizamos y las condiciones del uso que les
                damos (Acceso).
                <br />
                Asimismo, es su derecho solicitar la corrección de su
                información personal en caso de que esté desactualizada, sea
                inexacta o incompleta (Rectificación); que la eliminemos de
                nuestros registros o bases de datos cuando considere que la
                misma no está siendo utilizada adecuadamente (Cancelación); así
                como oponerse al uso de sus datos personales para fines
                específicos (Oposición). Estos derechos se conocen como derechos
                ARCO.
              </div>
            </p>
          )}
        </div>

        <div className="mt-5">
          <button
            className="w-full bg-purple-500 text-left bg-opacity-50 px-4  lg:h-11 h-20 rounded-md text-base transition-all hover:bg-purple-300 hover:text-stone-800 hover:bg-opacity-50 "
            onClick={toggleTexto4}
          >
            <div className="flex justify-between">
              <span>
                {" "}
                Usted puede revocar su consentimiento para el uso de sus datos
                personales{" "}
              </span>
            </div>
          </button>
          {textoVisible4 && (
            <p className="bg-purple-950 bg-opacity-50 py-3 px-5 text-justify ">
              <div className="animate__animated animate__fadeIn">
                Usted puede revocar el consentimiento que, en su caso, nos haya
                otorgado para el tratamiento de sus datos personales. Sin
                embargo, es importante que tenga en cuenta que no en todos los
                casos podremos atender su solicitud o concluir el uso de forma
                inmediata, ya que es posible que por alguna obligación legal
                requiramos seguir tratando sus datos personales. Asimismo, usted
                deberá considerar que para ciertos fines, la revocación de su
                consentimiento implicará que no le podamos seguir prestando el
                servicio que nos solicitó, o la conclusión de su relación con
                nosotros.
              </div>
            </p>
          )}
        </div>
        <div className="mt-5">
          <button
            className="w-full bg-purple-500 text-left bg-opacity-50 px-4  lg:h-11 h-20 rounded-md text-base transition-all hover:bg-purple-300 hover:text-stone-800 hover:bg-opacity-50 "
            onClick={toggleTexto5}
          >
            <div className="flex justify-between">
              <span>
                ¿Cómo puede limitar el uso o divulgación de su información
                personal?
              </span>
            </div>
          </button>
          {textoVisible5 && (
            <p className="bg-purple-950 bg-opacity-50 py-3 px-5 text-justify ">
              <div className="animate__animated animate__fadeIn">
                Con objeto de que usted pueda limitar el uso y divulgación de su
                información personal, le ofrecemos los siguientes medios:{" "}
                <strong> Vía correo electrónico</strong>
              </div>
            </p>
          )}
        </div>

        <div className="mt-5">
          <button
            className="w-full bg-purple-500 text-left bg-opacity-50 px-4  lg:h-11 h-20 rounded-md text-base transition-all hover:bg-purple-300 hover:text-stone-800 hover:bg-opacity-50 "
            onClick={toggleTexto6}
          >
            <div className="flex justify-between">
              <span>
                ¿Cómo puede conocer los cambios en este aviso de privacidad?
              </span>
            </div>
          </button>
          {textoVisible6 && (
            <p className="bg-purple-950 bg-opacity-50 py-3 px-5 text-justify ">
              <div className="animate__animated animate__fadeIn">
                El presente aviso de privacidad puede sufrir modificaciones,
                cambios o actualizaciones derivadas de nuevos requerimientos
                legales; de nuestras propias necesidades por los productos o
                servicios que ofrecemos; de nuestras prácticas de privacidad; de
                cambios en nuestro modelo de negocio, o por otras causas. Nos
                comprometemos a mantenerlo informado sobre los cambios que pueda
                sufrir el presente aviso de privacidad, a través de: {" "}
                <strong>Anuncio en página web.</strong>
              </div>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
