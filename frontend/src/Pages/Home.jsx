import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Box, Button, FormControl, Heading, Input, Table, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react';
import style from "./Common.module.css"
import {  postRecipeAPI } from '../Redux/Recipe/recipeActions';
import { useEffect } from 'react';
import { getDataAPI } from '../Redux/Steps/stepActions';

const Home = () => {
  const [recipeData,setRecipeData] = useState({
    creator_id:"",
    recipe_name:"",
    desc:""
  })
const dispatch = useDispatch();
const navigate = useNavigate();

const {userId,token} = useSelector((store)=>store.auth);
const {data} = useSelector((store)=>store.steps);
const {creator_id,recipe_name,desc} = recipeData;

const handleChange = (e)=>{
  const {name,value} = e.target;
  setRecipeData({...recipeData,[name]:value})
}

const handleSubmit = (e)=>{
   e.preventDefault()
  dispatch(postRecipeAPI({token,recipeData}))
  navigate("/ingredients")
}

useEffect(()=>{
  dispatch(getDataAPI(token))
},[token]);
//console.log(data)

  return (
    <Box>
      <Box display="flex" justifyContent='center'>
      <Heading fontSize='2xl'>Creator_Id:&nbsp;</Heading><Text mt='5px'>{userId}</Text>
      </Box>
      <Box className={style.recipeForm} >
        <FormControl>
        <Input value={creator_id} name="creator_id" onChange={handleChange}  mb="30px" placeholder='Enter Creator ID...' />
        <Input value={recipe_name} name="recipe_name" onChange={handleChange}  mb="30px" placeholder='Recipe Name...' />
        <Textarea value={desc} name="desc" onChange={handleChange} placeholder='Description...' />
        <Button display="block" margin="auto" bg="blue" color="white" mt="20px" _hover={{bg:"green"}} onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Box>
      <TableContainer mt="60px" mb="60px" className={style.table}>
      <Table>
        <Thead>
          <Tr>
            <Th>Creator Name</Th>
            <Th>Recipe Name</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
        {data?.map((el)=>
        <Tr key={el._id}>
          <Td  >{el.creator_id.creator_name}</Td>
          <Td >{el.recipe_id.recipe_name}</Td>
          <Td>{el.recipe_id.desc}</Td>
          <Td><Link to={`/detail/${el._id}`} ><Text fontWeight="bold" color="green">See More</Text></Link></Td>
        </Tr>
        )}
        </Tbody>
      </Table>
      </TableContainer>
    </Box>
  )
}

export default Home