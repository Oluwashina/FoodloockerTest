import { combineReducers } from "redux";
import authReducer from './auth'
import cartReducer from "./carts";
import productReducer from "./products";


const appReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    state = undefined
  }

    return appReducer(state, action)
  }

export default rootReducer;
