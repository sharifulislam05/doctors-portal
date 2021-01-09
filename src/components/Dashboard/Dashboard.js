import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Doctor from "./Doctor/Doctor";
import Patient from "./Patient/Patient";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);
  //load data for check admin
  useEffect(() => {
    Axios.get(
      "https://frozen-beyond-41259.herokuapp.com/isDoctor?email=" + loggedInUser.email
    ).then((data) => setIsDoctor(data.data));
  }, [loggedInUser.email]);

  return <div>{isDoctor ? <Doctor /> : <Patient />}</div>;
};

export default Dashboard;
