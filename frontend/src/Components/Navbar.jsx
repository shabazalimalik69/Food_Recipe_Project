import React from 'react'
import {Box} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import style from "./Navbar.module.css"
import { useState } from 'react';
import Signup from '../Pages/Signup';
import Signin from '../Pages/Signin';

const Navbar = () => {
const [isSignup,setIsSignup] = useState(false);
const [isSignin,setIsSignin] = useState(false);

  const handleSignup = ()=>{
    setIsSignup(true);
  }

  const handleSignin = ()=>{
    setIsSignin(true);
  }
  return (
    <Box className={style.navbar}>
        <Link to='/'>Home</Link>
        <Link to='/signup'>
          <Box onClick={handleSignup} >SignUp</Box>
        </Link>
        <Link to='/signin'>
        <Box onClick={handleSignin} >SignIn</Box>
        </Link>
        
        <Signup
        isOpen={isSignup}
        setClose={setIsSignup}
        
      />
      <Signin
        isOpen={isSignin}
        setClose={setIsSignin}
        
      />
    </Box>
  )
}

export default Navbar