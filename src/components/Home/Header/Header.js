import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "./Banner/Banner";
import background from "../../../assets/images/Mask Group 2.png";
import "./_header.scss";
import BusinessInfo from "./BusinessInfo/BusinessInfo";

const Header = () => {
  return (
    <header className="header">
      <img className="header__bg img-fluid" src={background} alt="" />
      <div className="header__main">
        <NavBar />
        <Banner />
        <BusinessInfo />
      </div>
    </header>
  );
};

export default Header;
