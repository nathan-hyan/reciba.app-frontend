import i18next from "i18next";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Props {
  text?: string;
}

export default function LoadingScreen({
  text = i18next.t("LoadingScreen:text"),
}: Props) {
  return (
    <Container>
      <Row className="h-100-minus">
        <Col />
        <Col md={2} className="my-auto shadow bg-light rounded py-4">
          <div className="m-auto" style={{ width: "4rem", height: "4rem" }}>
            <div className="spinner" />
          </div>
          <h1 className="mt-3 lead text-gray text-center">{text}...</h1>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
