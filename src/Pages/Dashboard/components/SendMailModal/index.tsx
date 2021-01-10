import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { endpoints } from 'constants/endpoint';
import { notify } from 'react-notify-toast';
import i18next from 'i18next';

interface Props {
  resetData: () => void;
  show: boolean;
  data: {
    invoice: string;
    from: string;
  };
}

function SendMailModal({ resetData, show, data }: Props) {
  const [email, setEmail] = useState('');
  const [isSendingMail, setIsSendingMail] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSendingMail(true);

    if (email === '') {
      notify.show(i18next.t('Mail:noValue'), 'error');
      setIsSendingMail(false);
    } else {
      Axios.post(`${endpoints.backend}api/mail/send/signaturePetition/`, {
        invoiceId: data.invoice,
        from: data.from,
        to: email,
      })
        .then((response) => {
          if (response.data.success) {
            notify.show(response.data.message, 'success');
            setIsSendingMail(false);
            setEmail('');
            resetData();
          } else {
            notify.show(response.data.message, 'warning');
            setIsSendingMail(false);
          }
        })
        .catch(() => {
          notify.show(i18next.t('Mail:cantSend'), 'error');
          setIsSendingMail(false);
        });
    }
  };

  return (
    <Modal
      size="xl"
      show={show}
      onHide={() => {
        resetData();
        setEmail('');
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{i18next.t('Mail:title')}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{i18next.t('Mail:address')}:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="d-none d-sm-block text-muted">
              {i18next.t('Mail:linkText')}:{' '}
              <a
                href={`${endpoints.frontend}#/offlinesignature/${data.invoice}`}
              >
                {`${endpoints.frontend}#/offlinesignature/${data.invoice}`}
              </a>
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={isSendingMail}
            onClick={() => {
              resetData();
              setEmail('');
            }}
            variant="secondary"
          >
            <FontAwesomeIcon icon={faTimesCircle} /> {i18next.t('Mail:close')}
          </Button>
          <Button disabled={isSendingMail} type="submit" variant="primary">
            <FontAwesomeIcon icon={faPaperPlane} />{' '}
            {isSendingMail ? i18next.t('Mail:loading') : i18next.t('Mail:send')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default SendMailModal;
