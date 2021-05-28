import axios from 'axios'
import {apiUrl} from '../config'

export const getProducts = ()  =>{
    return async function(dispatch) {
         try {
        const res = await axios.get(apiUrl + "?action=all_products");
        if (res.status === 200) {
          dispatch({ type: "Products", data: res.data});
        }
         } catch (err) {
       console.log(err)
      }
    };
 }