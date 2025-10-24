
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faL } from '@fortawesome/free-solid-svg-icons'
import UserHeader from '../components/UserHeader'

const Profile = () => {


  return (
    <>
      <UserHeader />
      <div style={{ height: '200px' }} className="bg-black"></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className="bg-white p-3">
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src= "https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex  items-center">
          <h1 className="font-bold md:text-3xl text-2xl">userName</h1>
          <FontAwesomeIcon className='text-blue-400 ms-3 ' icon={faCircleCheck
          } />
        </div>
        <p>Edit</p>
      </div>
      <p className="md:px-20 px-5 my-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi ex delectus accusantium nemo, perspiciatis pariatur quo explicabo facilis sed blanditiis, ullam neque labore expedita qui itaque unde, repudiandae esse.
        Dignissimos, officia aut suscipit quo magni soluta commodi iste neque architecto, error, eaque exercitationem incidunt iure molestiae voluptatem quasi inventore culpa ipsam! Repellendus beatae adipisci cupiditate reiciendis non saepe fuga.</p>
      <div className="md:px-40">
       
       
     
   
      </div>
      <Footer />
  
    </>
  )
}

export default Profile





































