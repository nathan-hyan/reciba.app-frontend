import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import { notify } from 'react-notify-toast';
// import HCaptcha from '@hcaptcha/react-hcaptcha';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import i18next from 'i18next';
import { UserContext } from '../../Context/UserContext';
import { endpoints } from '../../constants/endpoint';

export default function Signup() {
  const history = useHistory();
  const user = useContext(UserContext);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: {
    preventDefault: () => void;
    currentTarget: any;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      notify.show(i18next.t('Signup:verifyForm'), 'error');
    } else {
      e.stopPropagation();
      Axios.post(`${endpoints.backend}api/user/register`, {
        email: state.email,
        password: state.password,
        name: state.name,
      })
        .then((response) => {
          if (response.data.success) {
            Axios.post(`${endpoints.backend}api/user/login`, {
              email: state.email,
              password: state.password,
            })
              .then(({ data }) => {
                if (data.success) {
                  user.setUserData({
                    isLoggedIn: true,
                    token: data.data.token,
                    name: data.data.name,
                  });
                  localStorage.setItem('bill-token', data.data.token);
                  notify.show(`${data.message}`, 'success');
                  history.push('/');
                } else {
                  notify.show(i18next.t('Signup:error'), 'error');
                }
              })
              .catch((err) => {
                notify.show(`${err.response.data.message}`, 'error');
              });
          } else {
            notify.show(`Error: ${response.data.message}`, 'error');
          }
        })
        .catch((err) => {
          try {
            notify.show(`${err.response.data.message}`, 'error');
          } catch (error) {
            notify.show(`${error.message}`, 'error');
          }
        });
    }

    setValidated(true);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Container>
      <Row className="h-100-minus align-items-center">
        <Col>
          <h1>{i18next.t('Signup:title')}</h1>
          <p className="lead">{i18next.t('Signup:body')}</p>
        </Col>
        <Col className="bg-light shadow p-3 rounded">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>{i18next.t('Signup:name')}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                value={state.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                {i18next.t('Signup:nameValidation')}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>{i18next.t('Signup:email')}</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={state.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                {i18next.t('Signup:emailValidation')}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>{i18next.t('Signup:password')}</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={state.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {i18next.t('Signup:passwordValidation')}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>
                    {i18next.t('Signup:passwordConfirmation')}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="repeatPassword"
                    onChange={handleChange}
                    value={state.repeatPassword}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {i18next.t('Signup:PasswordConfirmationValidation')}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Captcha!</Form.Label>
              <HCaptcha
                sitekey="be3fd67b-1a61-4936-b57f-600e3765988f"
                onVerify={(token) => {}}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faCheck} /> {i18next.t('Signup:save')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
