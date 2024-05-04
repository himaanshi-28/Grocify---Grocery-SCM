import React, { useState, useEffect } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const REACT_APP_API_URI = process.env.REACT_APP_API_URI || "http://localhost:8080"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()  
  const userData = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    handleGoogleSignInRedirect();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const redirectURI = 'http://localhost:8080/auth/google/redirect';
      const authURL = `${REACT_APP_API_URI}/auth/google?redirect_uri=${encodeURIComponent(redirectURI)}`;
      window.location.href = authURL;
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleGoogleSignInRedirect = async () => {
    try {
      const code = new URLSearchParams(window.location.search).get("code");

      if (code) {
        const response = await fetch(`${REACT_APP_API_URI}/auth/google/redirect?code=${code}`,{
          method : "POST",
          headers : {
            "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        });
        
        const data = await response.json();
        if (data.success) {
          dispatch(loginRedux(data.user));
          setTimeout(() => {
            navigate("/")
          }, 1000);
        } else {
          console.error("Failed to fetch user details after Google sign-in");
        }
      } else {
        console.error("Code parameter missing in redirect URI after Google sign-in");
      }
    } catch (error) {
      console.error("Error during Google sign-in redirect:", error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email,password} = data
    if(email && password ){
      const fetchData = await fetch(`${REACT_APP_API_URI}/login`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
      console.log(dataRes)
      
      toast(dataRes.message)
      
      if(dataRes.alert){
        dispatch(loginRedux(dataRes))
        setTimeout(() => {
          navigate("/")
        }, 1000);
      }
      userData = dataRes

      console.log(userData)
    }
    else{
        alert("Please Enter required fields")
    }
  }

  return (
    <div className="p-3 md:p-4">
    <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
      {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
      <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
        <img src={loginSignupImage} className="w-full" />
      </div>

      <button
          className="w-full max-w-[200px] m-auto  bg-blue-500 hover:bg-blue-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          onClick={handleGoogleSignIn}
        >
          Sign-in With Google
        </button>

      <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type={"email"} 
          id="email"
          name="email"
          className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          value={data.email}
          onChange={handleOnChange}

        />

        <label htmlFor="password">Password</label>
        <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className=" w-full bg-slate-200 border-none outline-none "
            value={data.password}
            onChange={handleOnChange}
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>

        <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
          Login
        </button>
      </form>
      <p className="text-left text-sm mt-2">
        Don't have account ?{" "}
        <Link to={"/signup"} className="text-red-500 underline">
          Sign Up
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Login;