import React from 'react'
import Footer from '../../components/Footer'
import Header from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCab, faMapPin, faScrewdriverWrench, faSearch, faStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header />
      {/* Hero section */}
      <section className='h-120 flex justify-center items-center  ' style={{
        backgroundImage:
          "url('https://www.enterprise.com/en/exotic-car-rental/vehicles/midsize-luxury-suv/_jcr_content/root/container/container/container_1805038189/image_1600151533.coreimg.jpeg/1665004956267/vehicle-category-list-page-hero-midsize-luxury-suv-1920x565.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"
      }}>
        <div className='h-120 w-full flex justify-center items-center ' style={{ backgroundColor: "rgb(0,0,0,0.3)" }}>
   

{/* search and pick date */}

    <div className="flex justify-center items-center ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white px-6 py-4 rounded-full shadow-lg w-full max-w-4xl">
        
     
        <div className="flex flex-col">
          <label className="text-gray-800 font-medium">Pickup Location</label>
          <select className="text-gray-500 focus:outline-none border-0">
            <option>Please select location</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
             <option>Kerala</option>
          </select>
        </div>

    
        <div className="flex flex-col m-3">
          <label className="text-gray-800 font-medium">Pick-up Date</label>
          <input
            type="date"
            className="text-gray-600 border-0 focus:outline-none"
            placeholder="dd-mm-yyyy"
          />
        </div>

    
        <div className="flex flex-col">
          <label className="text-gray-800 font-medium">Return Date</label>
          <input
            type="date"
            className="text-gray-600 border-0 focus:outline-none"
            placeholder="dd-mm-yyyy"
          />
        </div>

    
        <button className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
      </div>
    </div>
        </div>

      </section>
      {/*  explore cars */}
      <section>
        <div className=" flex flex-col justify-center items-center my-5">
          <h1 className='text-4xl font-bold text-gray-600'>Featured <span className='text-orange-500'>C</span>ars </h1>
          <p className='md:mx-auto mx-10 font-semibold text-gray-700'>Explore our selection of premium vehicles available for your next adventure</p>
        </div>
        <div className=" md:grid md:grid-cols-3 md:px-39 place-items-center  ">
          <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4" >

            <div className="relative">
                <Link to={'/car/:id/view'}>
              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              /></Link>

              {/* Availability */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Available Now
              </span>

              {/* Price */}
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                $300 / day
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">BMW X5</h3>
              <p className="text-gray-500 text-sm mb-3">SUV · 2006</p>


              <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUsers} />  <span>4 Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCab} /> <span>Hybrid</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faScrewdriverWrench} /> <span>Semi-Automatic</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapPin} /> <span>New York</span>
                </div>
              </div>
            </div>
          </div>
<div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4" >

            <div className="relative">
                <Link to={'/car/:id/view'}>
              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              /></Link>

              {/* Availability */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Available Now
              </span>

              {/* Price */}
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                $300 / day
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">BMW X5</h3>
              <p className="text-gray-500 text-sm mb-3">SUV · 2006</p>


              <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUsers} />  <span>4 Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCab} /> <span>Hybrid</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faScrewdriverWrench} /> <span>Semi-Automatic</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapPin} /> <span>New York</span>
                </div>
              </div>
            </div>
          </div>
<div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4" >

            <div className="relative">
                <Link to={'/car/:id/view'}>
              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              /></Link>

              {/* Availability */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Available Now
              </span>

              {/* Price */}
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                $300 / day
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">BMW X5</h3>
              <p className="text-gray-500 text-sm mb-3">SUV · 2006</p>


              <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUsers} />  <span>4 Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCab} /> <span>Hybrid</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faScrewdriverWrench} /> <span>Semi-Automatic</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapPin} /> <span>New York</span>
                </div>
              </div>
            </div>
          </div>
<div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4" >

            <div className="relative">
                <Link to={'/car/:id/view'}>
              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              /></Link>

              {/* Availability */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Available Now
              </span>

              {/* Price */}
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                $300 / day
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">BMW X5</h3>
              <p className="text-gray-500 text-sm mb-3">SUV · 2006</p>


              <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUsers} />  <span>4 Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCab} /> <span>Hybrid</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faScrewdriverWrench} /> <span>Semi-Automatic</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapPin} /> <span>New York</span>
                </div>
              </div>
            </div>
          </div>
<div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4" >

            <div className="relative">
                <Link to={'/car/:id/view'}>
              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              /></Link>

              {/* Availability */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Available Now
              </span>

              {/* Price */}
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                $300 / day
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">BMW X5</h3>
              <p className="text-gray-500 text-sm mb-3">SUV · 2006</p>


              <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUsers} />  <span>4 Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCab} /> <span>Hybrid</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faScrewdriverWrench} /> <span>Semi-Automatic</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapPin} /> <span>New York</span>
                </div>
              </div>
            </div>
          </div>
<div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4" >

            <div className="relative">
                <Link to={'/car/:id/view'}>
              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              /></Link>

              {/* Availability */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Available Now
              </span>

              {/* Price */}
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                $300 / day
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">BMW X5</h3>
              <p className="text-gray-500 text-sm mb-3">SUV · 2006</p>


              <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUsers} />  <span>4 Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCab} /> <span>Hybrid</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faScrewdriverWrench} /> <span>Semi-Automatic</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapPin} /> <span>New York</span>
                </div>
              </div>
            </div>
          </div>





        </div>
  <div className='flex justify-center my-5'>    
      <Link to={'/car'} className='text-xl   p-2 rounded border border-gray-500'>Explore all Cars</Link></div>

        
      </section>

      {/* faq section */}
      <section>

      </section>

      {/* testimonals */}
     
<section className="bg-white py-16 px-6">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">
      What Our Customers Say
    </h2>
    <p className="text-gray-500 max-w-xl mx-auto">
      Discover why discerning travelers choose StayVenture for their luxury
      accommodations around the world.
    </p>
  </div>
  <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Emma Rodriguez"
          className="w-14 h-14 rounded-full mb-3 object-cover"
        />
        <h3 className="font-semibold text-gray-900">Emma Rodriguez</h3>
        <p className="text-gray-500 text-sm mb-2">Barcelona, Spain</p>
        <div className="flex justify-center mb-4 text-yellow-500 text-lg">
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          “I've rented cars from various companies, but the experience with
          CarRental was exceptional.”
        </p>
      </div>
    </div>

   
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="John Smith"
          className="w-14 h-14 rounded-full mb-3 object-cover"
        />
        <h3 className="font-semibold text-gray-900">John Smith</h3>
        <p className="text-gray-500 text-sm mb-2">New York, USA</p>
       <div className="flex justify-center mb-4 text-yellow-500 text-lg">
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          “CarRental made my trip so much easier. The car was delivered right
          to my door, and the customer service was fantastic!”
        </p>
      </div>
    </div>


    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Ava Johnson"
          className="w-14 h-14 rounded-full mb-3 object-cover"
        />
        <h3 className="font-semibold text-gray-900">Ava Johnson</h3>
        <p className="text-gray-500 text-sm mb-2">Sydney, Australia</p>
       <div className="flex justify-center mb-4 text-yellow-500 text-lg">
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          “I highly recommend CarRental! Their fleet is amazing, and I always
          feel like I'm getting the best deal with excellent service.”
        </p>
      </div>
    </div>

  </div>
</section>

    

      {/* subscription */}
      <section className=''>
      <h1 className="text-4xl font-semibold flex justify-center items-center">
        Never Miss a Deal!
      </h1>
      <p className='text-gray-500 px-8 flex justify-center items-center my-3'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
      <div className="flex items-center justify-center bg-white py-5">
  <div className="flex w-full max-w-md border border-gray-300 rounded-md overflow-hidden">
    <input
      type="email"
      placeholder="Enter your email id"
      className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
    />
    <button className="bg-blue-600 text-white font-semibold px-6 hover:bg-blue-700 transition-colors">
      Subscribe
    </button>
  </div>
</div>

      </section> 

      <Footer />
    </div> 
  )
}
export default Home
