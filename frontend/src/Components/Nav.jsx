import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signoutAPI } from '../Redux/User/userActions'
import style from "./Navbar.module.css"

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = ()=>{
      dispatch(signoutAPI());
       navigate("/")
    }
  return (
    <Box mb="10px" className={style.navbar}>
        <Box>
        <Link to ="/">Home</Link>
        </Box>
        <Box>
            <Button bg="blue" color="white" _hover={{bg:"brown"}} onClick={handleLogout}>Logout</Button>
        </Box>
    </Box>
  )
}

export default Nav
