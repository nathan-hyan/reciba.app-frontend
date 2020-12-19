import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { UserContext } from '../../Context/UserContext';
import UsermenuLoggedIn from './userMenu/UsermenuLoggedIn';
import UsermenuLoggedOut from './userMenu/UsermenuLoggedOut';
import OptionsLoggedIn from './options/OptionsLoggedIn';
import OptionsLoggedOut from './options/OptionsLoggedOut';

export default function Navigation({
  changeLang,
}: {
  changeLang: (e: 'en' | 'es') => void;
}) {
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
            <div className="mr-3">
              <Button type="button" onClick={() => changeLang('es')}>
                <img
                  src="https://cdn.countryflags.com/thumbs/spain/flag-400.png"
                  alt="spanish"
                  width="15"
                />{' '}
                ES
              </Button>
              <Button type="button" onClick={() => changeLang('en')}>
                <img
                  src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
                  alt="english"
                  height="10"
                />{' '}
                EN
              </Button>
            </div>
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
