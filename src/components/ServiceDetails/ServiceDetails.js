import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './ServiceDetails.css'

const ServiceDetails = (props) => {
  const { serviceId } = useParams();

  const [details, setDetails] = useState({});

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
      <div className='row'>
        <div className="col-6">
          <h2 className="service-title">{details?.name}</h2>
          <p className="service-text">{details?.description}</p>
        </div>
        <div className="col-6">
          <img src={details?.img} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
