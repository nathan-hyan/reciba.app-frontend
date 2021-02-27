import {
  faEnvelope,
  faFileDownload,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import React from "react";
import { Col, Button } from "react-bootstrap";

export default function ButtonsGroup({
  exportPDFToFile,
  transformPDFToBase64,
  toggleEmailInput,
  hasSocketId,
}: {
  exportPDFToFile: () => void;
  transformPDFToBase64: () => void;
  toggleEmailInput: () => void;
  hasSocketId?: boolean;
}) {
  return (
    <Col className="p-3 bg-light text-center shadow rounded">
      <Button className="mx-2" onClick={exportPDFToFile}>
        <FontAwesomeIcon icon={faFileDownload} />{" "}
        {i18next.t("Buttons:download")}
      </Button>
      {!hasSocketId && (
        <Button className="mx-2" onClick={transformPDFToBase64}>
          <FontAwesomeIcon icon={faPhone} /> {i18next.t("Buttons:sendToPhone")}
        </Button>
      )}
      <Button onClick={toggleEmailInput} className="mx-2">
        <FontAwesomeIcon icon={faEnvelope} /> {i18next.t("Buttons:sendToMail")}
      </Button>
    </Col>
  );
}
