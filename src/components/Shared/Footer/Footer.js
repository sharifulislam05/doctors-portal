import React from "react";
import "./_footer.scss";
import FooterCol from "./FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const oralHealth = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
  ];
  const services = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
  ];
  return (
    <footer className="container">
      <div className="row footer-container">
        <FooterCol menuTitle="." menuList={noNamed}></FooterCol>
        <FooterCol menuTitle="Oral Health" menuList={oralHealth}></FooterCol>
        <FooterCol menuTitle="Services" menuList={services}></FooterCol>
        <FooterCol menuTitle="Our Address" menuList={ourAddress}>
          <ul className="social-media list-inline">
            <li className="list-inline-item">
              <a href="//facebook.com">
                <FontAwesomeIcon
                  className="icon active-icon"
                  icon={faFacebookF}
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="//google.com">
                <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="//instagram.com">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
            </li>
          </ul>
          <div className="mt-5 text-secondary">
            <h6>Call now</h6>
            <button className="primary-btn">+2025550295</button>
          </div>
        </FooterCol>
      </div>
      <div className="text-center mt-5">
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
