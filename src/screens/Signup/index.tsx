import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { notify } from "react-notify-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import i18next from "i18next";
import { UserContext } from "configs/UserContext";
import { endpoints } from "constants/endpoints";
import { Fields, FIELDS } from "./constants";

export default function Signup() {
  const history = useHistory();
  const user = useContext(UserContext);

  const [state, setState] = useState<Fields>({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    token: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const captcha = useRef<any>();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: {
    preventDefault: () => void;
    currentTarget: any;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    if (!state.token) {
      e.stopPropagation();
      notify.show(i18next.t("Signup:invalidToken"), "error");
    } else if (form.checkValidity() === false) {
      e.stopPropagation();
      notify.show(i18next.t("Signup:verifyForm"), "error");
    } else {
      e.stopPropagation();
      Axios.post(`${endpoints.backend}api/user/register`, {
        email: state.email,
        password: state.password,
        name: state.name,
        token: state.token,
      })
        .then((response) => {
          if (response.data.success) {
            Axios.post(`${endpoints.backend}api/user/login`, {
              email: state.email,
              password: state.password,
            })
              .then(({ data }) => {
                if (data.success) {
                  captcha.current.resetCaptcha();
                  user.setUserData({
                    isLoggedIn: true,
                    token: data.data.token,
                    name: data.data.name,
                  });
                  localStorage.setItem("bill-token", data.data.token);
                  notify.show(`${data.message}`, "success");
                  setIsLoading(false);

                  history.push("/");
                } else {
                  notify.show(i18next.t("Signup:error"), "error");
                  setIsLoading(false);
                }
              })
              .catch((err) => {
                notify.show(`${err.response.data.message}`, "error");
                setIsLoading(false);
              });
          } else {
            notify.show(`Error: ${response.data.message}`, "error");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          try {
            notify.show(`${err.response.data.message}`, "error");
            setIsLoading(false);
          } catch (error) {
            notify.show(`${error.message}`, "error");
            setIsLoading(false);
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
          <h1>{i18next.t("Signup:title")}</h1>
          <p className="lead">{i18next.t("Signup:body")}</p>
        </Col>
        <Col className="bg-light shadow p-3 rounded">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {FIELDS.map((field) => (
              <Form.Group key={field.id}>
                <Form.Label htmlFor={field.name}>
                  {i18next.t(`Signup:${field.name}`)}
                </Form.Label>
                <Form.Control
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                  value={state[field.name]}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {i18next.t(`Signup:${field.name}Validation`)}
                </Form.Control.Feedback>
              </Form.Group>
            ))}
            <Form.Group data-testid="testing">
              <Form.Label htmlFor="captcha">Captcha!</Form.Label>
              <HCaptcha
                ref={captcha}
                sitekey={endpoints.siteKey}
                onVerify={(token: string) => setState({ ...state, token })}
                onExpire={() => setState({ ...state, token: "" })}
              />
            </Form.Group>

            <Button disabled={isLoading} variant="primary" type="submit">
              {isLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <FontAwesomeIcon icon={faCheck} />
              )}{" "}
              {i18next.t("Signup:save")}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
