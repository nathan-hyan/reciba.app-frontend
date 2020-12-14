import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18next from 'i18next';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function DownloadModal({
  show,
  handleClose,
  PDFFile,
}: {
  show: boolean;
  handleClose: () => void;
  PDFFile: string;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{i18next.t('DownloadModal:title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{i18next.t('DownloadModal:body')} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimesCircle} />{' '}
          {i18next.t('DownloadModal:ignore')}
        </Button>
        <a download="Comprobante.pdf" href={PDFFile}>
          <Button>
            <FontAwesomeIcon icon={faDownload} />{' '}
            {i18next.t('DownloadModal:download')}
          </Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
}
