import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {  useState } from 'react'


function Edit() {
  const[offCanvasStatus,setOffCanvasStatus]=useState(false)
 

  return (
    <>
     <button onClick={()=>setOffCanvasStatus(true)} className="tex-blue-600 border border-blue-600 rounded p-3 hover:text-white hover:bg-blue-600">
      <FontAwesomeIcon icon={faPenToSquare}/> Edit
     </button>
     {/* for offcanvas */}
   { offCanvasStatus && <div> 
      <div className="fixed inset-0 bg-gray-500/75 w-full h-full transition-opacity" onClick={()=>setOffCanvasStatus(false)}>
      </div>
       <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
          <div className="bg-gray-900 px-3 py-4 flex justify-between text-white text-2xl">
          <h1>Edit user Profile</h1>
          <FontAwesomeIcon
           icon={faXmark} onClick={()=>setOffCanvasStatus(false)}/>
        </div>
       <div className="flex justify-center items-center flex-col my-5">
          <label htmlFor="profilePic">
            <input  type="file" id='profilePic'  style={{display:'none'}}/>

          
                <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
               
              <button className="bg-yellow-300 z-53 fixed text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-20px'}}> <FontAwesomeIcon icon={faPen}/> </button>
            </label>

   <div className="mt-10 mb-3 my-5 w-full px-5">
    <input  type="text" placeholder='UserName' className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded" />
   </div>
 <div className="mb-3 my-5 w-full px-5">
    <input  type="text" placeholder='Password' className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded" />
   </div>
<div className="mb-3 my-5 w-full px-5">
    <input   type="text" placeholder='Confirm Password' className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded" />
   </div>
<div className="mb-3 my-5 w-full px-5">
    <textarea   placeholder='Bio' className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded" />
   </div>

<div className="flex justify-end w-full ">
    <button className="bg-amber-600 text-white rounded py-3 px-4 hover:text-amber-600 hover:bg-white border" >Reset</button>
     <button  className="bg-green-600 text-white rounded py-3 px-4 hover:text-green-600 hover:bg-white border" >Update</button>
   </div>


        </div>
      </div>
     </div>}
    </>
  )
}

export default Edit