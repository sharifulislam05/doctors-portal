import React from "react";
import "./_contact.scss";

const ContactUs = () => {
  return (
    <section className="contact-us mb-5">
      <div className="container">
        <div className="contact__header text-center pt-5">
          <h5 className="aqua-text font-weight-bold">CONTACT US</h5>
          <h2 className="text-white">Always Connect with us </h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <form className="contact__form w-75">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Subject"
            />
            <textarea
              cols="20"
              rows="5"
              className="form-control mt-3"
              placeholder="Your Message"
            ></textarea>
            <div className="text-center mt-3">
              <button className="primary-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
