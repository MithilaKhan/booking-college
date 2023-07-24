import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Colleges from "../Pages/Colleges/Colleges";
import Details from "../Shared/Details/Details";

import AdmissionClg from "../Pages/Admission/AdmissionClg/AdmissionClg";
import Admission from "../Pages/Admission/Admission";
import PrivateRouter from "./PrivateRouter";
import MyCollege from "../Pages/MyCollege/MyCollege";
import UserInfo from "../Header/UserInfo/UserInfo";
import UpdateInfo from "../Header/UpdateInfo/UpdateInfo";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "colleges",
          element: <Colleges/>,
        },
        {
          path: "/details/:id",
          element:<PrivateRouter><Details/></PrivateRouter>,
          loader:({params}) =>fetch(`http://localhost:5000/colleges/${params.id}`)
        },
        {
          path: "admission",
          element: <AdmissionClg/>,
        },
        {
          path: "/admit/:id",
          element: <Admission/>,
          loader:({params}) =>fetch(`http://localhost:5000/colleges/${params.id}`)
        },
        {
          path: "myCollege",
          element: <MyCollege/>,
         
        }, 
        {
          path: "userInfo" ,
          element:<UserInfo/> ,
          
        } ,
        {
          path: "/updateInfo/:id" ,
          element: <UpdateInfo/> ,
          loader:({params}) =>fetch(`http://localhost:5000/user/${params.id}`)
        }
      ],
    },
  ]);
export default router