import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCar, faCarSide, faCheckCircle, faClipboardList, faHourglassHalf, faListCheck, faPhotoFilm, faSquarePlus, faTableCells, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function AdminDashBoad() {
  const [adminDashBoard, setAdminDashBoard] = useState(true)
  const [addCar, setAddCar] = useState(false)
  const [manageCar, setManageCar] = useState(false)
  const [manageBooking, setManageBooking] = useState(false)
  const [imageModal,setImageModal] = useState(false)
  return (
    <div className="bg-gray-50"> 
      <AdminHeader />
      <div className="grid grid-cols-2 lg:grid-cols-5 bg-gray-50">

        <div className="lg:col-span-1">
          {/* sidebar */}
          <div className="w-64 bg-gray-50 border-r  flex flex-col items-center py-20 pb-40">
            <img
              src="https://via.placeholder.com/80"
              alt="User Avatar"
              className="rounded-full w-20 h-20 mb-2"
            />
            <h2 className="font-semibold mb-6">ZXC</h2>

            <div className="w-full grid grid-cols   ">

              <div onClick={() => { setAdminDashBoard(true); setAddCar(false); setManageCar(false); setManageBooking(false) }} className={adminDashBoard ? "p-3 text-blue-600 bg-blue-100" : 'p-3 text-gray-600 hover:text-blue-600 '}> <FontAwesomeIcon icon={faTableCells} /> DashBoard</div>
              <div onClick={() => { setAdminDashBoard(false); setAddCar(true); setManageCar(false); setManageBooking(false) }} className={addCar ? "p-3 text-blue-600 bg-blue-100" : 'p-3 text-gray-600 hover:text-blue-600 '}> <FontAwesomeIcon icon={faSquarePlus} />Add Car </div>
              <div onClick={() => { setAdminDashBoard(false); setAddCar(false); setManageCar(true); setManageBooking(false) }} className={manageCar ? "p-3 text-blue-600 bg-blue-100" : 'p-3 text-gray-600 hover:text-blue-600 '}> <FontAwesomeIcon icon={faCarSide} />Manage Car </div>
              <div onClick={() => { setAdminDashBoard(false); setAddCar(false); setManageCar(false); setManageBooking(true) }} className={manageBooking ? "p-3 text-blue-600 bg-blue-100" : 'p-3 text-gray-600 hover:text-blue-600 '}> <FontAwesomeIcon icon={faListCheck} /> Manage Booking</div>

            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 min-h-screen bg-gray-50">
          {/* dashboard */}
          {adminDashBoard && <section className="col-span-4 pt-10 lg:pt-16 min-h-screen px-4 sm:px-8 lg:px-12">
            <h1 className="flex justify-center text-3xl sm:text-4xl font-semibold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1 flex justify-center text-center">
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
          </section>}



          {/* add car */}
          {addCar && <section className="p-4 sm:p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-2 text-gray-800">Add New Car</h2>
            <p className="text-gray-500 mb-4 text-base sm:text-xl">
              Fill in details to list a new car for booking, including pricing, availability, and car specifications.
            </p>
            <div className="max-w-4xl p-6 bg-white rounded-xl shadow-md">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Upload a picture of your car</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faCamera} className="absolute top-1/2 -translate-y-1/2  text-2xl text-gray-600 bg-gray-300 p-2 rounded" />
                    <input
                      type="file"
                      name="image"
                      className="relative ps-20 border border-gray-400 rounded-lg p-2 w-full text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand (e.g. BMW, Mercedes)"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="model"
                    placeholder="Model (e.g. X5, E-Class)"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full"
                  />
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full"
                  />
                  <input
                    type="number"
                    name="dailyPrice"
                    placeholder="Daily Price ($)"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full"
                  />
                  <select
                    name="category"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full text-gray-500"
                  >
                    <option value="">Select a category</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                  </select>
                  <select
                    name="transmission"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full text-gray-500"
                  >
                    <option value="">Select a transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                  <select
                    name="fuelType"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full text-gray-500"
                  >
                    <option value="">Select a fuel type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                  </select>
                  <input
                    type="number"
                    name="seatingCapacity"
                    placeholder="Seating Capacity"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full"
                  />
                  <select
                    name="location"
                    value=""
                    onChange=""
                    className="border border-gray-400 rounded-lg p-2 w-full text-gray-500"
                  >
                    <option value="">Select a location</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="description"
                    placeholder="Description"
                    value=""
                    className="border border-gray-400 rounded-lg p-2 w-full h-24"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  List Your Car
                </button>
              </form>
            </div>
          </section>}

          {/* manage cars */}
          {manageCar && <section className="p-4 sm:p-8 lg:p-12 bg-gray-50 min-h-screen">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              Manage Cars
            </h1>
            <p className="text-gray-600 mb-8">
              View all listed cars, update their details, or remove them from the booking platform.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
              <div className="min-w-full">
                <div className="flex text-left text-sm font-semibold text-gray-500 bg-white p-4 whitespace-nowrap">
                  <div className="w-5/12 pr-2">Car</div>
                  <div className="w-2/12 pr-2">Image</div>
                  <div className="w-5/12 pr-2 hidden sm:block">Category</div>
                  <div className="w-5/12 pr-2">Price</div>
                  <div className="w-5/12 pr-2 hidden sm:block">Status</div>
                  <div className="w-6/12 pr-2 text-indigo-600 hover:text-indigo-900 ">Actions</div>
                </div>
                <div className="flex bg-gray-100 p-4 hover:bg-gray-200 text-gray-800 whitespace-nowrap">
                  <div className="w-5/12 pr-2 text-sm truncate">Toyota Camry</div>
                  <div onClick={()=>{setImageModal(true)}} className="w-2/12 pr-2 text-sm truncate"><FontAwesomeIcon icon={faPhotoFilm} /> </div>
                  <div className="w-5/12 pr-2 hidden sm:block text-sm truncate">demo</div>
                  <div className="w-5/12 pr-2 text-sm truncate">demo</div>
                  <div className="w-5/12 pr-2 hidden sm:block text-sm truncate">Pending</div>
                  <div className="w-6/12 text-sm">
                    <button className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm px-1 sm:px-2 ">Edit</button>
                    <button className="text-red-600 hover:text-red-900 text-xs sm:text-sm px-1 sm:px-2">Delete</button>
                  </div>
                </div>

              </div>
            </div>
          </section>}


          {/* manage booking */}
          {manageBooking && <section className="p-4 sm:p-8 lg:p-12 bg-gray-50 min-h-screen">


            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              Manage Bookings
            </h1>
            <p className="text-gray-600 mb-8">
              Track all customer bookings, approve or cancel requests, and manage booking statuses.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
              <div className="min-w-full">
                <div className="flex items-center text-left text-sm font-semibold text-gray-500 bg-white p-4 whitespace-nowrap">
                  <div className="w-5/12 pr-2">Car</div>
                  <div className="w-2/12 pr-2">Image</div>
                  <div className="w-5/12 pr-2">Date Range</div>
                  <div className="w-5/12 pr-2">Total</div>
                  <div className="w-5/12 pr-2 hidden sm:block">Payment</div>
                  <div className="w-6/12 text-indigo-600 hover:text-indigo-900 ">Actions</div>
                </div>

                
                <div className="flex items-center bg-gray-100  p-4 hover:bg-gray-200 text-gray-800 whitespace-nowrap">
                  <div className="w-5/12 pr-2 text-sm truncate">Toyota Camry</div>
                  <div onClick={()=>{setImageModal(true)}} className="w-2/12 pr-2 text-sm truncate"><FontAwesomeIcon icon={faPhotoFilm} /> </div>
                  <div className="w-5/12 pr-2 text-sm truncate">10/25/2025 - 10/28/2025</div>
                  <div className="w-5/12 pr-2 text-sm truncate">$250.00</div>
                  <div className="w-5/12 pr-2 hidden sm:block text-sm truncate">Pending</div>
                  <div className="w-6/12 ">
                    <button className="text-green-600 hover:text-green-900 text-xs sm:text-sm px-1 sm:px-2">Approve</button>
                    <button className="text-red-600 hover:text-red-900 text-xs sm:text-sm px-1 sm:px-2">Reject</button>
                  </div>
                </div>

              </div>
            </div>
          </section>}
   
    {/* view car images */}
        {imageModal && 
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/70 ">
              <div className="bg-white rounded-2xl shadow-lg w-200">
                <div className="flex justify-between items-center bg-indigo-600/50 h-10 rounded-t-2xl px-3">
                  <FontAwesomeIcon icon={faCamera} className="text-gray-700 text-xl" />
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => setImageModal(false)}
                    className="text-gray-700 text-xl cursor-pointer hover:text-red-500 transition"
                  />
                </div>
                <div className="flex flex-col mx-5 py-5">
                  <p className="text-gray-600 mb-4">No uploaded Images</p>
                  <img
                    src=""
                    alt="car image"
                    className="w-[200px] h-[180px] object-cover border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
        }
   
        </div>
        
      </div>

 
      <Footer />
    </div>
  )
}

export default AdminDashBoad
