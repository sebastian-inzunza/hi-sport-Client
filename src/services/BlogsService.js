// services/apiService.js
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;


export const getBlogs = async () => {
    const limit = 10;
    const page = 1;
  
    try {
      const response = await axios.get(`${apiKey}/notes`)
      

      if (response.status === 200) {
        // return response.data.users; // Devolver los datos de la respuesta
        return response.data.notes
      } else {
        return []
        throw new Error(`La solicitud no fue exitosa. Código de estado: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

  export const SearchSlug = async (slug) => {

    try {
      const response = await axios.get(`${apiKey}/notes/${slug}`)

      if (response.status === 200) {
        
        return response.data
      } else {
        return []
        throw new Error(`La solicitud no fue exitosa. Código de estado: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      throw error; // Propagar el error para que pueda ser manejado en el nivel superior
    }
  };