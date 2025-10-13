import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import About from './user/pages/About'
import  Profile from './user/pages/Profile'
import Contact from './user/pages/Contact'
import Car from './user/pages/Car'
// footer
import Term from './pages/Term'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import RentalAgreement from './pages/RentalAgreement'
import PreeLoader from './components/PreeLoader'
import ViewCar from './user/pages/ViewCar'
import AdminDashBoad from './admin/pages/AdminDashBoad'
import PNF from './pages/PNF'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/car' element={<Car/>}/>
<Route path='/car/:id/view' element={<ViewCar/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/profile' element={<Profile/>}/>

<Route path='/admin-dashboard' element={<AdminDashBoad/>}/>

{/* <Route path='' element={</>}/>
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


    <Route path='*' element={<PNF/>}/>

    </Routes>
    </>
  )
}

export default App