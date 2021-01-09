import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import AddDoctor from "../Doctor/AddDoctor/AddDoctor";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import "../_dashboard.scss";
import PatientAppointment from "./PatientAppointment/PatientAppointment";
import {
  faCalendar,
  faGripHorizontal,
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Patient = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [sidebarItem, setSidebarItem] = useState("dashboard");
  const handleSignOut = () => {
    setLoggedInUser({})
    sessionStorage.removeItem("userToken");
  }
  return (
    <section>
      <div className="row">
        <aside className="col-4 col-md-2">
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

            <li onClick={handleSignOut} className="text-danger">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
              Logout
            </li>
          </ul>
        </aside>
        <div className="col-8 col-md-10">
          {sidebarItem === "dashboard" && <AppointmentByDate />}
          {sidebarItem === "appointment" && <PatientAppointment />}
        </div>
      </div>
    </section>
  );
};

export default Patient;
