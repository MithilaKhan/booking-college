import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const UserInfo = () => {
  
    const {user} = useContext(AuthContext)
    const [college , setCollege] = useState([])
  

    useEffect(()=>{
    fetch(`https://booking-college-server-mithilakhan.vercel.app/user?email=${user?.email}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        setCollege(data)
    })
    } ,[user])

    

    return (
        <div>
          {
            college.map(clg =><div key={clg._id} className="hero min-h-screen bg-base-50">
 
 
            <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
              <div className="card-body">
              <div className="avatar mx-auto">
           <div className="w-28 rounded-xl">
            <img src={clg?.photo} />
           </div>
           </div>
           
           <div className="grid lg:grid-cols-2 sm:grid-cols-1">
           <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input type="text"  defaultValue={clg?.name} className=" w-72 input input-bordered" />
                </div>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" defaultValue={clg?.email} className="input input-bordered" />
                </div>
           </div>
           
           <div className="grid lg:grid-cols-2 sm:grid-cols-1">
           <div className="form-control">
                  <label className="label">
                    <span className="label-text">Current College</span>
                  </label>
                  <input type="text"  defaultValue={clg?.college} className=" w-72 input input-bordered" />
                </div>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text" defaultValue={clg?.address} className="input input-bordered" />
                </div>
           </div>
                
                <div className="form-control mt-6 w-20 right-0">
                  <Link to={`/updateInfo/${clg._id}`}> <button  className="btn bg-gradient-to-br from-pink-600  to-purple-600 text-white">Edit</button>
                  </Link>
                  
                </div>
              </div>
            </div>
           </div>)
          }
            
           
            
 
 {/* Open the modal using ID.showModal() method */}



        </div>
    );
};

export default UserInfo;