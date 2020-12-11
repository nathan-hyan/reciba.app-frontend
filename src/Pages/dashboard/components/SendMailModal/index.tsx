import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { endpoints } from 'constants/endpoint';
import { notify } from 'react-notify-toast';

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
      notify.show('Debe especificar un mail válido', 'error');
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
        .catch((err) => {
          notify.show('Ocurrió un error enviando el mail, reintente', 'error');
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
        <Modal.Title>Enviar por mail</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Dirección de correo:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              También podés copiar este link y pasarle por privado:{' '}
              <a
                href={`${endpoints.frontend}#/offlinesignature/${data.invoice}`}
              >
                {`${endpoints.frontend}#/offlinesignature/${data.invoice}`}
              </a>
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={isSendingMail} variant="secondary">
            <FontAwesomeIcon icon={faTimesCircle} onClick={resetData} /> Cerrar
          </Button>
          <Button disabled={isSendingMail} type="submit" variant="primary">
            <FontAwesomeIcon icon={faPaperPlane} />{' '}
            {isSendingMail ? 'Espere un momento...' : 'Enviar'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default SendMailModal;
