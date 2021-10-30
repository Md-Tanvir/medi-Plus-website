import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // For going back to where it came from
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const { registerNewUser, googleSignIn, setisLoading, setUser } = useAuth();

  // registering through email and password
  const handleRegistration = (e) => {
    e.preventDefault();
    registerNewUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("");
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // Google login
  const handleGoogleLogin = () => {
    setisLoading(true);
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setError("");
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setisLoading(false));
  };
  // getting email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // getting password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container login-area">
      <div className="login-form">
        <form onSubmit={handleRegistration}>
          <h2 className="mb-5">Please Register</h2>

          <h5>Your Email</h5>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-4"
            required
            onBlur={handleEmailChange}
          />
          <h5>Your Password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control mb-4"
            required
            onBlur={handlePasswordChange}
          />
          <p className='text-danger'>{error}</p>
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
        <hr />
        <button
          onClick={handleGoogleLogin}
          className="btn btn-danger float-right"
        >
          <i className="fab fa-google"></i> Google Sign In
        </button>
        <h6 className="my-3">
          Already Registered? <Link to="/login">Login Here</Link>
        </h6>
      </div>
    </div>
  );
};

export default Register;
