import React from "react";
import img1 from "../../images/doctors/dr1.jpg";
import img10 from "../../images/doctors/dr2.jpg";
import img2 from "../../images/doctors/dr3.jpg";
import img3 from "../../images/doctors/dr4.jpg";
import img4 from "../../images/doctors/dr5.jpg";
import img5 from "../../images/doctors/dr6.jpg";
import img6 from "../../images/doctors/dr7.jpg";
import img7 from "../../images/doctors/dr8.jpg";
import img8 from "../../images/doctors/dr9.jpg";
import img9 from "../../images/doctors/dr10.jpg";
import './Doctors.css';


const Doctors = () => {
  return (
    <div className='dr-section container'>
         <h1 className='section-title text-center'>-- Our All Doctors --</h1>
      <div className="row">
          <h2 className="text-center dr-header">Cardiologists</h2>
        <div className="col-4">
          <img src={img1} alt="" className="dr-img" />
          <h3 className="mt-2 dr-name">Dr. Emma Watson</h3>
        </div>
        <div className="col-4">
          <img src={img2} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. James Bond</h3>
        </div>
        <div className="col-4">
          <img src={img3} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. Justin Bieber</h3>
        </div>
      </div>
      <div className="row">
      <h2 className="text-center dr-header">Neurologist</h2>
        <div className="col-4">
          <img src={img4} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. Emma Watson</h3>
        </div>
        <div className="col-4">
          <img src={img5} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. Emma Watson</h3>
        </div>
        <div className="col-4">
          <img src={img6} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. James Bond</h3>
        </div>
      </div>
      <div className="row">
      <h2 className="text-center dr-header">Rheumatologist</h2>
        <div className="col-4">
          <img src={img7} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. Emma Watson</h3>
        </div>
        <div className="col-4">
          <img src={img8} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. Justin Bieber</h3>
        </div>
        <div className="col-4">
          <img src={img9} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. James Bond</h3>
        </div>
      </div>
      <div className="row">
      <h2 className="text-center dr-header">Endocrinologist</h2>
        <div className="col-4">
          <img src={img10} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. Emma Watson</h3>
        </div>
        <div className="col-4">
          <img src={img2} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. James Bond</h3>
        </div>
        <div className="col-4">
          <img src={img3} alt="" className="dr-img" /><h3 className="mt-2 dr-name">Dr. Justin Bieber</h3>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
