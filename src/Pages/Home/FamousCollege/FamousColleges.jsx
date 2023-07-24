import { useEffect, useState } from "react";
import FamousCollege from "./FamousCollege";
import Aos from "aos";


const FamousColleges = () => {
    const [colleges , setColleges] = useState([])
    const famousColleges = colleges.slice(0,3)

    useEffect(()=>{
        fetch("http://localhost:5000/colleges")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setColleges(data)
        })
    } ,[])

    useEffect(() => {
        Aos.init({duration:500, easing: 'ease'})
    },[])

    return (
        <div>
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center gap-x-8">
        {
            famousColleges.map(college => <FamousCollege key={college._id}
                college={college}
            ></FamousCollege>)
        }
        </div>
    </div>
    );
};

export default FamousColleges;