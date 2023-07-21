import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
<div className="text-center text-pink-600 font-bold text-2xl mx-auto " id="error-page">
      <img className="mx-auto w-96 h-1/2" src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-21190.jpg?w=740&t=st=1684399685~exp=1684400285~hmac=d880315c0c9764074d2fbe383c9170d59a87a50210315450d19089f70e9a4278" alt="" />
      <h1>Oops!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-6">
        <i>{error.statusText || error.message}</i>

      </p>
      <Link  to="/"><button className='btn bg-gradient-to-br from-purple-500  to-pink-600 border-0 ps-8 pe-8 text-white'>Back to Home</button></Link>
    </div>

    </div>
    
  );
}
