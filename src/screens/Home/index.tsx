import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import i18next from "i18next";

export default function Home() {
  return (
    <Container>
      <Row className="h-100-minus align-items-center text-center text-md-left">
        <Col>
          <h1>
            {i18next.t("Home:title")}{" "}
            <span role="img" aria-label="Page">
              📃
            </span>
          </h1>

          <p className="lead">{i18next.t("Home:body")}</p>

          <Link to="/invoice/generate">
            <Button>
              <FontAwesomeIcon icon={faLink} /> {i18next.t("Home:startNow")}
            </Button>
          </Link>
        </Col>

        <Col className="text-right d-none d-md-block">
          <h6>{i18next.t("Home:currentTime")}:</h6>
          <h3>{moment().format("MMMM Do YYYY, h:mm:ss a")}</h3>
        </Col>
      </Row>
    </Container>
  );
}
