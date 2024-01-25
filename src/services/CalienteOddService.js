// services/apiService.js
import axios from "axios";




export const getSbTypeId = () => {
  //este id es solo para las ligas de america 12521
  fetch(`https://feeds-sports.caliente.mx/odds_feed?key=get_types_for_class&lang=en&sb_class_id=12521`)
    .then(function(resp) {
      return resp.text()
    })
    .then(function(data){
      // console.log(data.ContentAPI);
    })
    .catch(function(error) {
      console.error('Error en la solicitud fetch:', error);
    });
};