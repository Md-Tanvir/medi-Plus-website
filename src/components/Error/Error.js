import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/error.jpg';
import './Error.css'

const Error = () => {
    return (
        <div className='container text-center'>
            <img src={img} className="img-fluid error-img" alt="" />
            <Link to='/home'>
            <button className='btn appo-btn'>GO HOME</button>
            </Link>
        </div>
        
    );
};

export default Error;