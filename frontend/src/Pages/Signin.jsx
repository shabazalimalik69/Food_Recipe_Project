import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { signinAPI } from "../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./Common.module.css";

const Signin = ({ isOpen, setClose }) => {
  const [user, setUser] = useState({
    user_id: "",
    password: "",
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user_id, password } = user;

  const token = useSelector((store)=>store.auth.token);

  const onClose = () => {
    setClose(false);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signinAPI(user));
    toast({
      title: "LogIn Successfully",
      status: "success",
      duration: 2000,
      position:"top",
      isClosable: true,
    });
    setClose(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  if(token){
    navigate("/home");
  }

  return (
    <Box className={style.body1}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SignIn Here</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>User Id</FormLabel>
              <Input
                onChange={handleChange}
                value={user_id}
                name="user_id"
                placeholder="Enter Id..."
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleChange}
                value={password}
                name="password"
                placeholder="Password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleLogin} colorScheme="blue" mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Signin;
