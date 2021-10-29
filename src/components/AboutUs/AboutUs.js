import React from "react";
import img from '../../images/hosp.jpg';
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className="container aboutUs-area">
      <div className="row align-items-center">
        <div className="col-6">
            <h2>MediPlus HOSPITAL</h2>
            <h4>GET A WORLD CLASS HEALTH SERVICE</h4>
            <p>BSH has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.</p>
        </div>
        <div className="col-6">
            <img src={img} className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
