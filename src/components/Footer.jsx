import React from 'react'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>  <div>
      <div className="bg-gray-100 text-black">
        <div className="max-w-7xl mx-25 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 container-fluid justify-evenly">
          <div className=' justify-center items-center'>
            <h3 className="hover:text-orange-500 text-gray-900 text-2xl font-bold ">ABOUT US</h3>
            <p className="hover:text-orange-500 text-sm leading-6 w-80">
              We are your trusted mobility partner, offering affordable and reliable car, bike, and cycle rentals for every journey. Whether you’re exploring the city, planning a weekend trip, or commuting daily, we make your rides smooth, convenient, and eco-friendly.
            </p>
          </div>



      

          <div className=' justify-center items-center'>
            <h3 className="hover:text-orange-500 text-gray-900 text-2xl font-bold"> POLICIES</h3>

            <div className="grid  text-base ">
              <Link className='hover:text-orange-500' to="/terms" >Terms & Conditions</Link>
              <Link className='hover:text-orange-500' to="/privacy-policy">Privacy Policy</Link>
              <Link className='hover:text-orange-500' to="/refund-policy">Refund & Cancellation Policy</Link>
              <Link className='hover:text-orange-500' to="/rental-agreement">Rental Agreement</Link>
            </div>
          </div>

    <div className=' justify-center items-center'>
            <h3 className="hover:text-orange-500 text-gray-900 text-2xl font-bold ">FOLLOW US</h3>
            <p className="text-sm mb-3 hover:text-orange-500">Let us be social</p>

            <div className="flex items-center space-x-5 text-2xl ">
              <a href="https://www.instagram.com/" target="_blank" rel="" className="hover:text-pink-500 transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="" className="hover:text-sky-400 transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>



        </div>


        <div className="bg-orange-500 text-gray-300 text-center py-4 text-sm">
          <p>
            Copyright © 2023 All rights reserved | This website is made with ♥ by <span className='bold text-m'>UrbanGO</span>
          </p>
        </div>
      </div>
    </div></div>
  )
}

export default Footer