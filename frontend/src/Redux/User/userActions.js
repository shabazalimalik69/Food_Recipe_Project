import { USER_SIGNIN_ERROR, USER_SIGNIN_LOADING, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNUP_ERROR, USER_SIGNUP_LOADING, USER_SIGNUP_SUCCESS } from "./userActionTypes"
import axios from "axios"

export const signupAPI = (user)=>async(dispatch)=>{
    //console.log(user)
   dispatch({type:USER_SIGNUP_LOADING});
   try {
       let res = await  axios.post("http://localhost:7600/signup",user);
       //console.log(res.data)
       dispatch({type:USER_SIGNUP_SUCCESS,payload:res.data});
       return res.data;
   } catch (error) {
    dispatch({type:USER_SIGNUP_ERROR})
   }
}

export const signinAPI = (user)=>async(dispatch)=>{
    //console.log(user)
   dispatch({type:USER_SIGNIN_LOADING});
   try {
       let res = await  axios.post("http://localhost:7600/signin",user);
       //console.log(res.data)
       dispatch({type:USER_SIGNIN_SUCCESS,payload:res.data});
       return res.data;
   } catch (error) {
    dispatch({type:USER_SIGNIN_ERROR})
   }
}

export const signoutAPI = () => ({ type: USER_SIGNOUT});