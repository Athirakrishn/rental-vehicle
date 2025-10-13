import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCheckCircle, faClipboardList, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

function AdminDashBoad() {
  return (
    <div>
      <AdminHeader />
     <div className="grid grid-cols-5">
 
  <Sidebar />

 
  <div className="col-span-4 p-10 min-h-screen">
    <h1 className="flex justify-center text-4xl font-semibold text-gray-800">Admin Dashboard</h1>
    <p className="text-gray-500 mt-1 flex justify-center">
      Monitor overall platform performance including total cars, bookings, revenue, and recent activities
    </p>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Total Cars</p>
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-500">
            <FontAwesomeIcon icon={faCar} className="w-5 h-5" />
          </span>
        </div>
        <h2 className="text-2xl font-bold mt-2">0</h2>
      </div>

      <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Total Bookings</p>
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-500">
            <FontAwesomeIcon icon={faClipboardList} className="w-5 h-5" />
          </span>
        </div>
        <h2 className="text-2xl font-bold mt-2">0</h2>
      </div>

      <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Pending</p>
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-500">
            <FontAwesomeIcon icon={faHourglassHalf} className="w-5 h-5" />
          </span>
        </div>
        <h2 className="text-2xl font-bold mt-2">0</h2>
      </div>

      <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Confirmed</p>
          <span className="bg-indigo-100 p-2 rounded-full text-indigo-500">
            <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
          </span>
        </div>
        <h2 className="text-2xl font-bold mt-2">0</h2>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition my-4">
      <h3 className="font-semibold text-gray-800">Recent Bookings</h3>
      <p className="text-gray-500 text-sm mt-1">Latest customer bookings</p>
    </div>
  </div>
</div>

      <Footer />
    </div>
  )
}

export default AdminDashBoad
