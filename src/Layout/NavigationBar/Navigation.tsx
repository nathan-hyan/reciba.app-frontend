import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { UserContext } from '../../Context/UserContext';
import UsermenuLoggedIn from './userMenu/UsermenuLoggedIn';
import UsermenuLoggedOut from './userMenu/UsermenuLoggedOut';
import OptionsLoggedIn from './options/OptionsLoggedIn';
import OptionsLoggedOut from './options/OptionsLoggedOut';

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
          <Navbar.Brand>reciba.app</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {!user.isLoggedIn ? <OptionsLoggedOut /> : <OptionsLoggedIn />}
          <Nav className="ml-auto">
            <NavDropdown
              title={`${i18next.t('NavBar:actualUser')}: ${
                user.isLoggedIn ? user.name : i18next.t('NavBar:guest')
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
