import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Box, Button, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import style from "./Common.module.css"
import { useRef } from 'react';
import { postIngredientAPI } from '../Redux/Ingredient/ingredientActions';


const Ingredients = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const {recipeId} = useSelector((store)=>store.recipe);
  const [ingredientData,setIngredientData] = useState({
    recipe_id:"",
    items:"",
    amount:"",
    unit:""
  });
  const inputElem = useRef("");
  const {recipe_id,items,amount,unit} = ingredientData;
  const {token} = useSelector((store)=>store.auth);
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setIngredientData({...ingredientData,[name]:value})
  }
  
  const handleSubmit = (e)=>{
     e.preventDefault()
    //  inputElem.current.focus();
    dispatch(postIngredientAPI({token,ingredientData}))
    navigate("/steps")
  }
  return (
    <Box>
       <Box display="flex" justifyContent='center'>
      <Heading fontSize='2xl'>Recipe_Id:&nbsp;</Heading><Text mt='5px'>{recipeId}</Text>
      </Box>
      <Box className={style.recipeForm} >
        <FormControl>
        <Input value={recipe_id} name="recipe_id" onChange={handleChange} ref={inputElem}  mb="30px" placeholder='Enter Recipe ID...' />
        <Input value={items} name="items" onChange={handleChange} ref={inputElem}  mb="30px" placeholder='Enter Item Name...' />
        <Input value={amount} name="amount" onChange={handleChange} ref={inputElem} mb="30px" placeholder='Amount...' />
        <Input value={unit} name="unit" onChange={handleChange} ref={inputElem} placeholder='Unit...' />
        <Button display="block" margin="auto" bg="blue" color="white" mt="20px" _hover={{bg:"green"}} onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Ingredients