import i18next from "i18next";
import React, { useContext, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "configs/UserContext";
import { useQuery } from "utils/useQuery";

export default function Logout() {
  const User = useContext(UserContext);
  const history = useHistory();
  const query = useQuery();

  const type = query.get("type") === "changedemail";

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
            {type
              ? i18next.t("Logout:changedEmail")
              : i18next.t("Logout:title")}{" "}
            <span role="img" aria-label="sad">
              {type ? `😄` : `😢`}
            </span>
          </h1>
          <p>
            {type
              ? i18next.t("Logout:changedEmailBody")
              : i18next.t("Logout:body")}
          </p>
          <Button className="mt-5" onClick={() => history.push("/")}>
            {i18next.t("Logout:goBack")}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
