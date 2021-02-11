import React from "react";
import { Col, Row } from "react-bootstrap";
import ButtonWithIcon from "components/ButtonWithIcon";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import i18next from "i18next";

interface Props {
  username: string;
  enterprise: string;
}

export default function Header({ username, enterprise }: Props) {
  return (
    <Row className="mb-5">
      <Col className="d-flex flex-row align-items-center">
        <h1>{username}</h1> <small className="ml-3">({enterprise})</small>
      </Col>
      <Col className="text-right">
        <ButtonWithIcon
          icon={faRedoAlt}
          label={i18next.t("ProfilePage:resetCounter")}
        />
      </Col>
    </Row>
  );
}
