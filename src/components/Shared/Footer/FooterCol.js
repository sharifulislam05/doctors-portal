import React from "react";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="col-6 col-md-3">
      {props.menuTitle ? (
        <h1 className="footer__menu-header">{props.menuTitle}</h1>
      ) : (
        " "
      )}
      {props.menuList.map((item, index) => {
        return (
          <ul className="list-unstyled" key={index}>
            {" "}
            <li>
              <Link to={item.link} className="text-secondary">
                {item.name}
              </Link>
            </li>
          </ul>
        );
      })}
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
