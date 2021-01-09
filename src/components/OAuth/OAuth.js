import React, { useContext } from "react";
import loginImage from "../../assets/images/Group 140.png";
import gLogo from "../../assets/images/Group 573.png";
import "./_oauth.scss";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../configs/firebase.config";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const OAuth = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  //firebase google signIn
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("userToken", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="container auth-container">
      <div className="row">
        <div className="col-12 col-md-5 d-flex align-items-center">
          <div className="auth__area">
            <h3 className="text-center">Login</h3>
            <form>
              <div className="form-group">
                <label htmlFor="">User Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-danger">
                  Forgot your password?
                </label>
              </div>
            </form>
            <button
              className="google-login d-flex mb-5 form-control"
              onClick={handleLogin}
            >
              <img src={gLogo} alt="" />
              <p className="m-auto">Continue with google</p>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img
            src={loginImage}
            alt=""
            className="img-fluid"
            style={{ height: "100vh" }}
          />
        </div>
      </div>
    </section>
  );
};

export default OAuth;
