import axios from 'axios';

export const getBanners = async () => {
  
    try {
      const response = await axios.get(`https://hi-sports-fecdbeff6cd3.herokuapp.com/banner`)
      

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



  export const getLateralMenu = async () => {
  
    try {
      const response = await axios.get(`https://hi-sports-fecdbeff6cd3.herokuapp.com/Lateral-Menu`)
      

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

