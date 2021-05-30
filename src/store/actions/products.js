import axios from 'axios'
import {apiUrl} from '../config'


// fetch all products
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

//  fecth all categories
export const getCategories = ()  =>{
  return async function(dispatch) {
       try {
      const res = await axios.get(apiUrl + "?action=all_category");
      if (res.status === 200) {
        dispatch({ type: "Categories", data: res.data});
      }
       } catch (err) {
     console.log(err)
    }
  };
}
