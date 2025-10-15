import React from 'react'
import UserHeader from '../components/UserHeader'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <>
    <UserHeader/>
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4 py-10">
 
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
        <p className="text-gray-500 mt-2">
          We'd love to hear from you! Reach out to us for bookings, support, or any queries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full bg-white shadow-lg rounded-2xl p-8">
      
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
          <p className="text-gray-600">
            Our team is here to assist you 24/7 with your car rental needs. Reach out anytime!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-indigo-600 text-2xl">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <p className="text-gray-700 text-lg">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-indigo-600 text-2xl">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <p className="text-gray-700 text-lg">support@urbango.com</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-indigo-600 text-2xl">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <p className="text-gray-700 text-lg">
                UrbanGO HQ, MG Road, Bengaluru, India
              </p>
            </div>
          </div>
        </div>

        <form className="flex flex-col space-y-5">
          <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="w-full max-w-6xl mt-10 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="UrbanGO Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.362081719793!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e1e4e0d3%3A0xf6b31ff33a6b8b41!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712307200000!5m2!1sen!2sin"
          className="w-full h-80 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact