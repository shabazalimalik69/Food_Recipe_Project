import axios from "axios"
import { POST_INGREDIENT } from "./ingredientActionTypes";


export const postIngredientAPI = ({token,ingredientData})=>async(dispatch)=>{
    try {
        const res = await axios.post("http://localhost:7600/createIngredient",ingredientData,{ headers: { token: token } });
        //console.log(res)
        dispatch({type:POST_INGREDIENT,payload:res.data});
    } catch (error) {
        console.log(error)
    }
}

