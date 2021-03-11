import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Container, Form, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { notify } from "react-notify-toast";
import Axios from "axios";
import i18next from "i18next";
import { Fields } from "screens/Signup/constants";
import { UserContext } from "configs/UserContext";
import { endpoints } from "constants/endpoints";
import { FIELDS } from "./constants";

export default function Login() {
  const { setUserData } = useContext(UserContext);
  const [login, setLogin] = useState<Fields>({ email: "", password: "" });
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      notify.show(i18next.t("Login:verifyData"), "error");
      setIsLoading(false);
    } else {
      event.stopPropagation();
      Axios.post(`${endpoints.backend}api/user/login`, login)
        .then(({ data }) => {
          if (data.success && data.confirmed) {
            setUserData({
              isLoggedIn: true,
              token: data.data.token,
              name: data.data.name,
              id: data.data._id,
            });
            localStorage.setItem("bill-token", data.data.token);
            notify.show(`${data.message}`, "success");
            setIsLoading(false);

            history.push("/");
          } else if (!data.confirmed) {
            history.push(`/confirmError/novalidated`);
          } else {
            notify.show(i18next.t("Login:error"), "error");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          const error = err.response ? err.response.data.message : err.message;
          notify.show(`${error}`, "error");
          setIsLoading(false);
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
            {FIELDS.map((field) => (
              <Form.Group key={field.id}>
                <Form.Label htmlFor={field.name}>
                  {i18next.t(`Login:${field.name}`)}
                </Form.Label>
                <Form.Control
                  id={field.name}
                  type={field.name}
                  name={field.name}
                  value={login[field.name]}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {i18next.t(`Login:${field.name}Validation`)}
                </Form.Control.Feedback>
              </Form.Group>
            ))}

            <Button disabled={isLoading} variant="primary" type="submit">
              {isLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <FontAwesomeIcon icon={faCheckCircle} />
              )}{" "}
              {i18next.t("Login:login")}
            </Button>
          </Form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
