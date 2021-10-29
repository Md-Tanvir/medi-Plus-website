import React from "react";
import { Link } from "react-router-dom";
import './Service.css'

const Service = (props) => {
    const {name,description,img,id}=props.service;

  return (
    <div>
      
        <div className="col">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">
                {description.slice(0,250)}
              </p>
            </div>
            <Link to={`/service/${id}`}>
            <button className='btn appo-btn m-3 mt-0'>Take Appoinment <i className="fas fa-angle-double-right"></i></button>
            </Link>
          </div>
         
        </div>
     
    </div>
  );
};

export default Service;
