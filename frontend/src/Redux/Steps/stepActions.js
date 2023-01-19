import axios from "axios"
import { GET_DATA, POST_STEPS } from "./stepActionTypes";


export const postStepsAPI = ({token,data})=>async(dispatch)=>{
    try {
        const res = await axios.post("http://localhost:7600/createSteps",data,{ headers: { token: token } });
        //console.log(res)
        dispatch({type:POST_STEPS,payload:res.data});
    } catch (error) {
        console.log(error)
    }
}

export const getDataAPI = (token) => async(dispatch)=>{
    try {
        const res = await axios.get("http://localhost:7600/getData",{ headers: { token: token } });
        //console.log(res.data)
        dispatch({type:GET_DATA,payload:res.data});
    } catch (error) {
        console.log(error)
    }
}