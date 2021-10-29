import React from "react";
import './Service.css'

const Service = (props) => {
    const {name,description,img}=props.service

  return (
    <div>
      
        <div class="col">
          <div class="card h-100">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">{name}</h4>
              <p class="card-text">
                {description.slice(0,250)}
              </p>
            </div>
            <button className='btn appo-btn'>Take Appoinment</button>
          </div>
         
        </div>
     
    </div>
  );
};

export default Service;
