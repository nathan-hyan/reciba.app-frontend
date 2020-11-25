import { faColumns, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OptionsLoggedIn() {
  return (
    <Nav className="mr-auto">
      <Link className="text-light mr-3 text-decoration-none" to="/">
        <FontAwesomeIcon icon={faHome} /> Principal
      </Link>
      <Link
        className="text-light mr-3 text-decoration-none"
        to="/invoice/generate"
      >
        <FontAwesomeIcon icon={faPlus} /> Crear nueva boleta
      </Link>
      <Link className="text-light mr-3 text-decoration-none" to="/dashboard">
        <FontAwesomeIcon icon={faColumns} /> Dashboard
      </Link>
    </Nav>
  );
}
