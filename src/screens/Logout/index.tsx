import i18next from "i18next";
import React, { useContext, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "configs/UserContext";

export default function Logout() {
  const User = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("bill-token");
    User.setUserData({
      isLoggedIn: false,
      level: 9,
      token: "",
      name: "",
    });

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row className="h-100-minus align-items-center">
        <Col className="text-center">
          <h1>
            {i18next.t("Logout:title")}{" "}
            <span role="img" aria-label="sad">
              😢
            </span>
          </h1>
          <p> {i18next.t("Logout:body")}</p>
          <Button className="mt-5" onClick={() => history.push("/")}>
            {i18next.t("Logout:goBack")}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
