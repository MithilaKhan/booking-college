import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {
    const {register , updateProfilePhotoAndName  } = useContext(AuthContext)
  const [error , setError] = useState("")



   const handleRegister = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value 
    const name = form.name.value 
    const photo = form.photo.value
    const password = form.password.value 
    const address = form.address.value 
    const college = form.college.value
   const userInfo = {email , name , photo,address ,college }
    console.log(userInfo)

    

    if(password.length < 6){
      setError("password should be 6 character")
      return;
    } 
// register auth 
    register(email , password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      updatePhotoName(loggedUser,name,photo)
      form.reset()
      fetch("http://localhost:5000/user" , {
      method:"POST" ,
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify(userInfo)
    })
    .then(res =>res.json())
    .then(data =>{
     console.log(data);
    })
    })
    .catch((error) =>{
      const errorMessage = error.message;
      console.log(errorMessage)
      setError(errorMessage)
    })
    // update profile photo url and name 
    const updatePhotoName = (currentUser, name, photo) =>{
      updateProfilePhotoAndName(currentUser,name ,photo)
      .then(result =>{
        const loggedUser = result
        console.log(loggedUser)
       
      })
      .catch((error) =>{
        console.log(error.message)
        setError(error.message)
      })

    }
   }
    return (
        <div className="hero lg:mt-10 lg:mb-10 ">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="text-center w-1/2 h-3/4 lg:text-left">
         
          <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1689975805~exp=1689976405~hmac=3a2a0110476b39d3fecb9e6d8c642ca3824abd9ac979b440248e53d78ff8af48" alt="" />
        </div>
        <div className="card  lg:ms-16 w-1/2 max-w-lg shadow-2xl bg-base-100">
          <div className="card-body ">
          <form onSubmit={handleRegister}  className="card-body w-full  ">
      <h1 className="text-3xl font-bold bg-gradient-to-br from-pink-600  to-purple-600 inline-block text-transparent bg-clip-text">Create An Account</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder=" Name" className="input input-bordered" required/>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required/>
        </div>
        </div>

       

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Current College</span>
          </label>
          <input type="text" name='college' placeholder="College Name " className="input input-bordered" required/>
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" name='address' placeholder="Address" className="input input-bordered" required/>
        </div>
</div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          </div>

         
       
        <div className="form-control mt-6">
          <button className="btn  bg-pink-600 border-0 hover:bg-purple-600 ">Create an Account</button>
        </div> 
     
        <p className='text-red-500'>{error}</p>  
        <p>Already have an account ? <Link to="/login" className='text-pink-400 font-bold'>Login</Link></p>
      </form>
          </div>
         
        </div>
      </div>
      
    </div>
    );
};

export default Register;