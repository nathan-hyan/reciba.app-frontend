import { faUserEdit, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UsermenuLoggedIn() {
  return (
    <div>
      <NavDropdown.Item>
        <Link className="text-dark text-decoration-none" to="/profile">
          <FontAwesomeIcon icon={faUserEdit} className="mr-1" />{" "}
          {i18next.t("LoggedInOpts:profile")}
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link className="text-dark text-decoration-none" to="/logout">
          <FontAwesomeIcon icon={faDoorOpen} className="mr-1" />{" "}
          {i18next.t("LoggedInOpts:closeSession")}
        </Link>
      </NavDropdown.Item>
    </div>
  );
}
