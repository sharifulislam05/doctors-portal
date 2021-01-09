import React from "react";
import Calendar from "react-calendar";
import appointmentBanner from "../../../assets/images/Mask Group 1.png";
import "react-calendar/dist/Calendar.css";

const AppointmentBanner = ({ handleDateChange, date }) => {
  return (
    <section style={{ marginTop: "6rem" }}>
      <div className="row p-0 m-0">
        <div className="col-md-6 offset-md-1">
          <h1 className="mb-5">Appointment</h1>
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="primary-calender"
          />
        </div>
        <div className="col-md-5 pr-5">
          <img
            src={appointmentBanner}
            alt=""
            className="img-fluid "
            style={{}}
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
