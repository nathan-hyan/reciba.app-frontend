import React from 'react';
import QRCode from 'qrcode.react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { endpoints } from 'constants/endpoint';
import i18next from 'i18next';
import styles from './styles.module.scss';

export default function ShowQRCodeModal({
  show = true,
  onHide = () => {
    const newShow = !show;
    return newShow;
  },
  currentId = 'Error',
}: {
  show: boolean;
  onHide: () => void;
  currentId: string;
}) {
  return (
    <Modal size="xl" show={show} onHide={onHide}>
      <Modal.Body>
        <Row>
          <Col>
            <p className="lead text-center">{i18next.t('QR:body')}</p>
          </Col>
        </Row>
        <Row className="my-5 d-flex align-items-center justify-content-center">
          <Col />
          <Col
            className={`${styles.qrcode} w-auto qrcode bg-white shadow rounded p-3 text-center`}
          >
            <QRCode
              size={200}
              value={`${endpoints.frontend}#/signature/${currentId}`}
            />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col className="text-center">
            <small>
              {i18next.t('QR:alternative')}{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href={`${endpoints.frontend}#/signature/${currentId}`}
              >
                {`${endpoints.frontend}#/signature/${currentId}`}
              </a>
            </small>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="lead">{i18next.t('QR:finishing')} </p>
            <Button onClick={onHide}>
              <FontAwesomeIcon icon={faTimesCircle} /> {i18next.t('QR:close')}
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
