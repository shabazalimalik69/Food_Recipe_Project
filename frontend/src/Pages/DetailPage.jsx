import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useParams} from "react-router-dom";
import style from "./Common.module.css";

const DetailPage = () => {
  const [itemData,setItemData] = useState({});
  const {id} = useParams();
   
  useEffect(()=>{
    axios.get(`http://localhost:7600/getDetails/${id}`)
    .then((res)=>{
      //console.log(res.data)
      setItemData(res.data)
    })
  },[id]);
  console.log(itemData[0])
  return (
    <Box>
       <TableContainer mt="60px" className={style.table1}>
      <Table>
        <Thead>
          <Tr>
            <Th>Creator Name</Th>
            <Th>Recipe Name</Th>
            <Th>Description</Th>
            <Th>Items</Th>
            <Th>Amount</Th>
            <Th>Unit</Th>
            <Th>Steps</Th>
          </Tr>
        </Thead>
        <Tbody>
        <Tr>
          <Td>{itemData[0]?.creator_id.creator_name}</Td>
          <Td>{itemData[0]?.recipe_id.recipe_name}</Td>
          <Td>{itemData[0]?.recipe_id.desc}</Td>
          <Td>{itemData[0]?.ingredient_id.items[0]}</Td>
          <Td>{"Rs "+itemData[0]?.ingredient_id.amount}</Td>
          <Td>{itemData[0]?.ingredient_id.unit}</Td>
          <Td>{itemData[0]?.steps[0]}</Td>
        </Tr>
        </Tbody>
      </Table>
      </TableContainer>
    </Box>
  )
}

export default DetailPage
