import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { useState } from "react";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";

const Navbar = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  const handleSignup = () => {
    setIsSignup(true);
  };

  const handleSignin = () => {
    setIsSignin(true);
  };
  return (
    <Box>
      <Box className={style.navbar}>
      <Box>
        <Text className={style.logo}>recipeHub</Text>
      </Box>
      <Box className={style.nav1}>
      <Link to="/home"><Text className={style.home} >Home</Text></Link>
      <Link to="/"><Text className={style.home} >About</Text></Link>
      <Link to="/signup">
        <Box className={style.signup} onClick={handleSignup}>SignUp</Box>
      </Link>
      <Link to="/signin">
        <Box className={style.signin} onClick={handleSignin}>SignIn</Box>
      </Link>
    </Box>
    </Box>
      <Signup isOpen={isSignup} setClose={setIsSignup} />
      <Signin isOpen={isSignin} setClose={setIsSignin} />
    </Box>
  );
};

export default Navbar;
