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

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);

  return (
    <div className="container">
      <div className="row hero-area">
        <div className="col-md-6 col-12 hero-text">
          <h1>
            GET THE BEST <br />
            <span>TREATMENT</span> FROM <br />
            BEST DOCTORS
          </h1>
          <button className="btn hero-btn">Check Our Services</button>
        </div>
        <div className="col-md-6 col-12">
          <img src={img} className="img-fluid" alt="banner-img" />
        </div>
      </div>
      <div className="service-area my-5">
        <h2 className="text-center my-5 section-title">Some Of Our Services</h2>
        <div className="service-container  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      <div className="dr-area">
      <h2 className="text-center my-5 section-title">Our Best Doctors</h2>
        <div className="row g-5">
          <div className="col-4">
            <img src={img1} alt="" />
            <h3 className="mt-2 dr-name">Dr. Alexa Hamin</h3>
          </div>
          <div className="col-4">
            <img src={img2} alt="" />
            <h3 className="mt-2 dr-name">Dr. Selena Gomez</h3>
          </div>
          <div className="col-4">
            <img src={img3} alt="" />
            <h3 className="mt-2 dr-name">Dr. Justin Bieber</h3>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-4">
            <img src={img4} alt="" />
            <h3 className="mt-2 dr-name">Dr. Charlie Puth</h3>
          </div>
          <div className="col-4">
            <img src={img5} alt="" />
            <h3 className="mt-2 dr-name">Dr. James Bond</h3>
          </div>
          <div className="col-4">
            <img src={img6} alt="" />
            <h3 className="mt-2 dr-name">Dr. Emma Watson</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
