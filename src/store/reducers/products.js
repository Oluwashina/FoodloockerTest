
const initState = {
    products: [],
    
  };
  
  const productReducer = (state = initState, action) => {
    switch (action.type) {
      case 'Products':
            return {
                ...state,
               products: action.data.products
            }
      default:
        return state;
    }
  };
  
  export default productReducer;
  