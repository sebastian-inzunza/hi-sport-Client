import axios from "axios";

export const getPrograming = async () => {
  try {
    const response = await axios.get(
      `https://hi-sports-fecdbeff6cd3.herokuapp.com/programming?limit=10000`
    );

    if (response.status === 200) {
      const arregloDeObjetos = response.data.data;

      // Obtener el primer y último día de la semana actual
      const hoy = new Date();
      const primerDiaSemana = new Date(hoy.setDate(hoy.getDate() - hoy.getDay()));
      const ultimoDiaSemana = new Date(hoy.setDate(hoy.getDate() - hoy.getDay() + 6));

      // Filtrar eventos para obtener solo los de la semana actual
      const eventosSemanaActual = arregloDeObjetos.filter((evento) => {
        const fechaInicio = new Date(evento.date[0]);
        return fechaInicio >= primerDiaSemana && fechaInicio <= ultimoDiaSemana;
      });

      return eventosSemanaActual;
    } else {
      return [];
      throw new Error(
        `La solicitud no fue exitosa. Código de estado: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
