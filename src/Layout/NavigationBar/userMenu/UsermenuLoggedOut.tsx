import { faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18next from 'i18next';
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UsermenuLoggedOut() {
  return (
    <div>
      <NavDropdown.Item>
        <Link className="text-dark text-decoration-none" to="/login">
          <FontAwesomeIcon icon={faUserCheck} className="mr-1" />{' '}
          {i18next.t('LoggedOutOpts:login')}
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link className="text-dark text-decoration-none" to="/signup">
          <FontAwesomeIcon icon={faUserPlus} className="mr-1" />{' '}
          {i18next.t('LoggedOutOpts:signUp')}
        </Link>
      </NavDropdown.Item>
    </div>
  );
}
