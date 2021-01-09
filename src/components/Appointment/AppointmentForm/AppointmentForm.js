import Axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import "./_appointmentForm.scss";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    width: "600px",
    padding: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ appointmentOn, modalIsOpen, closeModal }) => {
  const { register, handleSubmit, errors } = useForm();
  //appoint form submit data send server
  const onSubmit = (data) => {
    data.subject = appointmentOn.subject;
    data.visitingHour = appointmentOn.visitingHour;
    data.date = appointmentOn.bookingDate;
    Axios.post(
      "https://frozen-beyond-41259.herokuapp.com/appointment",
      data
    ).then((result) => {
      if (result.data) {
        closeModal();
        toast.success("appointment saved successfully");
      }
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <p className="text-right text-danger close__modal" onClick={closeModal}>
        close
      </p>
      <div className="text-center">
        <div className="modal__header">
          <p>{appointmentOn.subject}</p>
          <p>{appointmentOn.bookingDate}</p>
        </div>
        <div className="d-flex justify-content-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column w-75  pt-3 pl-5 pr-5 pb-5"
          >
            <input
              type="text"
              name="name"
              defaultValue=""
              ref={register}
              placeholder="Your Name"
              className="modal__input"
            />
            <input
              type="number"
              name="phone"
              defaultValue=""
              ref={register}
              placeholder="Your Phone"
              className="modal__input"
            />
            <input
              type="email"
              className="modal__input"
              name="email"
              ref={register({ required: true })}
              placeholder="Email"
              id="email"
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
            <div className="d-flex">
              <select
                name="gender"
                ref={register}
                className="modal__input"
                required
              >
                <option value="">Gender</option>
                <option value="female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="number"
                className="modal__input w-25 ml-5"
                name="age"
                ref={register({ required: true })}
                placeholder="Age"
                id="age"
              />
              <input
                type="number"
                className="modal__input w-25 ml-5"
                name="weight"
                ref={register({ required: true })}
                placeholder="Weight"
                id="weight"
              />
            </div>
            <div className="text-right mt-3">
              <input type="submit" className="primary-btn" />
            </div>
          </form>
        </div>
      </div>
      
    </Modal>
  );
};

export default AppointmentForm;
