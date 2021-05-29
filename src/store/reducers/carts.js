
const initState = {
    count: 1,
    cartCount: 1
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
      default:
        return state;
    }
  };
  
  export default cartReducer;
  