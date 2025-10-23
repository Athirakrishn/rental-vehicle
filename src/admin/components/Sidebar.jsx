
import { faCar, faCarSide, faClipboard, faClipboardList, faDashboard, faListCheck, faSquarePlus, faTableCells } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Sidebar() {
  return (
    <>
    <div className="w-64 bg-gray-50 border-r  flex flex-col items-center py-20 pb-40">
        <img
          src="https://via.placeholder.com/80"
          alt="User Avatar"
          className="rounded-full w-20 h-20 mb-2"
        />
        <h2 className="font-semibold mb-6">ZXC</h2>

        <div className="w-full grid grid-cols   ">
          
<div className='p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-100'> <FontAwesomeIcon icon={faTableCells}/> DashBoard</div>
<div className='p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-100'> <FontAwesomeIcon icon={faSquarePlus}/>Add Car </div>
<div className='p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-100'> <FontAwesomeIcon icon={faCarSide}/>Manage Car </div>
<div className='p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-100'> <FontAwesomeIcon icon={faListCheck}/> Manage Booking</div>

        </div>
      </div>
    
    </>
  )
}

export default Sidebar