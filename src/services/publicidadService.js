import axios from "axios";

export const getPublicidad = async () => {
  try {
    const response = await axios.get(
      `https://hi-sports-fecdbeff6cd3.herokuapp.com/publicity`
    );

    if (response.status === 200) {
      // return response.data.users; // Devolver los datos de la respuesta

      const arregloDeObjetos = response.data.data;

      const objetosActivos = arregloDeObjetos.filter(
        (objeto) => objeto.banned === true
      );

      return objetosActivos;
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
