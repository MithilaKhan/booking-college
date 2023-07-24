import FamousColleges from "../FamousCollege/FamousColleges";
import Gallery from "../Gallery/Gallery";
import Researched from "../Researched/Researched";
import Reviews from "../Reviews/Reviews";
import SearchField from "../SearchField/SearchField";


const Home = () => {
    return (
        <div>
            <SearchField/>
            
            <div>
                <h1 className="text-center text-pink-600 font-bold text-3xl  p-7 font-serif">Famous Colleges</h1>
            </div>
            <FamousColleges/>

            <div>
                <h1 className="text-center text-purple-600 font-bold text-3xl  pt-12 pb-5 font-serif">graduate's group pictures</h1>
            </div>
            <Gallery/>

            <div>
                <h1 className="text-center text-pink-600 font-bold text-3xl  pt-20  font-serif">researched by the students</h1>
            </div>
            <Researched/>

            <div>
                <h1 className="text-center text-purple-600 font-bold text-3xl  pt-12 pb-5 font-serif">Reviews and feedback</h1>
            </div>
            <Reviews/>
            
        </div>
    );
};

export default Home;