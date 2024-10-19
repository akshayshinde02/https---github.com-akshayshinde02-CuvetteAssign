import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignUpOTP from './components/SignUpOTP'
import Sidebar from './components/SideBar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<SignUp/>}/>
      <Route path='/otp' element={<SignUpOTP/>}/>
      <Route path='/createroom' element={<Sidebar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App