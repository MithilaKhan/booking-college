import { Link } from "react-router-dom";


const FamousCollege = ({college}) => {
    const {_id ,image , name , collegeRating ,admissionDates, numberOfResearch } = college
    console.log(college._id);
    return (
        <div>
           <div className="card w-96 h-96 bg-base-100 shadow-xl lg:mb-6">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-pink-500">{name}</h2>
    <p><span className="font-bold">Rating:</span>  {collegeRating}</p>
    <p> <span className="font-bold">Admission Date:</span> {admissionDates}</p>
    <p> <span className="font-bold">Number of Research:</span> {numberOfResearch}</p>
    <div className="card-actions justify-end">
        <Link to={`/details/${_id}`}><button className="btn bg-gradient-to-br from-purple-500  to-pink-600 border-0 ps-8 pe-8 text-white">Details</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default FamousCollege;