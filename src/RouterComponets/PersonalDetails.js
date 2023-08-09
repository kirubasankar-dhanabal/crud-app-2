import React, { useState } from "react";
import ReactForms from "../ReactForms";
import { useNavigate, useLocation } from "react-router-dom";

const PersonalDetails = () => {

   const [data, setData] = useState([]);

   const navigate = useNavigate();
   const location = useLocation();
   console.log("location", location.state?.detail);

   const prevPage = () => {
      navigate('/home', {
         state: {
            data: data
         }
      });
   }

   const getLoadData = (data) => {
      setData(data);
   }

   return (
      <div>
         <button onClick={prevPage}>Move to Previous Page</button>
         <ReactForms name={'Kiruba'} loadData={getLoadData} />
         <div>I am PersonalDetails Component</div>
      </div>
   )
}

export default PersonalDetails;