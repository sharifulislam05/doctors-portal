import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Blogs from "../Blogs/Blogs";
import Doctors from "../Doctors/Doctors";
import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import FeatureService from "../FeatureService/FeatureService";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <FeatureService />
      <MakeAppointment />
      <Testimonial />
      <Blogs />
      <Doctors />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
