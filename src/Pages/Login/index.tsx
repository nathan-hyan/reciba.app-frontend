import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { notify } from 'react-notify-toast';
import Axios from 'axios';
import i18next from 'i18next';
import { UserContext } from '../../Context/UserContext';
import { endpoints } from '../../constants/endpoint';

export default function Login() {
  const User = useContext(UserContext);
  const [login, setLogin] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  /**
   * Maneja el estado correspondiente a cada input
   *
   * @param e Input
   */
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  /**
   * Envía los datos al servidor para guardar
   *
   * @param event Formulario
   */
  const onSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      notify.show(i18next.t('Login:verifyData'), 'error');
    } else {
      event.stopPropagation();
      Axios.post(`${endpoints.backend}api/user/login`, login)
        .then(({ data }) => {
          if (data.success) {
            User.setUserData({
              isLoggedIn: true,
              token: data.data.token,
              name: data.data.name,
            });
            localStorage.setItem('bill-token', data.data.token);
            notify.show(`${data.message}`, 'success');
            history.push('/');
          } else {
            notify.show(i18next.t('Login:error'), 'error');
          }
        })
        .catch((err) => {
          const error = err.response ? err.response.data.message : err.message;
          notify.show(`${error}`, 'error');
        });
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="h-100-minus align-items-center">
        <Col />
        <Col md={6} sm={12} className="shadow rounded bg-light p-3">
          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <Form.Group>
              <Form.Label>{i18next.t('Login:email')}</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={login.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                {i18next.t('Login:emailValidation')}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>{i18next.t('Login:password')}</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={login.password}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                {i18next.t('Login:passwordValidation')}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faCheckCircle} />{' '}
              {i18next.t('Login:login')}
            </Button>
          </Form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
