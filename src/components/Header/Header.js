import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo/logo.png'
import './Header.css'

const Header = () => {
    const {logOut,user}=useAuth();
    const style = {
        textDecoration: "none",
        marginRight: "25px",
      };
    return (
        <div className="main-menu m-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Main Logo */}
            <Link style={{textDecoration:'none',width:'50%'}} to='/home'>
            <div className="navbar-brand">
              <img src={logo} className="main-logo" alt="" />
              <p>MediPlus</p>
            </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navigation Area */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavLink style={style} to="/home">
                  <li className="nav-item items">Home</li>
                </NavLink>
                <NavLink style={style} to="/services">
                  <li className="nav-item items">Services</li>
                </NavLink>
                <NavLink style={style} to="/doctors">
                  <li className="nav-item items">Our Doctors</li>
                </NavLink>
                <NavLink style={style} to="/aboutus">
                  <li className="nav-item items">About Us</li>
                </NavLink>
                {user?.email && <span>{user.displayName || user.email}</span>}
                { user?.email ? <span style={{marginLeft:'15px',fontSize:'20px',cursor:'pointer'}} onClick={logOut}><i className="fas fa-sign-out-alt"></i></span>:
                <NavLink style={style} to="/login">
                  <li className="nav-item items">Login</li>
                </NavLink>    
                }

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;