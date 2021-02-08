import React from "react";
import { Col, Row } from "react-bootstrap";
import ButtonWithIcon from "components/ButtonWithIcon";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <Row>
      <Col className="d-flex flex-row align-items-center">
        <h1>Bienvenid@</h1> <small className="ml-3">Nombre de usuario</small>
      </Col>
      <Col className="text-right">
        <ButtonWithIcon icon={faRedoAlt} label="Reiniciar contador" />
      </Col>
    </Row>
  );
}
