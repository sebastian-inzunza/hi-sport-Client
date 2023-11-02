// services/apiService.js
import axios from 'axios';



export const getBlogs = async () => {
  
    try {
      const response = await axios.get(`https://hi-sports-v1-5056641427c0.herokuapp.com/notes`)
      

      if (response.status === 200) {
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
      const response = await axios.get(`https://hi-sports-v1-5056641427c0.herokuapp.com/notes/${slug}`)

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


  export const getVideoBlogs = async () => {
  
    try {
      const response = await axios.get(`https://hi-sports-v1-5056641427c0.herokuapp.com/videoBlog`)
      

      if (response.status === 200) {
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

  export const SearchSlugVideo = async (slug) => {

    try {
      const response = await axios.get(`https://hi-sports-v1-5056641427c0.herokuapp.com/videoblog/${slug}`)

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