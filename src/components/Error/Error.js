import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/error.jpg';
import './Error.css'

const Error = () => {
    return (
        <div className='container text-center align-items-center'>
            <img src={img} className="img-fluid error-img" alt="" />
            <div>
            <Link to='/home'>
            <button className='btn error-btn'>GO HOME</button>
            </Link>
            </div>
        </div>
        
    );
};

export default Error;