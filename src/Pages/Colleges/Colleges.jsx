import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";


const Colleges = () => {
    const [colleges , setColleges] = useState([])

    useEffect(()=>{
        fetch("https://booking-college-server-mithilakhan.vercel.app/colleges")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setColleges(data)
        })
    } ,[])
    return (
        <div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center gap-x-8">
            {
                colleges.map(college => <CollegeCard key={college._id}
                    college={college}
                ></CollegeCard>)
            }
            </div>
        </div>
    );
};

export default Colleges;