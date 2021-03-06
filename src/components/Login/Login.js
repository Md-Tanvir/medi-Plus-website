import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { googleSignIn, logInWithEmail,setisLoading,setUser } = useAuth();

  // For going back to where it came
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';


 // getting email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // getting password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // login through email and password
  const handleEmailLogin = (e) => {

    e.preventDefault();
    setisLoading(true)
    logInWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user)
        setError('')
        history.push(url)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // Google sign in
  const handleGoogleLogin = () => {
    setisLoading(true)
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(url);
      })

      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(()=> setisLoading(false))
  };

  return (
    <div className="container login-area">
      <div className="login-form">
        <form onSubmit={handleEmailLogin}>
          <h2 className="mb-5">Please Login</h2>
          <h5>Your Email</h5>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-4"
            onBlur={handleEmailChange}
            required
          />
          <h5>Your Password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control mb-4"
            onBlur={handlePasswordChange}
            required
          />
          <p className='text-danger'>{error}</p>
          <input type="submit" value="Login" className="btn btn-success" />
        </form>
        <hr />
        <button
          className="btn btn-danger float-right"
          onClick={handleGoogleLogin}
        >
          <i className="fab fa-google"></i> Google Sign In
        </button>
        <h6 className="my-3">
          Are you new? <Link to="/register">Register Here</Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
