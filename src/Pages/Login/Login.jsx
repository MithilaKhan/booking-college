import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../FIrebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
  
    
    const { login } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname||"/";
  
  
     const handleLogin = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
  
      if (password.length < 6) {
        setError("password should be 6 character");
        return;
      }
      // login auth
      login(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setError(errorMessage);
        });
   }
    //  google sign in
     const handleGoogle = () =>{
      signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
     }
    return (
        <div className="hero  ">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="text-center w-1/2 h-3/4 lg:text-left">
           
            <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?w=1060" alt="" />
          </div>
          <div className="card  lg:ms-16 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body w-full">
            
            <form onSubmit={handleLogin} >
                    <h1 className="text-3xl/10 font-bold bg-gradient-to-br from-purple-600  to-pink-600 inline-block text-transparent bg-clip-text">
                      Login now!
                    </h1>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn  bg-purple-500 border-0 hover:bg-pink-600 ">
                        Login
                      </button>
                    </div>
                    {/* ##TODO  */}
                    <p className="text-red-500">{error}</p> 
                    <p>
                      Do not have an account ?
                      <Link to="/register" className="text-pink-600 font-bold">
                        Create an Account
                      </Link>
                    </p>
                  </form>
            </div>
            <div className="text-center mb-12">
              <button
                 onClick={handleGoogle}
                className="btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 mb-5 text-white"
              >
                <FaGoogle />
                <span className="text-black ps-3 font-bold">
                  Continue With google
                </span>
              </button>
              
              
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default Login;