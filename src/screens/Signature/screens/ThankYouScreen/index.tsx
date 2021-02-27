import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

function ThankYouScreen() {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const redirectToSign = () => {
    history.push(`/invoice/display/${id}/no`);
  };

  return (
    <Container className="h-100-minus mt-5 d-flex flex-column justify-content-center align-items-center gap">
      <h1 className="display-4">{i18next.t("thankYouScreen:title")}</h1>
      <p className="lead">{i18next.t("thankYouScreen:subtitle")}</p>

      <Button onClick={redirectToSign}>
        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />{" "}
        {i18next.t("thankYouScreen:copy")}
      </Button>
    </Container>
  );
}

export default ThankYouScreen;
