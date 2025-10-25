import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

function Auth({ register }) {
  const [showPassword, setShowPassword] = useState(false);
  const[userDetails,setUserDetails]=useState({username:"",email:"",password:""})
  // console.log(userDetails);
  // Register
  const handleRegister = ()=>{
    console.log("inside handleRegister");
    const {username,email,password} = userDetails
    if(!username || !email || !password){
    toast.error("Please fill the form Completely !!!")
    }else{
      toast.success("successfully Registered ")
    }
    
  }


// //  Login
//   const handleLogin
// // GoogleLogin
//   const handleGoogleLogin

  return (
  <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-[350px]">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {register ? (
              <p>
                <span className="text-blue-600">User</span> Register
              </p>
            ) : (
              <p>
                <span className="text-blue-600">User</span> Login
              </p>
            )}
          </h2>
  
          <form>
            {/* Name input for register page */}
{register && (
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 mb-1">
      Name
    </label>
    <input
      value={userDetails.username}
      onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
      type="text"
      id="name"
      placeholder="Enter your name"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
)}

<div className="mb-4">
  <label htmlFor="email" className="block text-gray-700 mb-1">
    Email
  </label>
  <input
    value={userDetails.email}
    onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
    type="email"
    id="email"
    placeholder="Enter your email"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

<div className="mb-4 relative">
  <label htmlFor="password" className="block text-gray-700 mb-1">
    Password
  </label>

  <input
    value={userDetails.password}
    onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
    type={showPassword ? "text" : "password"}
    id="password"
    placeholder="Enter your password"
    className="w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <FontAwesomeIcon
    icon={showPassword ? faEyeSlash : faEye}
    className="absolute right-3 top-11 text-gray-500 cursor-pointer"
    onClick={() => setShowPassword(!showPassword)}
  />
</div>

  
         
            <div className="m-2 text-sm text-gray-600 text-center">
              {register ? (
                <p>
                  Already a user?{" "}
                  <Link  to="/login" className="text-blue-600 underline">
                    Login
                  </Link>
                </p>
              ) : (
                <p>
                  Create an account?{" "}
                  <Link  to="/register" className="text-blue-600 underline">
                    Register
                  </Link>
                </p>
              )}
            </div>
  
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              { register ? <Link to={'/register'}  onClick={handleRegister} >Register</Link> : <Link to={'/login'}>Login</Link> }
  
            </button>
          </form>
        </div>
  
      </div>
            <ToastContainer
  position="bottom-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick={false}
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"

  />
  </>
  );
}

export default Auth;
