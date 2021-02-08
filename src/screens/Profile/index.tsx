import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import InfoForm from "./components/InfoForm";

function Profile() {
  const [state, setState] = useState({
    lastInvoiceNumber: 0,
    name: "",
    email: "",
    ogPassword: "",
    newPassword: "",
    repeatPassword: "",
    logo: "",
  });

  return (
    <Container>
      <Row className="h-100-minus align-items-center">
        <Col>
          <Header />
          <Row>
            <InfoForm />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
