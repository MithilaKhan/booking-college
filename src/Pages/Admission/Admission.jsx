import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const Admission = () => {

    const {user} = useContext(AuthContext)
    const admitClg = useLoaderData()
 console.log(admitClg);
    const handleAdmit= event =>{
        event.preventDefault()
        const form = event.target;
        const name= form.name.value ;
        const email = form.email.value ;
        const clgName = form.clgName.value ;
        const clgId = form.clgId.value ;
        const subject = form.subject.value ;
        const phone = form.phoneNum.value ;
        const address = form.address.value ;
        const birth = form.birth.value ;
        const image = form.image.value ;
        const candidateInfo = {name ,email,subject,clgName,clgId ,phone,address,birth,image}
        console.log(candidateInfo);

        fetch("http://localhost:5000/candidate" , {
            method:"POST" ,
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify(candidateInfo)
   })
   .then(res=> res.json())
   .then(data=>{
    console.log(data);
   if(data.insertedId){
    Swal.fire({
        title: 'Admission Form Submitted Successfully!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
   }
   })
    }
    return (
        <div className="lg:ms-96 sm:m-7 mt-10 mb-10">
            <div className="card   lg:ms-16 w-full max-w-2xl  shadow-2xl bg-base-100">
            <div className="card-body w-full">
            
            <form onSubmit={handleAdmit} >
                    <h1 className="text-3xl/10  font-bold bg-gradient-to-br from-purple-600  to-pink-600 inline-block text-transparent bg-clip-text mx-auto">
                     Admission Now!!
                    </h1>
                    <div className="flex flex-wrap gap-4">

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Candidate Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                       
                        className="input input-bordered w-72"

                        required
                      />
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Candidate Email</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                       defaultValue={user?.email}
                        className="input input-bordered w-72"
                        required
                      />
                    </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
 
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Subject</span>
                      </label>
                      <select name="subject" className="select select-bordered w-72 max-w-xs">
                         <option disabled selected>Choose the Subject</option>
                          <option>Science</option>
                         <option>Commerce</option>
                         <option>Arts</option>
                        </select>
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">College Name</span>
                      </label>
                      <input
                        type="text"
                        name="clgName"
                        defaultValue={admitClg?.name}
                        className="input input-bordered w-72"
                        required
                      />
                    </div>
                    </div>

                    <div className="flex flex-wrap gap-4">

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">College Id</span>
                      </label>
                      <input
                        type="text"
                        name="clgId"
                        defaultValue={admitClg?._id}
                        className="input input-bordered w-72"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Address</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="address"
                        className="input input-bordered w-72"
                        required
                      />
                    </div>

                   
</div>

<div className="flex flex-wrap gap-4 ">
<div className="form-control">
                      <label className="label">
                        <span className="label-text">Date of Birth</span>
                      </label>
                      <input
                        type="date"
                        name="birth"
                        placeholder="date of birth"
                        className="input input-bordered w-72"
                        required
                      />
                    </div>


                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        type="number"
                        name="phoneNum"
                        placeholder="Phone Number"
                        className="input input-bordered w-72"
                        required
                      />
                    </div>
                    <div className="form-control">

                      <label className="label">
                        <span className="label-text">Image Url</span>
                      </label>
                      <input
                        type="url"
                        name="image"
                        defaultValue={user?.photoURL}
                        className="input input-bordered w-72"
                        required
                      />
                    </div>
</div>

                    

                   
                    <div className="form-control mt-6">
                      <button className="btn mx-auto sm:w-1/2 bg-purple-500 border-0 hover:bg-pink-600 ">
                        Submit
                      </button>
                    </div>
                   
                   
                  </form>
            </div>
            
          </div> 
        </div>
    );
};

export default Admission;