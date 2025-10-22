import { faCalendar, faCar, faCircleCheck, faEye, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import UserHeader from '../components/UserHeader'
import Footer from '../../components/Footer'

function ViewCar() {
  return (
   <>
    <UserHeader/>
  
    <div className="min-h-screen bg-gray-50 lg:col-span-2 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
       
        <div className="lg:col-span-2">
        <div className="flex justify-between">  <img src="https://tse3.mm.bing.net/th/id/OIP.f6ved8wranJjaO8g0qDStgHaEK?pid=Api&P=0&h=180" alt="" className="md:w-120 w-70 flex justify-center" />
         <FontAwesomeIcon icon={faPhotoFilm} className="text-2xl text-gray-400"/>
        </div>
          <h2 className="text-3xl font-bold mb-2">BMW X5</h2>
          <p className="text-gray-500 mb-6">SUV • 2006</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="font-semibold">4 Seats</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="font-semibold">Hybrid</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="font-semibold">Semi-Automatic</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="font-semibold">New York</p>
            </div>
          </div>


          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made
              its debut in 1999 as the first SUV ever produced by BMW.
            </p>
          </div>

     
          <div>
            <h3 className="text-lg font-semibold mb-3">Features</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p><FontAwesomeIcon icon={faCircleCheck} className='text-blue-500 '/>360 Camera</p>
              <p><FontAwesomeIcon icon={faCircleCheck} className='text-blue-500 '/> Bluetooth</p>
              <p><FontAwesomeIcon icon={faCircleCheck} className='text-blue-500 '/> GPS</p>
              <p><FontAwesomeIcon icon={faCircleCheck} className='text-blue-500 '/> Heated Seats</p>
              <p><FontAwesomeIcon icon={faCircleCheck} className='text-blue-500 '/> Rear View Mirror</p>
            </div>
          </div>
        </div>

     
        <div className="h-100 bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="text-3xl font-bold mb-1">$300</div>
            <p className="text-gray-500 mb-6">per day</p>

            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Pickup Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Return Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            No credit card required to reserve
          </p>
        </div>
      </div>
    </div>
 
    <Footer/>
   </>
  )
}

export default ViewCar