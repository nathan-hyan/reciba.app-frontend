import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../Context/UserContext";
import UsermenuLoggedIn from "./userMenu/UsermenuLoggedIn";
import UsermenuLoggedOut from "./userMenu/UsermenuLoggedOut";
import OptionsLoggedIn from "./options/OptionsLoggedIn";
import OptionsLoggedOut from "./options/OptionsLoggedOut";
import { Link } from "react-router-dom";

export default function Navigation() {
  const user = useContext(UserContext);

  return (
    <>
      <Navbar
        fixed="top"
        style={{ zIndex: 999 }}
        bg="primary"
        variant="dark"
        expand="lg"
      >
        <Link to="/">
          <Navbar.Brand>Proyecto Bills</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {!user.isLoggedIn ? <OptionsLoggedOut /> : <OptionsLoggedIn />}
          <Nav className="ml-auto">
            <NavDropdown
              title={`Usuario actual: ${
                user.isLoggedIn ? user.name : "invitado"
              }`}
              id="collasible-nav-dropdown"
            >
              {!user.isLoggedIn ? <UsermenuLoggedOut /> : <UsermenuLoggedIn />}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ height: 35 }} />
    </>
  );
}
