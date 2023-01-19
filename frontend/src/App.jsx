import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Nav from "./Components/Nav";
import Navbar from "./Components/Navbar"
import Router from "./Routes/Routes"

function App() {
  const {token} = useSelector((store)=>store.auth);
  return (
    <Box>
      {token?(<Box>
        <Nav/>
        <Router/>
      </Box>):<Box>
      <Navbar/>
     <Router/>
        </Box>}
     
    </Box>
  )
}

export default App
