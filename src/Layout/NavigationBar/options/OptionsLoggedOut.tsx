import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OptionsLoggedOut() {
  return (
    <Nav className="mr-auto">
      <Link className="text-light mr-3 text-decoration-none" to="/">
        <FontAwesomeIcon icon={faHome} /> Principal
      </Link>
    </Nav>
  );
}
