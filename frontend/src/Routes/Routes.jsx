import React from 'react'
import {Route,Routes} from "react-router-dom"
import PrivateRoute from '../Components/PrivateRoute'
import DetailPage from '../Pages/DetailPage'
import Home from '../Pages/Home'
import Ingredients from '../Pages/Ingrdients'

import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
import Steps from '../Pages/Steps'

const Router = () => {
  return (
    <Routes>
     
     <Route path="/" element={
       <PrivateRoute>
     <Home/>
     </PrivateRoute>
     } />
     
     <Route path="/signup" element={<Signup/>} />
     <Route path="/signin" element={<Signin/>} />
     <Route path="/ingredients" element={<Ingredients/>} />
     <Route path="/steps" element={<Steps/>} />
     <Route path="/detail/:id" element={<DetailPage/>} />
    </Routes>
  )
}

export default Router