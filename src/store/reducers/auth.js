
const initState = {
  isAuthenticated: false,
  token: '',
  profileDetails: {}
  
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
          return {
              ...state,
              isAuthenticated: true,
              profileDetails: action.data.data
          }
      case 'LOGIN_FAIL':
        return{
          ...state
        }
    case 'REGISTER_SUCCESS':
          return{
            ...state
          }
    case 'SIGNUP_FAIL':
      return{
        ...state
      }
    case 'logout':
      return{
        ...state,
        isAuthenticated: false,
        profileDetails: {}
      }
    default:
      return state;
  }
};

export default authReducer;
