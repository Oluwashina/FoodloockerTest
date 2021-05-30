
const initState = {
    count: 1,
    cartCount: 1,
    cartItems: []
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
          cartItems: action.data.order_items
        }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  