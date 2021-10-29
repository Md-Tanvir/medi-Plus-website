import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    const style = {
        textDecoration: "none",
        marginRight: "25px",
      };
    return (
        <div className='footer-area mt-5 py-5'>
            <div className=" container">
            <div className="row">
                <div className="col-4">
                    <h2>MediPlus</h2>
                    <p>MediPlus Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</p>
                    <h5>[ Hotline - 10613 ]</h5>
                </div>
                <div className="col-4">
                    <h4>Quick Links</h4>
                    <NavLink style={style} to="/home">
                  <li className="nav-item items">Home</li>
                </NavLink>
                <NavLink style={style} to="/services">
                  <li className="nav-item items">Services</li>
                </NavLink>
                <NavLink style={style} to="/doctors">
                  <li className="nav-item items">Our Doctors</li>
                </NavLink>
                <NavLink style={style} to="aboutus">
                  <li className="nav-item items">About Us</li>
                </NavLink>
                </div>
                <div className="col-4">
                    <h2>GET US</h2>
                    <p><i class="fas fa-map-marker-alt"></i> 21 Shyamoli, Sylhet Road, Dhaka-1203, Bangladesh</p>
                    <p><i class="fas fa-phone-alt"></i> 10233, +88096529270100</p>
                    <p><i class="far fa-envelope"></i> info@mediplus.com , mediplus.dhaka@gmail.com</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;