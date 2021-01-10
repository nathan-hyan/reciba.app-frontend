/* eslint-disable no-alert */
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faPaperPlane,
  faPen,
  faPrint,
  faTag,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  Badge,
  Col,
  ListGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import i18next from 'i18next';
import { Invoice, queryType } from '../../../../Interfaces/invoice';
import LoadingScreen from '../../../../Layout/LoadingScreen';
import TagsModal from '../TagsModal';
import { dateConverter } from '../../../../utils/dateConverter';
import SendMailModal from '../SendMailModal';

export default function InvoicesList({
  completed,
  pending,
  deleteBill,
  refreshData,
  isLoading,
}: {
  isLoading: boolean;
  completed: Invoice[];
  pending: Invoice[];
  deleteBill: (id: string | undefined) => void;
  refreshData: (query: queryType) => void;
}) {
  const history = useHistory();

  const [dataForSign, setDataForSign] = useState({ invoice: '', from: '' });
  const [showTagsModal, setShowTagsModal] = useState(false);
  const [tagData, setTagData] = useState<{ id: string; prevTags: string[] }>({
    id: '',
    prevTags: [],
  });

  const toggleTagsModal = (id = '', prevTags: string[] = []) => {
    setTagData({
      id,
      prevTags,
    });
    setShowTagsModal((prevState) => !prevState);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <SendMailModal
        resetData={() => {
          setDataForSign({ invoice: '', from: '' });
          refreshData({ from: '', to: '', tags: '' });
        }}
        show={dataForSign.invoice !== '' && dataForSign.from !== ''}
        data={dataForSign}
      />
      <TagsModal
        show={showTagsModal}
        handleClose={() => toggleTagsModal()}
        invoiceId={tagData.id}
        prevTags={tagData.prevTags}
        refreshData={() => refreshData({})}
      />
      <Col className="bg-white rounded shadow p-3 mb-3">
        <small className="text-muted">
          {`${i18next.t('Invoices:pending')} - ${pending.length}`}
        </small>
        <ListGroup>
          {pending.map((invoice) => (
            <ListGroup.Item key={Math.random()}>
              <Row>
                <Col md="2">
                  {moment(dateConverter(invoice.date)).format('L')}
                </Col>
                <Col>
                  {invoice.from}{' '}
                  <small>
                    ({invoice.currency} ${invoice.amount} -{' '}
                    {i18next.t(`Radio:${invoice.payment}`)})
                  </small>
                  {invoice.tags?.map((item: string) => (
                    <Badge key={Math.random()} variant="info" className="ml-1">
                      {item}
                    </Badge>
                  ))}{' '}
                  {invoice.alreadySent?.isAlreadySent ? (
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="mail-already-sent">
                          {`${i18next.t('Invoices:mail')}: ${
                            invoice.alreadySent?.emailAddress
                          }`}
                        </Tooltip>
                      }
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: '#6DB65B' }}
                      />
                    </OverlayTrigger>
                  ) : null}
                </Col>
                <Col md="2" className="text-right text-primary">
                  <FontAwesomeIcon
                    icon={faTag}
                    className="pointer"
                    onClick={() => toggleTagsModal(invoice._id, invoice.tags)}
                  />
                  <FontAwesomeIcon
                    onClick={() =>
                      history.push(`/invoice/edit/${invoice._id}/`)
                    }
                    className="pointer mx-3"
                    icon={faPen}
                  />
                  <FontAwesomeIcon
                    onClick={() => deleteBill(invoice._id)}
                    className="pointer mr-3"
                    icon={faTrash}
                  />
                  <FontAwesomeIcon
                    className="pointer"
                    onClick={() =>
                      setDataForSign({
                        invoice: invoice._id ? invoice._id : '',
                        from: invoice.from,
                      })
                    }
                    icon={faPaperPlane}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <hr />
        <small className="text-muted">
          {`${i18next.t('Invoices:completed')} - ${completed.length}`}
        </small>
        <ListGroup>
          {completed.map((invoice) => (
            <ListGroup.Item key={Math.random()}>
              <Row>
                <Col md="2">
                  {moment(dateConverter(invoice.date)).format('L')}
                </Col>
                <Col>
                  {invoice.from}{' '}
                  <small>
                    ({invoice.currency} ${invoice.amount} -{' '}
                    {i18next.t(`Radio:${invoice.payment}`)})
                  </small>
                  {invoice.tags?.map((item: string) => (
                    <Badge key={Math.random()} variant="info" className="ml-1">
                      {item}
                    </Badge>
                  ))}{' '}
                </Col>
                <Col md="2" className="text-right text-primary">
                  <FontAwesomeIcon
                    className="pointer"
                    icon={faTag}
                    onClick={() => toggleTagsModal(invoice._id, invoice.tags)}
                  />

                  <FontAwesomeIcon
                    onClick={() =>
                      history.push(`/invoice/edit/${invoice._id}/`)
                    }
                    className="ml-3 pointer"
                    icon={faPen}
                  />
                  <FontAwesomeIcon
                    onClick={() =>
                      history.push(`/invoice/display/${invoice._id}/no`)
                    }
                    icon={faPrint}
                    className="mx-3 pointer"
                  />
                  <FontAwesomeIcon
                    onClick={() => deleteBill(invoice._id)}
                    className="pointer"
                    icon={faTrash}
                  />
                </Col>
              </Row>{' '}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </>
  );
}
