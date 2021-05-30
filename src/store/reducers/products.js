
const initState = {
    products: [],
    categories: []    
  };
  
  const productReducer = (state = initState, action) => {
    switch (action.type) {
      case 'Products':
            return {
                ...state,
               products: action.data.products
            }
      case 'Categories':
        return{
          ...state,
          categories: action.data.categories
        }
      default:
        return state;
    }
  };
  
  export default productReducer;
  