import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/OAuth/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/OAuth/PrivateRoute/PrivateRoute";
import Blogs from "./components/Home/Blogs/Blogs";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";
import jwt_decode from "jwt-decode";
import Dashboard from "./components/Dashboard/Dashboard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const UserContext = createContext();

function App() {
  const isLogin = () => {
    const token = sessionStorage.getItem("userToken");
    if (!token) {
      return false;
    }
    const decodeToken = jwt_decode(token);
    const newUser = { name: decodeToken.name, email: decodeToken.email };
    return newUser;
  };
  const [loggedInUser, setLoggedInUser] = useState(isLogin);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
