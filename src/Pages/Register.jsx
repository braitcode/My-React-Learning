import React, {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {

    // create some hooks
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // api url
        const url = "https://blogg-api-v1.onrender.com/register"

        // form validation
        if(!username || !email || !password){
        console.log("Enter all fileds...");
        return toast.error("Enter all fields...");}

        



        // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return toast.error("Invalid email format");
        }

        //username validation
    const userNameTrim = username.trim();
    if(!username || userNameTrim.length < 3){
        return toast.error("username is required");
    }
        //password validation
    const pwdTrim = password.trim();
    if(!password || pwdTrim.length < 6){
        return toast.error("password must not be less than 6 characters");
    }







        try {
            setLoading(true);
            const {data} = await axios.post(url, {username, email, password})

            // check for successful registration
            if(!data?.error){
                toast.success("Successfully registered");
                // redirect the user to login page
                setTimeout(()=>{
                    navigate("/login")
                }, 5000);
                console.log(data)
            }else{
                toast.error("Failed to register")
            }
        } catch (error) {
            console.log(error);
            
        }
    }
console.log(username);
console.log(email);
console.log(password);
console.log(showPassword);

  return (
    <div>
        <ToastContainer/>
        <h3 style={{color:"red"}}>Registration Page</h3>
        {/* creating a registration form */}
        <form onSubmit={handleSubmit}>
            <div className="">
                <input className='form-control p-3' type="text" placeholder='Enter your username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                {/* <span class="error" id="nameError"></span> */}
            </div>
            <div className="">
                <input className='form-control p-3 my-3' type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                {/* <span class="error" id="emailError"></span> */}
            </div>
            <div className="password-input-wrapper">
                <input className='form-control p-3' type={showPassword ? "text" : "password"} placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <span onClick={() => setShowPassword(!showPassword)}>
                     
                    {showPassword ? <FaEyeSlash /> : <FaEye/>}
                    </span>
            </div>

            <button
          className="btn  btn-danger my-3 p-3 w-100"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            
              <>
              <span
                class="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status">Loading...</span>
              </>
            
          ) : (
            "Register"
          )}
        </button>
        </form>
    </div>

  )
}

export default Register