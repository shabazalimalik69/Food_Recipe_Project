import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signoutAPI } from "../Redux/User/userActions";
import style from "./Navbar.module.css";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signoutAPI());
    navigate("/");
  };
  return (
    <Box mb="10px" className={style.navbar}>
      <Box>
        <Text className={style.logo}>recipeHub</Text>
      </Box>
      <Box className={style.nav1}>
      <Box>
        <Link to="/home"><Text mt="7px" className={style.home} >Home</Text></Link>
      </Box>
      <Box>
        <Button
        className={style.button}
          bg="blue"
          color="white"
          _hover={{ bg: "brown" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default Nav;
