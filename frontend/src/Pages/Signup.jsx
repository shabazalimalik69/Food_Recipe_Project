import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupAPI } from "../Redux/User/userActions";
import { useNavigate } from "react-router-dom";
import style from "./Common.module.css";

const Signup = ({ isOpen, setClose }) => {
  const [user, setUser] = useState({
    creator_name: "",
    user_id: "",
    password: "",
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const { creator_name, user_id, password } = user;
  const navigate = useNavigate();
  const onClose = () => {
    setClose(false);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(signupAPI(user));
    setClose(false);
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 2000,
      position:"top",
      isClosable: true,
    });
    navigate("/signin");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Box className={style.body1}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={handleChange}
                value={creator_name}
                name="creator_name"
                type="text"
                placeholder="Name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>User Id</FormLabel>
              <Input
                onChange={handleChange}
                value={user_id}
                name="user_id"
                type="text"
                placeholder="Enter Id"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleChange}
                value={password}
                name="password"
                type="password"
                placeholder="Password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleCreate} colorScheme="blue" mr={3}>
              Create Account
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Signup;
