import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18next from 'i18next';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function OptionsLoggedOut() {
  return (
    <Nav className="mr-auto">
      <Link className="text-light mr-3 text-decoration-none" to="/">
        <FontAwesomeIcon icon={faHome} /> {i18next.t('LoggedInOpts:home')}
      </Link>
    </Nav>
  );
}
