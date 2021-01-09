import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { UserContext } from "../../../App";
import AppointmentShortList from "./AppointmentShortList";

const AppointmentByDate = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointment, setAppointment] = useState([]);

  const handleChange = (date) => {
    setSelectedDate(date);
  };
  //load data from database filter by date
  const appointmentDate = new Date(selectedDate).toDateString();
  useEffect(() => {
    fetchData();
  }, [appointmentDate]);
  const fetchData = async () => {
    try {
      const getData = await Axios.post(
        "https://frozen-beyond-41259.herokuapp.com/appointmentByDate",
        {
          email: loggedInUser.email,
          date: appointmentDate,
        }
      );
      setAppointment(getData.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-5 mt-5">
          <Calendar
            onChange={handleChange}
            value={selectedDate}
            className="primary-calender"
          />
        </div>
        <div className="col-12 col-md-5 mt-5">
          <h4 className="text-right text-primary pr-3">{loggedInUser.name}</h4>
          <h4 className="aqua-text">Appointment</h4>
          {appointment.length ? (
            <AppointmentShortList appointment={appointment} />
          ) : (
            <h5 className="text-secondary mt-5">No appointment available</h5>
          )}
        </div>
      </div>
    </>
  );
};

export default AppointmentByDate;
