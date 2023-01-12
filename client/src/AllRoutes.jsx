import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Auth/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Auth/Questions/Questions'
import AskQuestion from './Pages/Auth/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Auth/Questions/DisplayQuestion'
import Tags from './Pages/Auth/Tags/Tags'
import Users from './Pages/Auth/Users/Users'
import UserProfile from './Pages/Auth/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes> 
       <Route path='/' element={<Home />} />
        <Route  path='/Auth' element={<Auth />} />
        <Route  path='/Questions' element={<Questions />} />
        <Route  path='/AskQuestion' element={<AskQuestion />} />
        <Route  path='/Questions/:id' element={<DisplayQuestion />} />
        <Route  path='/Tags' element={<Tags />} />
        <Route  path='/Users' element={<Users />} />
        <Route  path='/Users/:id' element={<UserProfile />} />
    </Routes>
   )
}

export default AllRoutes
