import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import About from './user/pages/About'
import  Profile from './user/pages/Profile'
import Contact from './user/pages/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/profile' element={<Profile/>}/>
{/* <Route path='' element={</>}/>
<Route path='' element={</>}/>
<Route path='' element={</>}/>
<Route path='' element={</>}/>
<Route path='' element={</>}/>
<Route path='' element={</>}/>
<Route path='' element={</>}/>
<Route path='' element={</>}/>
<Route path='' element={</>}/>
<Route path='' element={</>}/>       
<Route path='' element={</>}/>        */}
    </Routes>
    </>
  )
}

export default App