import axios from 'axios'
import {apiUrl} from '../config'
import cogoToast from "cogo-toast";

// login functionality
export const loginUser = (creds)  =>{
    return async function(dispatch) {
         try {
        const res = await axios.post(apiUrl, {...creds});
        if (res.status === 200) {
            if(res.data.status){
                dispatch({ type: "LOGIN_SUCCESS", data: res.data});
                cogoToast.success('Login Successful!', { position: 'bottom-right', })
            }
            else{
                dispatch({ type: "LOGIN_FAIL", err: res.data});
                 cogoToast.error('Invalid Credentials!')  
            }
         }
         } catch (err) {
       console.log(err)
      }
    };
 }

//  register functionality
export const registerUser = (creds)  =>{
    return async function(dispatch) {
         try {
        const res = await axios.post(apiUrl, {
            name: creds.fullName,
            country: creds.country,
            phone: creds.phoneNumber,
            email: creds.email,
            password: creds.password,
            password2: creds.confirm_password,
            action: "register",
            issubmit: 1
           });
        if (res.status === 200) {
            if(res.data.status){
                dispatch({ type: "REGISTER_SUCCESS", data: res.data});
             cogoToast.success("Congratulations, Your account has been successfully created!");
            }
            else{
                dispatch({ type: "SIGNUP_FAIL", err: res.data});
                cogoToast.error('User already exists!!!')
            }
          
          }
         } catch (err) {
       console.log(err)
      }
    };
 }