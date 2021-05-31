
const initState = {
    count: 1,
    cartCount: 0,
    cartItems: [],
    cartDetails: {}
  };
  
  const cartReducer = (state = initState, action) => {
    switch (action.type) {
      case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return{
                ...state,
                count: state.count - 1 
            }
      case 'CARTITEMS':
        return{
          ...state,
          cartItems: action.data.order_items,
          cartCount: action.data.order_items.length
        }
      case 'CARTHISTORY':
        return{
          ...state,
          cartDetails: action.data
        }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  