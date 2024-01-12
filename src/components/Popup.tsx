
// @ts-nocheck
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Cookie from "js-cookie";
import Image from "next/image";
import { getPublicidad } from "@/services/publicidadService";
import Link from "next/link";


// Establece la aplicación para la accesibilidad del lector de pantalla

const MyModal = ({ isOpen, onClose }) => {

  interface DataType {
    image: string;
    url: string;
  }

  const [modalState, setModalState] = useState(false);
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
    let timer: NodeJS.Timeout | string | number | undefined;
    timer = setTimeout(() => {
      setModalState(true);
    }, 5000);

    fetchData();
    return () => {
      timer && clearTimeout(timer);
    };

  }, []);

  const modalStyles: {} = {
    content: {
      position: "relative",
    },
    overlay: {
      background: "rgba(75, 0, 130, 0.4)", 
      display: "flex",
    },
  };


  console.log(publicidad)
  const [content, setContent] = useState("");

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  function closeModal() {
    document
      .querySelector<HTMLInputElement>(
        ".ReactModal__Overlay.newsletter-modal-overlay"
      )
      ?.classList.add("removed");
    document
      .querySelector<HTMLInputElement>(".newsletter-popup.ReactModal__Content")
      ?.classList.remove("ReactModal__Content--after-open");
    setTimeout(() => {
      setModalState(false);
    }, 250);
  }

  return (
    
    <Modal
      ariaHideApp={false}
      isOpen={modalState}
      style={modalStyles}
      onRequestClose={closeModal}
      shouldReturnFocusAfterClose={false}
      className="newsletter-popup bg-img"
    >

      <div id="newsletter-popup">
        <button
          title="Close (Esc)"
          type="button"
          className="mfp-close"
          onClick={closeModal}
        >
          <span className="text-3xl">×</span>
        </button>
        <Link href={publicidad[2]?.url} target="_blank">
        
        <Image
          src={publicidad[2]?.image}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        </Link>

       
      </div>
    </Modal>
  );
};

export default MyModal;
