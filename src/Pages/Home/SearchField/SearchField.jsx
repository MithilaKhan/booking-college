import { useEffect, useState } from "react";


const SearchField = () => {
    const [searchText, setSearchText] = useState("");
    const [colleges , setColleges] = useState([])

    useEffect(()=>{
        fetch("https://booking-college-server-mithilakhan.vercel.app/colleges")
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setColleges(data)
        })
    } ,[])

   const handleSearch =()=>{
  fetch(`https://booking-college-server-mithilakhan.vercel.app/searchCollege/${searchText}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    setColleges(data)
  })
   }

    return (
        <div className='text-center p-16'>
          
            <div className="form-control lg:ms-96 lg:ps-24 mt-4 ">
  <div className="input-group ">
  <input
   onChange={(e) => setSearchText(e.target.value )}
   type="text" placeholder="search college" className="input w-full max-w-xs" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>

<div>
    {
        colleges.map(college =><div key={college._id} className="lg:m-16">
        <div className="card lg:card-side bg-base-100 shadow-xl text-justify ">
<figure><img src={college.image} alt="Album"/></figure>
<div className="card-body">
  <h2 className="card-title text-pink-500 text-2xl">{college.name}</h2>
  <p> <span className="font-bold text-purple-500">Events:</span>  {college.events}</p>
  <p> <span className="font-bold text-purple-500">Sports:</span> {college.sports}</p>
  <p> <span className="font-bold text-purple-500">Admission Process: </span>{college.admissionProcess}</p>
  <p> <span className="font-bold text-purple-500">Event Details:</span> {college.eventsDetails}</p>
  <p> <span className="font-bold text-purple-500">Research the Works:</span>  {college.researchWorks}</p>
  <p> <span className="font-bold text-purple-500">Sports Categories:</span>  {college.sportsCategories}</p>
  
</div>
</div>  
      </div>)
    }
</div>
         </div>
    );
};

export default SearchField;