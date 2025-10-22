import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

function UserHeader() {
  const[listStatus,setListStatus]=useState(false)
  return (
    <header className="bg-white shadow-md ">
      <div className="container mx-auto flex  justify-between items-center px-5 md:px-10">
        
        <div className="flex items-center gap-3">
          <img
            // src="https://www.pngmart.com/files/22/Car-Logo-PNG-HD-Isolated.png "
            src='/logo.png'
            alt="Urban Go Logo"
            className="h-20 h-15 object-contain "
          />
         <h1 className=" text-2xl font-bold text-gray-500 ">Urban<span className="text-indigo-600 ">GO</span></h1>
        </div>


          <div className={listStatus ? "flex flex-col " : "hidden md:flex gap-6 text-gray-500 items-center font-medium text-xl"}>
            <Link to="/" className="hover:text-indigo-600"> Home</Link>
            <Link to="/about" className="hover:text-indigo-600">  About</Link> 
            <Link to="/car" className="hover:text-indigo-600">  Cars</Link>
            <Link to="/deals" className="hover:text-indigo-600">  My Bookings</Link>
            <Link to="/contact" className="hover:text-indigo-600">  Contact</Link>
            <Link
              to="/login" 
  className=" md:inline-block text-white bg-indigo-600 border border-gray-100 px-4 py-2 rounded-lg hover:text-indigo-600 hover:bg-white  transition"
            >
              Login
            </Link>
          </div>
          <button onClick={() => setListStatus(!listStatus)} className="md:hidden md:flex gap-6 text-gray-400 items-center font-medium text-4xl">
            <FontAwesomeIcon  icon={faBars}/>
          </button>
      </div>
    </header>
  );
}

export default UserHeader;
