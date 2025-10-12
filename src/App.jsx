import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import About from './user/pages/About'
import  Profile from './user/pages/Profile'
import Contact from './user/pages/Contact'
import Car from './pages/Car'
// footer
import Term from './pages/Term'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import RentalAgreement from './pages/RentalAgreement'
import PreeLoader from './components/PreeLoader'



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/car' element={<Car/>}/>
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

{/* footer contents*/}
  <Route path="/terms" element={<Term />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/refund-policy" element={<RefundPolicy />} />
  <Route path="/rental-agreement" element={<RentalAgreement />} />
 <Route path='/preeloader' element={<PreeLoader/>}/>
    </Routes>
    </>
  )
}

export default App