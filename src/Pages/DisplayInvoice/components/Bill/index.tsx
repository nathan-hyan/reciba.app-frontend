import i18next from 'i18next';
import moment from 'moment';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Invoice } from '../../../../Interfaces/invoice';

export default function Bill({
  isOriginal = false,
  data,
}: {
  isOriginal?: boolean;
  data: Invoice;
}) {
  return (
    <Row className="pdf-font my-5 py-5 bg-white border border-black">
      <Col md={1}>
        <p
          className="text-muted p-0 mb-0 text-center"
          style={{
            height: 64,
            marginTop: 150,
            width: 109,
            paddingLeft: 0,
          }}
        >
          {isOriginal
            ? i18next.t('Invoice:originalInvoice')
            : i18next.t('Invoice:duplicateInvoice')}
        </p>
      </Col>

      <Col className="px-5">
        <Row className="border-bottom mt-3 pb-3">
          <Col>
            {data.logo ? (
              <>
                <img src={data.logo} alt="RollingCode School" height="50" />
                <p className="text-monospace">
                  {i18next.t('Invoice:receiptNumber')}: {data.invoiceNumber}
                </p>
              </>
            ) : (
              <p className="text-monospace">
                {i18next.t('Invoice:receiptNumber')}:{data.invoiceNumber}
              </p>
            )}
          </Col>

          <Col md="2" />

          <Col className="text-center">
            <p className="my-0">
              <strong>{i18next.t('Invoice:date')}: </strong>
              {moment(data.date).format('MMMM Do [del] YYYY')}
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row className="bg-light my-3">
              <Col md={3}>
                <p className="text-center my-2">
                  <strong>{i18next.t('Invoice:received')}</strong>
                </p>
              </Col>
              <Col>
                <p className="my-2">
                  <strong>{i18next.t('Invoice:from')}: </strong>
                  {data.from}
                </p>
              </Col>
            </Row>

            <Row className="bg-light my-3">
              <Col>
                <p className="my-2">
                  <strong>{i18next.t('Invoice:quantity')}: </strong>
                  {data.amountText}
                </p>
              </Col>
            </Row>
            <Row className="bg-light my-3">
              <Col>
                <p className="my-2">
                  <strong>{i18next.t('Invoice:inConceptOf')}: </strong>{' '}
                  {data.concept}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={2} className="bg-light">
            <p className="my-2">
              <strong>Son: </strong> {data.currency} ${data.amount}
            </p>
          </Col>
          <Col />
          <Col md={6} className="bg-light">
            <p className="my-2">
              <strong>{i18next.t('Invoice:receiptBy')}: </strong>
              <img src={data.sign} height="120" alt="signature" />
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
