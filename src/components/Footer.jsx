import React from 'react'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>  <div>
      <div className="bg-indigo-950 text-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10">
          <div>
            <h3 className="text-white font-semibold mb-3">ABOUT US</h3>
            <p className="text-sm leading-6">
              We are your trusted mobility partner, offering affordable and reliable car, bike, and cycle rentals for every journey. Whether you’re exploring the city, planning a weekend trip, or commuting daily, we make your rides smooth, convenient, and eco-friendly.
            </p>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-3">NEWSLETTER</h3>
            <p className="text-sm mb-3">Stay updated with our latest trends</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-md  text-white"
              />
              <button className="bg-yellow-400 px-4 rounded-r-md font-bold">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-3">FOLLOW US</h3>
            <p className="text-sm mb-3">Let us be social</p>

            <div className="flex items-center space-x-5 text-2xl text-white">
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

          <div>
            <h3 className="text-white font-semibold mb-3">Policies</h3>

            <div className="grid  text-base">
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/refund-policy">Refund & Cancellation Policy</Link>
              <Link to="/rental-agreement">Rental Agreement</Link>
            </div>
          </div>




        </div>


        <div className="bg-black text-gray-300 text-center py-4 text-sm">
          <p>
            Copyright © 2023 All rights reserved | This website is made with ♥ by Athira
          </p>
        </div>
      </div>
    </div></div>
  )
}

export default Footer