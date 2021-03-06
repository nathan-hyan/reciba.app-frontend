import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import { notify } from "react-notify-toast";
import Axios from "axios";
import i18next from "i18next";
import io from "socket.io-client";
import { endpoints } from "constants/endpoints";
import { Invoice } from "interfaces/invoice";
import { faShare, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadModal from "./components/DownloadModal";

const SignaturePad = require("react-signature-pad");

let socket: SocketIOClient.Socket;

export default function Signature() {
  const history = useHistory();
  const signatureRef: any = useRef();
  const { socketId, invoiceId } = useParams<
    Partial<{
      socketId: string;
      invoiceId: string;
    }>
  >();
  const [showModal, setShowModal] = useState(false);
  const [PDFFile, setPDFFile] = useState("");
  const [state, setState] = useState<Partial<Invoice>>({});

  useEffect(() => {
    if (socketId) {
      socket = io(endpoints.backend);
      socket.emit("join", socketId);
      socket.emit("close", false);

      socket.on("pdf", (file: string) => {
        setPDFFile(file);
        showDeleteModal();
      });
    } else if (invoiceId) {
      Axios.get(`${endpoints.backend}api/invoice/single/${invoiceId}`)
        .then(({ data }) => {
          if (data.success) {
            setState(data.data);
          }
        })
        // eslint-disable-next-line no-alert
        .catch((err: any) => alert(err.response.data.message));
    }

    return () => {
      if (socketId) {
        socket.off("pdf");
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoints.backend]);

  const sendSign = () => {
    if (socketId) {
      socket.emit("sign", signatureRef.current.toDataURL());
    }
  };

  const showDeleteModal = () => {
    setShowModal(!showModal);
  };

  const submitSignature = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`${i18next.t("Signature:confirm")} ${state.from}?`)) {
      Axios.put(`${endpoints.backend}api/invoice/addSignature/${invoiceId}`, {
        ...state,
        sign: signatureRef.current.toDataURL(),
      })
        .then((response) => {
          notify.show(i18next.t("Signature:success"), "success");
          history.push(`/thankYou/${response.data.id}`);
        })
        .catch((err) => {
          const ERROR = err.response ? err.response.data.message : err.message;
          notify.show(ERROR, "error");
        });
    }
  };

  return (
    <Container className="h-100-minus mt-5">
      <DownloadModal
        PDFFile={PDFFile}
        show={showModal}
        handleClose={showDeleteModal}
      />
      <Row className={invoiceId ? "d-block" : "d-none"}>
        <Col className="text-center">
          <h1>{i18next.t("Signature:greeting")}</h1>

          <p>
            {i18next.t("Signature:received")} <strong>{state.from}</strong>{" "}
            {i18next.t("Signature:concept")} <strong>{state.concept}</strong>{" "}
            {i18next.t("Signature:amount")}{" "}
            <strong>
              {state.currency} {state.amount}
            </strong>
          </p>

          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p className="lead m-0">{i18next.t("Signature:sign")}</p>
          <small className="text-muted">
            {i18next.t("Signature:horizontal")}
          </small>
        </Col>
      </Row>
      <Row className="my-5">
        <Col
          onTouchEnd={sendSign}
          onMouseUp={sendSign}
          className="bg-white shadow rounded"
        >
          <SignaturePad ref={signatureRef} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="w-100"
            variant="danger"
            onClick={() => {
              signatureRef.current.clear();
              sendSign();
            }}
          >
            <FontAwesomeIcon icon={faTimesCircle} />{" "}
            {i18next.t("Signature:reset")}
          </Button>
        </Col>
        <Col className={invoiceId ? "d-block" : "d-none"}>
          <Button className="w-100" variant="success" onClick={submitSignature}>
            <FontAwesomeIcon icon={faShare} /> {i18next.t("Signature:send")}
          </Button>
        </Col>
      </Row>
      <Row className={socketId ? "d-block my-5 text-center" : "d-none"}>
        <Col>
          <p className="lead">{i18next.t("Signature:alert")}</p>
          <p>{i18next.t("Signature:alertBody")} </p>
        </Col>
      </Row>
    </Container>
  );
}
