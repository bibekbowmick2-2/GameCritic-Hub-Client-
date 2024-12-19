import React from "react";
import "./CustomerSection.css";
import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";
// import caro4 from '../../assets/caro-2 (3).jpg'


const AllReview = () => {
  const loaderData = useLoaderData(); 
  const reviews = Array.isArray(loaderData) ? loaderData : loaderData.reviews || [];
   
  return (
    <header className="header">
      <div className="container">
        <div className="container__left">
          <h1>Read what our customers love about us</h1>
          <p>
            Over 200 companies from diverse sectors consult us to enhance the
            user experience of their products and services.
          </p>
          <p>
            We have helped companies increase their customer base and generate
            multifold revenue with our service.
          </p>
          <button>Read our success stories</button>
        </div>

        <Card reviews={reviews}> </Card>
        
      </div>
    </header>
  );
};

export default AllReview;
