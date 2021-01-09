import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./_bookAppointment.scss";

const BookingCard = ({ bookingInfo, bookingDate }) => {
  const { subject, visitingHour, totalSpace } = bookingInfo;
  const [appointmentOn, setAppointmentOn] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setAppointmentOn({ subject, bookingDate, visitingHour });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="col-11 col-md-4 booking__card">
      <div className="col-md-12 shadow mb-5">
        <h5 className="mt-3">{subject}</h5>
        <h6>{visitingHour}</h6>
        <p className="text-secondary">{totalSpace} space available</p>
        <button onClick={() => openModal()} className="primary-btn mb-4">
          Book appointment
        </button>
        <AppointmentForm
          appointmentOn={appointmentOn}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default BookingCard;
