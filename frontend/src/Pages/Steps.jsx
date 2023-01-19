import { Box, Button, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postStepsAPI } from '../Redux/Steps/stepActions';
import style from "./Common.module.css";

const Steps = () => {
  const [data,setData] = useState({
    creator_id:"",
    recipe_id:"",
    ingredient_id:"",
    steps:[],
  });
  const dispatch = useDispatch();
const navigate = useNavigate();
  const {userId,token} = useSelector((store)=>store.auth);
  const {recipeId} = useSelector((store)=>store.recipe);
  const {ingredientId} = useSelector((store)=>store.ingredient);

  const inputElem = useRef("");
  const {creator_id,recipe_id,ingredient_id,steps} = data;

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setData({...data,[name]:value})
  }
  
  const handleSubmit = (e)=>{
     e.preventDefault()
    //  inputElem.current.focus();
    dispatch(postStepsAPI({token,data}))
    navigate("/")
  }
  return (
    <Box>
       <Box display="flex" justifyContent='center'>
      <Heading fontSize='2xl'>Creator_Id:&nbsp;</Heading><Text mt='5px'>{userId}</Text>
      </Box>
      <Box display="flex" justifyContent='center'>
      <Heading fontSize='2xl'>Recipe_Id:&nbsp;</Heading><Text mt='5px'>{recipeId}</Text>
      </Box>
      <Box display="flex" justifyContent='center'>
      <Heading fontSize='2xl'>Ingredient_Id:&nbsp;</Heading><Text mt='5px'>{ingredientId}</Text>
      </Box>
      <Box className={style.recipeForm} >
        <FormControl>
        <Input value={creator_id} name="creator_id" onChange={handleChange} ref={inputElem}  mb="30px" placeholder='Enter Creator ID...' />
        <Input value={recipe_id} name="recipe_id" onChange={handleChange} ref={inputElem}  mb="30px" placeholder='Enter Recipe ID...' />
        <Input value={ingredient_id} name="ingredient_id" onChange={handleChange} ref={inputElem}  mb="30px" placeholder='Enter Ingredient ID...' />
        <Input value={steps} name="steps" onChange={handleChange} ref={inputElem}  mb="30px" placeholder='Steps...' />
        <Button display="block" margin="auto" bg="blue" color="white" mt="20px" _hover={{bg:"green"}} onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Steps
