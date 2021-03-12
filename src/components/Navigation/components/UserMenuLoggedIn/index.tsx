import { faUserEdit, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UsermenuLoggedIn() {
  return (
    <div>
      <Link to="/profile" className="text-decoration-none">
        <NavDropdown.Item as="div" className="text-dark">
          <FontAwesomeIcon icon={faUserEdit} className="mr-1" />{" "}
          {i18next.t("LoggedInOpts:profile")}
        </NavDropdown.Item>
      </Link>
      <Link to="/logout" className="text-decoration-none">
        <NavDropdown.Item as="div" className="text-dark">
          <FontAwesomeIcon icon={faDoorOpen} className="mr-1" />{" "}
          {i18next.t("LoggedInOpts:closeSession")}
        </NavDropdown.Item>
      </Link>
    </div>
  );
}
