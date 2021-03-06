import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import InfoForm from "./components/InfoForm";
import ProfilePicture from "./components/ProfilePicture";
import { IMG } from "./components/ProfilePicture/constants";

interface Props {
  lastInvoiceNumber: number;
  name: string;
  enterprise: string;
  email: string;
  ogPassword: string;
  newPassword: string;
  repeatPassword: string;
  logo: string;
}

function Profile() {
  const [state, setState] = useState<Partial<Props>>({
    lastInvoiceNumber: 0,
    name: "",
    enterprise: "",
    email: "",
    ogPassword: "",
    newPassword: "",
    repeatPassword: "",
    logo: IMG,
  });

  const handleLogoChange = (logo: string) => {
    setState({ ...state, logo });
  };

  const handleInfoChange = (data: { name?: string; email?: string }) => {
    setState({ ...state, ...data });
  };

  useEffect(() => {
    setState({
      lastInvoiceNumber: 1,
      name: "Cacho",
      email: "test@test.com",
      ogPassword:
        "$2a$10$QAt8cy/7clre9o0x0nZ5rOiqqKtuFPbw1cXIg.FRqdskFqqUWJk9O",
    });
  }, []);

  return (
    <Container>
      <Row className="h-100-minus align-items-center">
        <Col>
          <Header username={state.name!} enterprise={state.enterprise} />
          <Row>
            <ProfilePicture
              handleLogoChange={handleLogoChange}
              currentLogo={state.logo!}
            />
            <InfoForm
              handleChange={handleInfoChange}
              currentData={{ name: state.name!, email: state.email! }}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
