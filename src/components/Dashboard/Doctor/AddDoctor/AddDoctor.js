import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./_addDoctor.scss";
import "react-toastify/dist/ReactToastify.css";

const AddDoctor = () => {
  const [doctorInfo, setDoctorInfo] = useState({});
  const [file, setFile] = useState(null);
  //handle form input
  const handleBlur = (e) => {
    const newInfo = { ...doctorInfo };
    newInfo[e.target.name] = e.target.value;
    setDoctorInfo(newInfo);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  //handle add-doctor form and post to server
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", doctorInfo.name);
    formData.append("email", doctorInfo.email);
    fetch("https://frozen-beyond-41259.herokuapp.com/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("add doctor successfully");
        document.querySelector(".add-doctor__form").reset();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <div className="text-center aqua-text my-3">
        <h3>Add Doctor</h3>
      </div>
      <form onSubmit={handleSubmit} className="add-doctor__form">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="password"
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group add-doctor__file">
          <label htmlFor="file">Upload a image</label>
          <input
            onChange={handleFileChange}
            type="file"
            name="image"
            className="form-control"
            id="file"
            onBlur={handleBlur}
          />
        </div>

        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddDoctor;
