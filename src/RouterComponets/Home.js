import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {

   const navItem = useNavigate();
   

   const data = useLocation();
   console.log("data", data);

   const nextPage = () => {
      navItem('/personaldetails', {  
         state: {
            detail: 'Hello'
         }
      });
   }

   return (
      <>
         <div>I am Home Component</div>
         <button onClick={nextPage}>Next Page</button>
      </>
   )
}

export default Home;