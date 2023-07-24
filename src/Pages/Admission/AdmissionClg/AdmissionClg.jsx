import { useEffect, useState } from "react";
import AdmissionClgCard from "../AdmissionClgCard/AdmissionClgCard";

const AdmissionClg = () => {
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-x-8 sticky ">
            {
                colleges.map(college => <AdmissionClgCard key={college._id}
                college={college}
                ></AdmissionClgCard>)
            }
        </div>
    );
};

export default AdmissionClg;