import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Common.module.css";

const DetailPage = () => {
  const [itemData, setItemData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`https://food-recipe-bwzg.onrender.com/getDetails/${id}`)
      .then((res) => {
        //console.log(res.data)
        setItemData(res.data);
      });
  }, [id]);
   //console.log(itemData[0]?._id);

  const handleDelete = (id)=>{
    axios
      .delete(`https://food-recipe-bwzg.onrender.com/deleteDetails/${id}`)
      .then((res) => {
        console.log(res.data)
        // setItemData(res.data);
      });
      toast({
        title: "Successfully Deleted",
        status: "success",
        duration: 2000,
        position:"top",
        isClosable: true,
      });
    navigate("/home")
  }

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
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{itemData[0]?.creator_id.creator_name}</Td>
              <Td>{itemData[0]?.recipe_id.recipe_name}</Td>
              <Td>{itemData[0]?.recipe_id.desc}</Td>
              <Td>{itemData[0]?.ingredient_id.items[0]}</Td>
              <Td>{"Rs " + itemData[0]?.ingredient_id.amount}</Td>
              <Td>{itemData[0]?.ingredient_id.unit}</Td>
              <Td>{itemData[0]?.steps[0]}</Td>
              <Td><Button bg="brown" color="white" _hover={{bg:"red"}} onClick={()=>handleDelete(itemData[0]?._id)}>Delete</Button></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DetailPage;
