import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"

const Gallery = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
     } ,[])
    return (
        <div className=' w-3/4  mx-auto'>
        <div className='pt-10  grid lg:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center'>
        {/* img 1 */}
        <div className=" card h-72   w-full bg-base-100 shadow-xl" data-aos="zoom-in-up">
 <img src="https://files.prokerala.com/news/photos/imgs/800/students-celebrate-after-declaration-of-higher-212096.jpg" alt="Shoes" className='h-full w-full rounded-2xl' />
 
     </div>

        {/* img 2 */}
        <div className="card card-compact h-72  w-full bg-base-100 shadow-xl" data-aos="zoom-in">
 <img src="https://images.livemint.com/img/2021/07/29/600x338/PTI07_23_2021_000235A_1627573323755_1627573340596.jpg" alt="Shoes" className='h-full w-full rounded-2xl' />
 
     </div>

        {/* img 3 */}
        <div className="card card-compact h-72  w-full bg-base-100 shadow-xl" data-aos="zoom-in-down">
 <img src="https://www.theindianwire.com/wp-content/uploads/2019/04/HPBOSE.jpg" alt="Shoes" className='h-full w-full rounded-2xl' />

     </div>
        {/* img 4 */}
        <div className="card card-compact h-72  w-full bg-base-100 shadow-xl" data-aos="zoom-in-up">
 <img src="https://th.bing.com/th/id/OIP.8BMiBVfvGBlHNjCRBT4VhgHaDZ?pid=ImgDet&w=980&h=450&rs=1" alt="Shoes" className='h-full w-full rounded-2xl' />
 
     </div>
        {/* img 5 */}
        <div className="card card-compact h-72  w-full bg-base-100 shadow-xl" data-aos="zoom-in">
 <img src="https://cache.careers360.mobi/media/article_images/2020/7/16/West-bengal-HS-result-2020-live-updates.jpg" alt="Shoes" className='h-full w-full rounded-2xl' />

     </div>
        {/* img 6 */}
        <div className="card card-compact h-72  w-full bg-base-100 shadow-xl" data-aos="zoom-in-down">
 <img src="https://th.bing.com/th/id/OIP.ezJvg5xTt3LaiC1d0TnGJQHaEK?pid=ImgDet&w=970&h=545&rs=1" alt="Shoes" className='h-full w-full rounded-2xl' />

     </div>
       </div>
     </div>
    );
};

export default Gallery;