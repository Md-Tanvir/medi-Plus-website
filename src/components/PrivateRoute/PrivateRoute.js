import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import './PrivateRoute.css'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
        <div className='container spinner-area'>
      <div className="spinner-grow justify-content-center" role="status">
        <p className="visually-hidden text-center">Loading...</p>
      </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
