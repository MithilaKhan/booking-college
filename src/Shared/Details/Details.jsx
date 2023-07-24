
import { useLoaderData} from "react-router-dom";

const Details = () => {
    const details =useLoaderData()
 
    return (
        <div className="lg:m-16">
          <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={details.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-pink-500 text-2xl">{details.name}</h2>
    <p> <span className="font-bold text-purple-500">Events:</span>  {details.events}</p>
    <p> <span className="font-bold text-purple-500">Sports:</span> {details.sports}</p>
    <p> <span className="font-bold text-purple-500">Admission Process: </span>{details.admissionProcess}</p>
    <p> <span className="font-bold text-purple-500">Event Details:</span> {details.eventsDetails}</p>
    <p> <span className="font-bold text-purple-500">Research the Works:</span>  {details.researchWorks}</p>
    <p> <span className="font-bold text-purple-500">Sports Categories:</span>  {details.sportsCategories}</p>
    
  </div>
</div>  
        </div>
    );
};

export default Details;