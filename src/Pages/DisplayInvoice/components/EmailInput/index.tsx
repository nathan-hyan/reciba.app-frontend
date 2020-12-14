import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18next from 'i18next';
import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

export default function EmailInput({
  sendEmail,
  setRecipient,
  recipient,
  validated,
}: {
  sendEmail: (e: any) => void;
  setRecipient: (e: any) => void;
  recipient: string;
  validated: boolean;
}) {
  return (
    <Col className="px-5 py-3 bg-white shadow rounded">
      <Form noValidate onSubmit={sendEmail} validated={validated}>
        <Form.Group>
          <Form.Label>{i18next.t('EmailInput:title')}</Form.Label>
          <Form.Control
            type="email"
            value={recipient}
            onChange={setRecipient}
            placeholder={i18next.t('EmailInput:placeholder')}
            required
          />
          <Form.Control.Feedback type="invalid">
            {i18next.t('EmailInput:error')}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} /> {i18next.t('EmailInput:send')}
        </Button>
      </Form>
    </Col>
  );
}
