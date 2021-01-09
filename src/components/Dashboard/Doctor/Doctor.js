import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import AddDoctor from "./AddDoctor/AddDoctor";
import AllAppointment from "./AllAppointment/AllAppointment";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import "../_dashboard.scss";
import {
  faCalendar,
  faGripHorizontal,
  faHome,
  faSignOutAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Doctor = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [sidebarItem, setSidebarItem] = useState("dashboard");
  const handleSignOut = () => {
    setLoggedInUser({});
    sessionStorage.removeItem("userToken");
  };
  return (
    <div>
      <div className="row">
        <div className="col-4 col-md-2">
          <ul className="list-unstyled pl-2 pt-5 brand__sidebar">
            <li>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faHome} className="mr-3" />
                Home
              </Link>
            </li>
            <li
              onClick={() => setSidebarItem("dashboard")}
              className={`${sidebarItem === "dashboard" && "sidebar__active"}`}
            >
              <FontAwesomeIcon icon={faGripHorizontal} className="mr-3" />
              Dashboard
            </li>
            <li
              onClick={() => setSidebarItem("appointment")}
              className={`${
                sidebarItem === "appointment" && "sidebar__active"
              }`}
            >
              <FontAwesomeIcon icon={faCalendar} className="mr-3" />
              Appointment
            </li>
            <li
              onClick={() => setSidebarItem("add-doctor")}
              className={`${sidebarItem === "add-doctor" && "sidebar__active"}`}
            >
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              Add Doctor
            </li>
            <li onClick={handleSignOut} className="text-danger">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
              Logout
            </li>
          </ul>
        </div>
        <div className="col-7 col-md-10">
          {sidebarItem === "dashboard" && <AppointmentByDate />}
          {sidebarItem === "appointment" && <AllAppointment />}
          {sidebarItem === "add-doctor" && <AddDoctor />}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
