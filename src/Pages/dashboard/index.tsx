/* eslint-disable no-alert */
import Axios from 'axios';
import i18next from 'i18next';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { notify } from 'react-notify-toast';
import { useHistory } from 'react-router-dom';
import { endpoints } from '../../constants/endpoint';
import { Invoice, queryType } from '../../Interfaces/invoice';
import Filter from './components/Filter';
import InvoicesList from './components/InvoicesList';

export default function DashboardScreen() {
  const history = useHistory();
  const [pendingBills, setPendingBills] = useState<Invoice[]>([]);
  const [completedBills, setCompletedBills] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const axiosHeaders = {
    headers: { auth: localStorage.getItem('bill-token') },
  };

  const getBills = (query: queryType) => {
    const _completedBills = Axios.get(
      `${endpoints.backend}api/invoice/completed?from=${query.from}&to=${query.to}&tags=${query.tags}`,
      axiosHeaders
    );
    const _pendingBills = Axios.get(
      `${endpoints.backend}api/invoice/pending?from=${query.from}&to=${query.to}&tags=${query.tags}`,
      axiosHeaders
    );

    Axios.all([_completedBills, _pendingBills])
      .then(
        Axios.spread((...response) => {
          setCompletedBills(response[0].data.data);
          setPendingBills(response[1].data.data);
          setIsLoading(false);
        })
      )
      .catch((err) => {
        notify.show(i18next.t('Dashboard:queryError'), 'error');
        history.push('/');
      });
  };

  const deleteBill = (id: string | undefined) => {
    if (id !== undefined && window.confirm(i18next.t('Dashboard:deleteBill'))) {
      Axios.delete(`${endpoints.backend}api/invoice/${id}`, axiosHeaders)
        .then((res) => {
          if (res.data.success) {
            notify.show(i18next.t('Dashboard:deleteConfirm'), 'success');
            getBills({});
          } else {
            notify.show(res.data.message, 'warning');
          }
        })
        .catch((err) => {
          notify.show(err.response.data.message, 'error');
        });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getBills({});
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="my-5">
      <Row className="h-100-minus">
        <Col>
          <Filter
            isLoading={isLoading}
            setIsLoading={(bool) => setIsLoading(bool)}
            submitFilter={(query: queryType) => getBills(query)}
          />
          <InvoicesList
            isLoading={isLoading}
            refreshData={(query: queryType) => getBills(query)}
            deleteBill={(id: string | undefined) => deleteBill(id)}
            completed={completedBills}
            pending={pendingBills}
          />
          {/* <PaginationBar /> */}
        </Col>
      </Row>
    </Container>
  );
}
