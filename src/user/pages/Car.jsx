import React from 'react'
import Footer from '../../components/Footer'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab, faMagnifyingGlass, faMapPin, faScrewdriverWrench, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Car() {
  return (
    <div>
      <UserHeader/>

      {/* search */}
      <section className='h-80 bg-orange-100 grid grid-col'> 
         <div className=" flex flex-col justify-center items-center my-5">
          <h1 className='text-4xl font-bold text-gray-700 py-2'>Available <span className='text-orange-500'>C</span>ars </h1>
          <p className='text-gray-600 my-2'>Browse our selection of premium vehicles available for your next adventure
</p>
    
            <input type='text' className='relative bg-white md:w-100 md:h-12 w-80 h-10 rounded-[50px] ' placeholder=' Search by make, model, or features'/>
            
          <  FontAwesomeIcon className=' absolute md:mt-24 mt-30 md:ml-80   text-3xl text-orange-300' icon={faMagnifyingGlass}  /> 
       
     
      
        </div>
        
      </section>

      {/* cars */}
     <section>
       
        <div className=" md:grid md:grid-cols-3 md:px-39 place-items-center  ">
          <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4" >

            <div className="relative">

             <Link to={'/car/:id/view'}>
                <img
                  src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                  alt="BMW X5"
                  className="w-full h-48 object-cover"
                />
             </Link>

              {/* Availability */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Available Now
              </span>

              {/* Price */}
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                $300 / day*
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
          <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4">

            <div className="relative">

              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              />

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
          <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4">

            <div className="relative">

              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              />

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


 <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4">

            <div className="relative">

              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              />

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
          <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4">

            <div className="relative">

              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              />

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
          <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden my-5 hover:-translate-y-4">

            <div className="relative">

              <img
                src=" https://ik.imagekit.io/greatstack/tr:w-1280:q-auto:f-webp/cars/car_image1_PR9Npko2g.png"
                alt="BMW X5"
                className="w-full h-48 object-cover"
              />

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
                  <FontAwesomeIcon icon={faScrewdriverWrench
                  } /> <span>Semi-Automatic</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapPin
                  } /> <span>New York</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </section>
<Footer/>
    </div>
  )
}

export default Car