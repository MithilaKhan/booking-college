import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";


const UpdateInfo = () => {
    const {user} = useContext(AuthContext)
  const  userInfo = useLoaderData()

  const {_id}= userInfo
    const handleSubmit=event=>{
        event.preventDefault()
        const form = event.target ;
        const name = form.name.value ;
        const email = user?.email  ;
        const college = form.college.value ;
        const address = form.address.value ;
  
        const updateInfo = {name , email ,college ,address }
        console.log(updateInfo);
  
        fetch(`http://localhost:5000/user/${_id}`,{
          method:"PUT" ,
          headers:{
             "content-type":"application/json"
          },
          body:JSON.stringify(updateInfo)
        })
        .then(res =>res.json())
        .then(data =>{
          console.log(data);
          if(data.modifiedCount >0){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, update it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Saved!',
                    'Your file has been Updated.',
                    'success'
                  )
                }
              })
          }
        })
  
      }
    return (
        <div>

<div className="hero min-h-screen bg-base-50">
  
   
    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleSubmit}>
  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
           <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input type="text"  name="name"  className=" w-72 input input-bordered" />
                </div>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" name="email" defaultValue={user?.email} className="w-72 input input-bordered" />
                </div>
           </div>
           
           <div className="grid lg:grid-cols-2 sm:grid-cols-1">
           <div className="form-control">
                  <label className="label">
                    <span className="label-text">Current College</span>
                  </label>
                  <input type="text" name="college"   className=" w-72 input input-bordered" />
                </div>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text" name="address" className="w-72 input input-bordered" />
                </div>
           </div>
                
                <div className="form-control mt-6 w-20 right-0">
                  <button  className="btn bg-gradient-to-br from-pink-600  to-purple-600 text-white">save</button>
                </div>
  </form>
      </div>
    </div>
 
</div>

       
        </div>
    );
};

export default UpdateInfo;