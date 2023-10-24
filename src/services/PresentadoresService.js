import axios from "axios";

export const getPresentadores = async () => {
  
    try {
      const response = await axios.get(`https://hi-sports-fecdbeff6cd3.herokuapp.com/Cast`)
      

      if (response.status === 200) {
        // return response.data.users; // Devolver los datos de la respuesta
        return response.data.data
      } else {
        return []
        throw new Error(`La solicitud no fue exitosa. Código de estado: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

