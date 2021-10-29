import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div id="services" className='container'>
        <h2 className='my-5 text-center section-title'>Our Services Available: {services.length}</h2>
        <div className="service-container container row row-cols-1 row-cols-md-3 gy-4">
            {
                services.map(service=> <Service key={service.id} service={service}></Service>)
            }
            
        </div>
    </div>
  )
};

export default Services;