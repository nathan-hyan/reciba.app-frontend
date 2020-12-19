import { faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { notify } from 'react-notify-toast';
import { endpoints } from '../../../../constants/endpoint';

export default function TagsModal({
  show,
  handleClose,
  invoiceId,
  prevTags,
  refreshData,
}: {
  show: boolean;
  invoiceId: string;
  handleClose: () => void;
  refreshData: () => void;
  prevTags?: string[];
}) {
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (prevTags !== []) {
      setTags(prevTags ? prevTags.toString() : '');
    }

    // eslint-disable-next-line
  }, [invoiceId]);

  const saveTags = (items: string[]) => {
    if (invoiceId === '') {
      throw Error('No hay invoice id especificado');
    }
    Axios.put(
      `${endpoints.backend}api/invoice/edit/${invoiceId}`,
      { tags: items },
      {
        headers: { auth: localStorage.getItem('bill-token') },
      }
    )
      .then(({ data }) => {
        notify.show('Datos guardados', 'success');
        refreshData();
        handleClose();
      })
      .catch((err) => {
        notify.show(err.message, 'error');
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const arrayFromString = tags.split(',');
    const processedArray = [];
    for (const item of arrayFromString) {
      processedArray.push(item.trim());
    }

    saveTags(processedArray);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{i18next.t('Tags:title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{i18next.t('Tags:label')}</Form.Label>
            <Form.Control
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder={i18next.t('Tags:placeholder')}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimesCircle} /> {i18next.t('Tags:close')}
          </Button>
          <Button variant="primary" type="submit">
            <FontAwesomeIcon icon={faSave} /> {i18next.t('Tags:save')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
