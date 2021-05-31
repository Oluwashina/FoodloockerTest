import axios from 'axios'
import {apiUrl} from '../config'
import cogoToast from "cogo-toast";

export const Increment = () =>{
    return dispatch =>{
        dispatch({ type: 'INCREMENT' });
    }
}


export const Decrement = () =>{
    return dispatch => {
        dispatch({type: 'DECREMENT'})
    }
}

// get items in a user's cart
export const getCart = ()  =>{
    return async function(dispatch, getState) {
        const userId = getState().auth.profileDetails.id;
         try {
        const res = await axios.get(apiUrl + `?action=get_cart&user_id=${userId}`);
        if (res.status === 200) {
          dispatch({ type: "CARTITEMS", data: res.data.cart});
          dispatch({ type: "CARTHISTORY", data: res.data.cart});
        }
         } catch (err) {
       console.log(err)
      }
    };
  }

  // addd to cart functionality
  export const addToCart = (creds)  =>{
    return async function(dispatch, getState) {
      const userId = getState().auth.profileDetails.id;
         try {
        const res = await axios.post(apiUrl, {
          ...creds,
          user_id: userId
         });
         if (res.status === 200) {
            if(res.data.status){
              cogoToast.success('item successfully added to cart')

              // fetch and get the cart items for that user
              const res = await axios.get(apiUrl + `?action=get_cart&user_id=${userId}`);
              if (res.status === 200) {
                dispatch({ type: "CARTITEMS", data: res.data.cart});
                dispatch({ type: "CARTHISTORY", data: res.data.cart});
              }

            }
         }
          console.log(res)
         } catch (err) {
       console.log(err)
      }
    };
 }

//  delete an item from a cart
export const deleteCart = (id)  =>{
  return async function(dispatch, getState) {
      const userId = getState().auth.profileDetails.id;
       try {
      const res = await axios.get(apiUrl + `?action=delete_cart&user_id=${userId}&id=${id}`);
      if (res.status === 200) {
        if(res.data.status){
          dispatch({ type: "DeletedItems"});
          cogoToast.success(`Item removed from cart`);

           // fetch and get the cart items for that user after deletion
           const res = await axios.get(apiUrl + `?action=get_cart&user_id=${userId}`);
           if (res.status === 200) {
             dispatch({ type: "CARTITEMS", data: res.data.cart});
             dispatch({ type: "CARTHISTORY", data: res.data.cart});
           }

        }
        
      }
       } catch (err) {
     console.log(err)
    }
  };
}
  