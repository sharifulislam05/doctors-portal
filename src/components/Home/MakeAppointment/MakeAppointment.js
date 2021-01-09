import React from "react";
import "./_makeAppointment.scss";
import doctor from "../../../assets/images/5790-removebg.png";

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="row p-0 m-0">
        <div className="col-7 col-md-4 make-appointment__img">
          <img src={doctor} alt="" className="img-fluid" />
        </div>
        <div className="col-5 col-md-6 ml-0 ml-md-5 p-0">
          <div className="make-appointment__description mt-5">
            <h6 className="mb-2">Appointment</h6>
            <h3 className="mb-3">
              Make an appointment <br /> Today
            </h3>
            <p>
              It is a long established fact that a reader will be distractedby{" "}
              <br />
              the readable content of a page when looking at its
            </p>
            <button className="primary-btn mt-3">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
