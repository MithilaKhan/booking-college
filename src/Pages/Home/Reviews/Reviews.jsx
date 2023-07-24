import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaStar } from 'react-icons/fa';
import Aos from "aos";

const Reviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews , setReviews] = useState([])

    useEffect(()=>{
        fetch("https://booking-college-server-mithilakhan.vercel.app/review")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReviews(data) 
        })
    } ,[])

    useEffect(() => {
      Aos.init({duration:500, easing: 'ease'})
  },[])
    return (
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="lg:ms-44 md:ms-32">
            {
                reviews.map(review => <div key={review._id} className="chat chat-start">
             
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={user?.photoURL} />
    </div>
  </div>
  <div className="chat-header">
    {user?.displayName}
   
  </div>
  <div className="chat-bubble">
    <h1>{review.review}</h1>
    <p className="flex ">{review.rate} <span className="p-1 text-yellow-500"><FaStar /></span>  </p></div>
 

              </div>)
            }
        </div>
    );
};

export default Reviews;