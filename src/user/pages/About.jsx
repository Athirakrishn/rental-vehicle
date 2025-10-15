import React from 'react'
import UserHeader from '../components/UserHeader'
import Footer from '../../components/Footer'
function About(){
  return (
    <div>
  <UserHeader/>
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
            alt="UrbanGo Car Rental"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute -bottom-5 -left-5 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium">
            10,000+ Happy Travelers 🚗
          </div>
        </div>

     
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-indigo-600">UrbanGo</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <strong>UrbanGo Car Rental</strong>, we believe in making travel
            simple, comfortable, and affordable. Whether you’re exploring the
            city, heading on a business trip, or planning a weekend getaway, we
            provide the perfect ride to get you there — stress-free.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            With a wide range of modern vehicles, 24/7 customer support, and
            flexible rental options, UrbanGo helps you move freely and safely.
            Our mission is to redefine urban mobility — one smooth ride at a
            time.
          </p>

    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white shadow-sm p-4 rounded-xl border border-gray-100 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600">24/7 Service</h3>
              <p className="text-sm text-gray-600 mt-1">
                Anytime, anywhere — book your car when you need it most.
              </p>
            </div>

            <div className="bg-white shadow-sm p-4 rounded-xl border border-gray-100 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600">Affordable Pricing</h3>
              <p className="text-sm text-gray-600 mt-1">
                Transparent rates, no hidden fees — just fair pricing.
              </p>
            </div>

            <div className="bg-white shadow-sm p-4 rounded-xl border border-gray-100 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600">Premium Fleet</h3>
              <p className="text-sm text-gray-600 mt-1">
                From economy to luxury — drive the car that fits your lifestyle.
              </p>
            </div>

            <div className="bg-white shadow-sm p-4 rounded-xl border border-gray-100 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600">Trusted by Thousands</h3>
              <p className="text-sm text-gray-600 mt-1">
                Rated 4.8★ by over 10,000 satisfied customers across cities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default About  