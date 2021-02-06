import { faColumns, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OptionsLoggedIn() {
  return (
    <Nav className="mr-auto">
      <Link className="text-light mr-3 text-decoration-none" to="/">
        <FontAwesomeIcon icon={faHome} /> {i18next.t("LoggedInOpts:home")}
      </Link>
      <Link
        className="text-light mr-3 text-decoration-none"
        to="/invoice/generate"
      >
        <FontAwesomeIcon icon={faPlus} /> {i18next.t("LoggedInOpts:newInvoice")}
      </Link>
      <Link className="text-light mr-3 text-decoration-none" to="/dashboard">
        <FontAwesomeIcon icon={faColumns} />{" "}
        {i18next.t("LoggedInOpts:dashboard")}
      </Link>
    </Nav>
  );
}
