import axios from 'axios'
import {apiUrl} from '../config'

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
        }
         } catch (err) {
       console.log(err)
      }
    };
  }
  