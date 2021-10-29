import React, { useEffect, useState } from "react";
import img1 from "../../images/banner/img4.png";
import Service from "../Service/Service";

import "./Home.css";

const Home = () => {
  const[services,setServices]=useState([]);
  useEffect(()=>{
      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setServices(data.slice(0,6)))
  },[])

  return (
    <div className="container">
      <div className="row hero-area">
        <div className="col-6 hero-text">
          <h1>
            GET THE BEST <br />
            <span>TREATMENT</span> FROM <br />
            BEST DOCTORS
          </h1>
        </div>
        <div className="col-6">
          <img src={img1} className="img-fluid" alt="banner-img" />
        </div>
      </div>
      <div className='service-area my-5'>
          <h2 className='text-center my-5 section-title'>Our Services</h2>
          <div className="service-container  row row-cols-1 row-cols-md-3 g-4">
          {
              services.map(service=> <Service key={service.id} service={service}></Service>)
          }
          
      </div>
        
      </div>
    </div>
  );
};

export default Home;
