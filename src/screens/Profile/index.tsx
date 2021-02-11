import React, { useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "configs/UserContext";
import Header from "./components/Header";
import InfoForm from "./components/InfoForm";
import ProfilePicture from "./components/ProfilePicture";

function Profile() {
  const currentUser = useContext(UserContext);
  const [state, setState] = useState({
    lastInvoiceNumber: 0,
    name: "",
    email: "",
    ogPassword: "",
    newPassword: "",
    repeatPassword: "",
    logo: "",
  });

  console.log(currentUser);

  return (
    <Container>
      <Row className="h-100-minus align-items-center">
        <Col>
          <Header username="Nathan" enterprise="coso" />
          <Row>
            <ProfilePicture />
            <InfoForm />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
