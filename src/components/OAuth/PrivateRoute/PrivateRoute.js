import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const isLoggedIn = () => {
    const token = sessionStorage.getItem("userToken");
    if (!token) {
      return false;
    }
    const decodeToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    return decodeToken.exp > currentTime;
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
