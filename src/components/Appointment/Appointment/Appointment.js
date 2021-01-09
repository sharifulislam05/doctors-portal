import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import BookAppointment from "../BookAppointment/BookAppointment";
import "./_appointment.scss";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="appointment">
      <NavBar />
      <AppointmentBanner
        handleDateChange={handleDateChange}
        date={selectedDate}
      />
      <BookAppointment bookingDate={selectedDate} />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Appointment;
