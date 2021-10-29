import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { googleSignIn } = useAuth();

  return (
    <div className="container login-area">
      <div className="login-form">
        <div>
          <h2 className="mb-5">Please Login</h2>
          <h5>Your Email</h5>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-4"
          />
          <h5>Your Password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control mb-4"
          />
          <input type="submit" value="Submit" className="btn btn-success" />
        </div>
        <hr />
        <button className="btn btn-danger float-right" onClick={googleSignIn}>
        <i class="fab fa-google"></i> Google Sign In
        </button>
        <h6 className="my-3">
          Are you new? <Link to="/register">Register Here</Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
