import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const AdmissionClgCard = ({college}) => {
    const {_id ,image , name}= college
    return (
        <div className=" mb-28">
           <div className="card h-44 w-72  bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{name}</h2>
    
    <div className="card-actions justify-end ">
        <Link to={`/admit/${_id}`}> <button className="btn btn-primary bottom-0 bg-gradient-to-br from-pink-600  to-purple-600 border-0">Admit now <FaArrowRight/></button></Link>
     
    </div>
  </div>
</div> 
        </div>
    );
};

export default AdmissionClgCard;