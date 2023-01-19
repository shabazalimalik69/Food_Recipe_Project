import { GET_RECIPE, POST_RECIPE } from "./recipeActionTypes"
let recipeId=localStorage.getItem("recipeId") || "";
const initState = {
    recipesData:[],
    recipeId:recipeId,
}

export const recipeReducer = (state=initState,{type,payload})=>{
    switch(type){
        case POST_RECIPE:{
            //console.log("post",payload)
            localStorage.setItem("recipeId",JSON.stringify(payload.recipeId))
            return {
                ...state,
                recipeId:payload.recipeId
            }
        }
        case GET_RECIPE:{
            //console.log("get",payload)
            return {
                ...state,
                recipesData:payload,
                
            }
        }
        default:{
            return state
        }
    }
}