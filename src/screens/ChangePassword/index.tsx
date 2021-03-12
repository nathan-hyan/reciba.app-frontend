/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { UserContext } from "configs/UserContext";
import { endpoints } from "constants/endpoints";
import { getHeaders } from "constants/headers";
import i18next from "i18next";
import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { notify } from "react-notify-toast";
import { useHistory } from "react-router";
import { Fields } from "screens/Signup/constants";
import { FIELDS } from "./constants";

interface HandleChangeProps {
  target: { name: string; value: string };
}

export default function ChangePassword() {
  const { id } = useContext(UserContext);
  const history = useHistory();

  const [submit, setSubmit] = useState<Fields>({
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: HandleChangeProps) => {
    const { name, value } = e.target;

    setSubmit({ ...submit, [name]: value });
  };

  const onSubmit = (e: {
    stopPropagation: () => void;
    preventDefault: () => void;
    currentTarget: any;
  }) => {
    e.preventDefault();
    setValidated(true);
    setIsLoading(true);

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      notify.show(i18next.t("Login:verifyData"), "error");
      setIsLoading(false);
    } else if (submit.newPassword !== submit.repeatNewPassword) {
      notify.show(i18next.t("ChangePassword:dontMatch", "warning"));
    } else if (confirm(i18next.t("ChangePassword:confirm"))) {
      axios
        .put(
          `${endpoints.backend}api/user/changePassword/${id}`,
          submit,
          getHeaders()
        )
        .then((response) => {
          history.push("/logout?type=changedpassword");
          setIsLoading(false);
        })
        .catch((err) => {
          notify.show(err.response.data.message || err.message, "error");
          setIsLoading(false);
        });
    }
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
                  {i18next.t(`ChangePassword:${field.name}`)}
                </Form.Label>
                <Form.Control
                  id={field.name}
                  type="password"
                  name={field.name}
                  value={submit[field.name]}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {i18next.t(`ChangePassword:${field.name}Validation`)}
                </Form.Control.Feedback>
              </Form.Group>
            ))}

            <Button disabled={isLoading} variant="primary" type="submit">
              {isLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <FontAwesomeIcon icon={faCheckCircle} />
              )}{" "}
              {i18next.t("ChangePassword:submit")}
            </Button>
          </Form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
