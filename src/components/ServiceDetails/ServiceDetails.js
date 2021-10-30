import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './ServiceDetails.css'

const ServiceDetails = (props) => {
  const { serviceId } = useParams();

  const [details, setDetails] = useState({});

  // Getting data according to their id
  useEffect(() => {
    const url = `/data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p.id == serviceId);
        console.log(p);
        setDetails(p);
      });
  }, [serviceId]);


  return (
    <div className='container mt-5'>
      <div className='row gy-3'>
        {/* Single Service Showing Area */}
        <div className="col-md-6 col-12">
          <h2 className="service-title">{details?.name}</h2>
          <p className="service-text">{details?.description}</p>
          <button className='btn hero-btn'>Get It Now</button>
        </div>
        <div className="col-md-6 col-12">
          <img src={details?.img} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
