import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import UserHeader from '../components/UserHeader'
import Footer from '../../components/Footer'

function ViewCar() {
  return (
   <>
    <UserHeader/>
  <div className='grid grid-cols-2 bg-gray-100'>
    <div className="flex items-center justify-center ">
    
    </div>

      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white w-[350px] rounded-2xl shadow-lg p-6">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold text-gray-900">₹300</h2>
            <span className="text-gray-500 text-sm">per day</span>
          </div>
  
          <hr className="my-4" />
  
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Pickup Date
            </label>
        
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            
            </div>
  
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Return Date
            </label>
          
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
           
          </div>
  
   
          <Link className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-lg transition-colors">
            Book Now
          </Link>
  
        </div>
      </div>
  </div>
 
    <Footer/>
   </>
  )
}

export default ViewCar