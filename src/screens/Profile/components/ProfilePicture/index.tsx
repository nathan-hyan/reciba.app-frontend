import { faUpload } from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon from "components/ButtonWithIcon";
import i18next from "i18next";
import React from "react";
import { Col, Image } from "react-bootstrap";

export default function index() {
  return (
    <Col className="bg-white rounded shadow p-5 d-flex flex-column align-items-center">
      <Image
        src="https://picsum.photos/200/200"
        roundedCircle
        height="200"
        width="200"
      />
      <p className="lead mt-3 mb-0">{i18next.t("ProfilePage:logoTitle")}</p>
      <small>{i18next.t("ProfilePage:logoDescription")}</small>
      <ButtonWithIcon
        className="mt-5"
        label={i18next.t("ProfilePage:change")}
        icon={faUpload}
      />
    </Col>
  );
}
