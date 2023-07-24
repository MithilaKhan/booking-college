import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";




const MyCollege = () => {
 
    const {user} = useContext(AuthContext)
    const [college , setCollege] = useState([])
  

    useEffect(()=>{
    fetch(`https://booking-college-server-mithilakhan.vercel.app/mycollege?email=${user?.email}`)
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        setCollege(data)
    })
    } ,[user])


    const handleReview=event=>{
        event.preventDefault();
        const form = event.target ;
        const review =form.review.value ;
        const rate = form.rate.value ;
        // const clgName= form.clgName.value
        const userReview  = {review , rate } ;
        console.log(userReview);

        fetch("https://booking-college-server-mithilakhan.vercel.app/review" , {
            method:"POST" ,
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify(userReview)
   })
   .then(res =>res.json())
   .then(data =>{
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Added review Successfully!',
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
        <div>
          <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Email</th> 
        <th>College</th> 
        <th>Birth date</th> 
        <th>Contact</th> 
        <th></th>
        <th></th>
      </tr>
    </thead> 
    <tbody>
    {
      college.map((clg ,index) => <tr className='' key={clg._id}>
        
         <td>{index + 1}</td>
         <td>
         <div className="flex flex-wrap items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={clg.image} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{clg.name}</div>
              
            </div>
          </div>
            </td>
         <td>{clg.email}</td>
         <td className=''>
         <div className=" flex-wrap">
<div> {clg.subject} </div>
<div>{clg.clgName}</div>
            </div>
            </td>
         <td className=''>{clg.birth}</td>
         <td className=''>
         <div className=" flex-wrap">
<div> {clg.address} </div>
<div>{clg.phone}</div>
            </div>
         </td>
         <td><Link to={`/details/${clg.clgId}`}> <button className="text-2xl"><FaInfoCircle/></button></Link> </td>
         <td><button onClick={()=>window.my_modal_5.showModal()}  className='btn bg-gradient-to-br from-purple-500  to-pink-500 border-0 ps-3 pe-3'>review</button></td>
         
       </tr>)
     }
     
    
    </tbody> 
   
  </table>
  
</div>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-xl text-pink-600">{user?.displayName} please express your valuable opinion</h3>
    <form onSubmit={handleReview} >
    <div className="form-control mt-4">
    {/* <h3 className="font-bold text-center text-xl text-pink-600">{clg?.clgName} </h3> */}
                      <input
                        type="text"
                        name="review"
                        placeholder="write your review"
                      className="input input-bordered h-16 w-72"
                     required
                      />
                    </div>
                    <div className="form-control mt-3">
                     
                      <input
                        type="text"
                        name="rate"
                        placeholder="rate us"
                       className="input input-bordered w-24 h-9 "
                         required
                      />
                    </div>
                    <div className="form-control w-1/3 mx-auto  modal-action  ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn   btn-outline btn-secondary">Add Review</button>
  </div>
    </form>
     </form>
</dialog>

        </div>
    );
};

export default MyCollege;