import React from 'react'
import { Link } from 'react-router-dom'

function PNF() {
  return (
   <>
      <div className="md:flex min-h-screen justify-center items-center text-center w-full flex-col   ">
  <img src="https://www.chainreaction.ae/wp-content/themes/chainreaction_new2021/assets/404.gif" alt="" className=" md:w-140 text-center justify-center items-center "/>  
 <h1 className='md:mx-70 text-xl'>OH NO!</h1>
 <h1 className='md:mx-70 text-4xl font-bold'>Look Like You are Lost</h1>
 <h1 className='md:mx-70 text-xl semi-bold my-4' >The page you are looking for is not available</h1>
 <Link to={'/'} className='text-white font-bold bg-orange-500 md:w-100 p-3 rounded '>BACK HOME</Link>
   </div>
   </>
  )
}

export default PNF