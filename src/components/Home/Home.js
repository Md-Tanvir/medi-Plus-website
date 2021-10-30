import React, { useEffect, useState } from "react";
import img from "../../images/banner/img4.png";
import Service from "../Service/Service";
import "./Home.css";
import img1 from "../../images/doctors/dr1.jpg";
import img2 from "../../images/doctors/dr2.jpg";
import img3 from "../../images/doctors/dr3.jpg";
import img4 from "../../images/doctors/dr4.jpg";
import img5 from "../../images/doctors/dr5.jpg";
import img6 from "../../images/doctors/dr6.jpg";
import brand1 from "../../images/brands/img1.jpg";
import brand2 from "../../images/brands/img2.png";
import brand3 from "../../images/brands/img3.png";
import brand4 from "../../images/brands/img4.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  
  // Getting json data
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);

  return (
    <div className="container">
      {/* Hero area */}
      <div className="row hero-area">
        <div className="col-md-6 col-12 hero-text">
          <h1>
            GET THE BEST <br />
            <span>TREATMENT</span> FROM <br />
            BEST DOCTORS
          </h1>
          <Link to="/services">
            <button className="btn hero-btn">Check Our Services</button>
          </Link>
        </div>
        <div className="col-md-6 col-12">
          <img src={img} className="img-fluid" alt="banner-img" />
        </div>
      </div>

      {/* Service area */}

      <div className="service-area my-5">
        <h2 className="text-center my-5 section-title">Some Of Our Services</h2>
        <div className="service-container  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>

      {/* SHowing Doctors area */}

      <div className="dr-area">
        <h2 className="text-center my-5 section-title">
          Some Of Our Best Doctors
        </h2>
        <div className="row g-5">
          <div className="col-md-4 col-12 dr-images">
            <img src={img1} alt="" />
            <h3 className="mt-2 dr-name">Dr. Alexa Hamin</h3>
            <p>Cardiologist</p>
          </div>
          <div className="col-md-4 col-12 dr-images">
            <img src={img2} alt="" />
            <h3 className="mt-2 dr-name">Dr. Selena Gomez</h3>
            <p>Pediatrician</p>
          </div>
          <div className="col-md-4 col-12 dr-images">
            <img src={img3} alt="" />
            <h3 className="mt-2 dr-name">Dr. Justin Bieber</h3>
            <p>Neurologist</p>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-md-4 col-12 dr-images">
            <img src={img4} alt="" />
            <h3 className="mt-2 dr-name">Dr. Charlie Puth</h3>
            <p>Rheumatologist</p>
          </div>
          <div className="col-md-4 col-12 dr-images">
            <img src={img5} alt="" />
            <h3 className="mt-2 dr-name">Dr. James Bond</h3>
            <p>Endocrinologist</p>
          </div>
          <div className="col-md-4 col-12 dr-images">
            <img src={img6} alt="" />
            <h3 className="mt-2 dr-name">Dr. Emma Watson</h3>
            <p>Psychiatrist</p>
          </div>
        </div>
      </div>
      {/* Associatied Brands Area */}
      <div className="brand-area">
        <h2 className="text-center my-5 section-title">Associated With</h2>
        <div className="row">
          <div className="col-md-3 col-12 text-center">
            <img src={brand1} className="brand-img" alt="" />
          </div>
          <div className="col-md-3 col-12 text-center">
            <img src={brand2} className="brand-img" alt="" />
          </div>
          <div className="col-md-3 col-12 text-center">
            <img src={brand3} className="brand-img" alt="" />
          </div>
          <div className="col-md-3 col-12 text-center">
            <img src={brand4} className="brand-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
