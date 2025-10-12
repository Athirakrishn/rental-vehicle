import React from 'react'
import Footer from '../../components/Footer'
import Header from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCab, faMapPin, faScrewdriverWrench, faUsers } from '@fortawesome/free-solid-svg-icons'
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
      <section>

      </section>

      {/* subscription */}
      {/* <section>
 <div>
            <h3 className="hover:text-orange-500 text-gray-900 text-2xl font-bold mb-3">NEWSLETTER</h3>
            <p className="hover:text-orange-500 text-sm mb-3">Stay updated with our latest trends</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className=" px-3 py-2 w-full rounded-l-md  "
              />
              <button className="bg-orange-500 px-4 rounded-r-md font-bold text-white text-2xl">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
      </section> */}

      <Footer />
    </div>
  )
}
export default Home
