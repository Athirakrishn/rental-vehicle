import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <>
      <header className="bg-white shadow-md ">
      <div className="container mx-auto flex  justify-between items-center px-5 md:px-10">
        
        <div className="flex items-center gap-3">
          <img
            src="https://www.pngmart.com/files/22/Car-Logo-PNG-HD-Isolated.png "
            alt="Urban Go Logo"
            className="w-20 h-15 object-contain"
          />
          {/* <img src="https://tse4.mm.bing.net/th/id/OIP.j_Il7KXxWP_2SdHK6DpGngHaE7?pid=Api&P=0&h=180" alt=""  className="w-10 h-10"/> */}
          <h1 className="text-2xl font-bold text-gray-500 ">Urban<span className="text-orange-500">GO</span></h1>
        </div>


          <div className="hidden md:flex gap-6 text-gray-500 items-center font-medium text-xl">
            <Link to="/" className="hover:text-orange-500"> Home</Link>
            <Link to="/about" className="hover:text-orange-500">  About</Link>
            <Link to="/car" className="hover:text-orange-500">  Cars</Link>
            <Link to="/contact" className="hover:text-orange-500">  Contact</Link>
        
            <Link
              to="/login" 
  className="hidden md:inline-block text-white bg-orange-500 border border-gray-100 px-4 py-2 rounded-lg hover:text-orange-500 hover:bg-white  transition"
            >
              Login
            </Link>
          </div>

      </div>
    </header>
    </>
  )
}

export default AdminHeader