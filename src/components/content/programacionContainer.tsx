//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
} from "@nextui-org/react";
import { Row, Col, Divider } from "antd";
import { getPrograming } from "../../services/ProgramingService";
import { DateTime } from "luxon";
import Clock from "../Clock";

export default function ProgramacionContainer() {
  const columns = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const NCAA = "https://hi-sports.tv/media/NCAA.png";
  // Otras constantes y lógica existente...

  const [programing, setPrograming] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataPrograming = async () => {
    try {
      const response = await getPrograming();
      setPrograming(response);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar los datos", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataPrograming();
  }, []);

  const parseDate = (dateString : any) => new Date(dateString);

  const eventosPorDiaYHora = Array.from({ length: 7 }, () =>
    Array.from({ length: 24 }, () => [])
  );

  const ahora = DateTime.local();
  const horaActual = ahora.hour;

  programing.forEach((evento) => {
    const fechaInicio = DateTime.fromISO(evento.date[0].split(".")[0]);
    const fechaFin = DateTime.fromISO(evento.date[1].split(".")[0]);

    const diaInicio = fechaInicio.weekday;
    const horaInicio = fechaInicio.hour;
    const diafin = fechaFin.weekday;
    const horaFin = fechaFin.hour;

    const duration = horaFin - horaInicio;

    // Verifica que el día y la hora estén dentro de los límites
    if (
      diaInicio >= 0 &&
      diaInicio < eventosPorDiaYHora.length &&
      horaInicio >= 0 &&
      horaInicio < eventosPorDiaYHora[diaInicio].length
    ) {
      for (let i = 0; i < duration; i++) {
        // Verifica que el array exista antes de intentar hacer push
        if (eventosPorDiaYHora[diaInicio][horaInicio + i]) {
          eventosPorDiaYHora[diaInicio][horaInicio + i] = evento.image;
        } else {
          console.error(
            "Error: El array no existe en la posición especificada."
          );
        }
      }
    } else {
      console.error("Error: Día u hora fuera de los límites.");
    }
  });


  const rows = Array.from({ length: 24 }, (_, hora) => {
    const horario = `${hora}:00 AM`;
    const eventos = eventosPorDiaYHora
      .map((eventosEnElDia) => eventosEnElDia[hora])
      .flat();
    return { hora, horario, eventos };
  });
  console.log(rows)

  return (
    <>
      <div className="lg:mx-16">
        <Divider
          className="relative "
          orientation="left"
          style={{ color: "white", fontSize: "2.3em" }}
        >
          PROGRAMACIÓN
        </Divider>
      </div>

      <Card
        isBlurred
        className="border-none bg-purple-600/40 cardEffect lg:py-10 mt-8 lg:mx-16 mx-3"
      >
        <div className="" id="programación">
          <div className="flex justify-center">
            <div className="overflow-x-scroll rounded-md relative h-[30em] ">
                <Clock />
              <table className="overflow-y-scroll w-full lg:w-[80%]">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th className="py-2 text-white  bg-purple-800/60 sticky left-0">
                      Hora
                    </th>
                    {columns.map((dia, indiceDia) => (
                      <th
                        key={indiceDia}
                        className={`py-4 bg-[#068cb9]/80 px-4 sticky top-0 text-white`}
                      >
                        {dia}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-[#CA6CE6BF] ">
                  {Array.from({ length: 24 }, (_, indiceHora) => (
                    <tr key={indiceHora}>
                      <td
                        className={`py-2 text-white bg-purple-800/60 sticky left-0 border-b-1 border-purple-100/10 ${
                          indiceHora === horaActual ? "bg-red-800/30" : ""
                        }`}
                      >
                        <div className="px-6 whitespace-nowrap text-center">
                          {`${indiceHora}:00 ${indiceHora >= 12 ? "PM" : "AM"}`}
                        </div>
                      </td>
                      {eventosPorDiaYHora.map((dia, indiceDia) => (
                        <td
                          key={indiceDia}
                          className={` border-b-1  border-purple-800/20 text-black ${
                            indiceDia % 2 === 0
                              ? "bg-[#CA6CE6BF]/80"
                              : "bg-purple-400"
                          } ${
                            indiceHora === horaActual ? "bg-red-800/30" : "" // Solo aplica rojo a la columna de la hora específica
                          }`}
                        >
                          <div className="m-2">
                            {dia[indiceHora].length >0 ?  (
                              <img
                                width={150}
                                className="rounded-full"
                                height={100}
                                src={dia[indiceHora]}
                                alt=""
                              />
                            ): (

                                <div className="w-[150px]"> 

                                </div>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
