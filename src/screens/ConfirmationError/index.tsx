import i18next from "i18next";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

function ConfirmationError() {
  const history = useHistory();
  const { errorType } = useParams<{ errorType: "invalid" | "novalidated" }>();

  return (
    <Container>
      <Row className="h-100-minus d-flex align-items-center justify-content-center">
        <Col className="text-center bg-white shadow rounded p-5">
          <h1 className="display-4 mb-5">¡Hey!</h1>
          <p className="lead">
            {errorType === "invalid"
              ? i18next.t("ConfirmError:bigInvalidText")
              : i18next.t("ConfirmError:bigNoValidatedText")}
            <span role="img" aria-labelledby="thunk">
              🤔
            </span>
          </p>
          <small>
            {errorType === "invalid"
              ? i18next.t("ConfirmError:smallInvalidText")
              : i18next.t("ConfirmError:smallNoValidatedText")}
            <span role="img" aria-labelledby="party">
              🎉
            </span>
          </small>
          <br />
          <Button
            onClick={() => history.push("/login")}
            variant="primary"
            className="mt-5"
          >
            {i18next.t("ConfirmError:login")}{" "}
          </Button>
        </Col>{" "}
      </Row>
    </Container>
  );
}

export default ConfirmationError;
