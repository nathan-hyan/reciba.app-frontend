import { faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UsermenuLoggedOut() {
  return (
    <div>
      <Link className="text-decoration-none" to="/login">
        <NavDropdown.Item as="div" className="text-dark">
          <FontAwesomeIcon icon={faUserCheck} className="mr-1" />{" "}
          {i18next.t("LoggedOutOpts:login")}
        </NavDropdown.Item>
      </Link>
      <Link className="text-decoration-none" to="/signup">
        <NavDropdown.Item as="div" className="text-dark">
          <FontAwesomeIcon icon={faUserPlus} className="mr-1" />{" "}
          {i18next.t("LoggedOutOpts:signUp")}
        </NavDropdown.Item>
      </Link>
    </div>
  );
}
