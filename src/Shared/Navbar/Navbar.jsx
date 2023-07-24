import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const {user , logOut , loading} = useContext(AuthContext)

    const handleLogout=()=>{
      logOut()
      .then(()=>{})
      .catch((error)=>{
        console.log(error);
      })

}

    const navbar = <>
             <li><Link to="/">Home</Link></li>
              <li><Link to="colleges">Colleges</Link></li>
              <li><Link to="admission">Admission</Link></li>
             <li><Link to="myCollege">My College</Link></li>
    </>
    return (
        <div className="navbar sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 lg:ps-6 lg:pe-9">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-pink-600">
              {navbar}
            </ul>
          </div>
          <a className=" italic normal-case text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">DREAM</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-pink-600 text-lg font-medium">
           {navbar}
          </ul>
        </div>
       
        <div className="navbar-end">

          <div className="flex gap-2">
            {
              loading? <span className="loading loading-dots loading-lg"></span> : user&& <>
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <Link to="userInfo"> <p className="font-semibold text-pink-600 pe-4">{user?.displayName}</p></Link> 
              </>
            }         
          
          </div>
        {
          user? <div >
          <button onClick={handleLogout} className="btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 text-white">LogOut</button>
        </div>
        : <div >
          <Link to="login" className="btn bg-gradient-to-br from-pink-600  to-purple-600 border-0 text-white">Login</Link>
        </div>
        }
        </div>
      </div>
    );
};

export default Navbar;