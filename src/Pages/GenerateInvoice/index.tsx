/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Spinner,
} from 'react-bootstrap';
import {
  faSave,
  faTimesCircle,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notify } from 'react-notify-toast';
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import i18next from 'i18next';
import { endpoints } from '../../constants/endpoint';
import { IdGeneration } from '../../Context/IdGeneration';
import { UserContext } from '../../Context/UserContext';
import { Invoice } from '../../Interfaces/invoice';
import ShowQRCodeModal from './components/ShowQRCodeModal';

let socket: SocketIOClient.Socket;
let socketRoomId: string;

export default function GenerateInvoice() {
  const date = new Date().toISOString().substr(0, 10);

  const axiosHeaders = localStorage.getItem('bill-token')
    ? { headers: { auth: localStorage.getItem('bill-token') } }
    : undefined;

  const { id } = useParams<any>();

  // Get uniqueId for this session
  const { generateId } = useContext(IdGeneration);
  const { isLoggedIn } = useContext(UserContext);

  // Setting up state
  const [state, setState] = useState<Invoice>({
    invoiceNumber: 1,
    date,
    from: '',
    amountText: '',
    amount: 0,
    concept: '',
    currency: 'ARS',
    pending: false,
    sign: '',
  });
  const [validated, setValidated] = useState(false);
  const [showQRCodeModal, setShowQRCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Setting up history
  const history = useHistory();

  /**
   * Opens and closes QRCode modal
   */
  const toggleShowQRCodeModal = () => {
    setShowQRCodeModal((i) => !i);
  };

  /**
   * Keeps track of inputs and saves them to state
   * @param e Input
   */
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({ ...state, [name]: newValue });
  };

  /**
   * Saves invoice to database
   * @param e Form
   */
  const handleSubmit = (e: {
    preventDefault: () => void;
    currentTarget?: any;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);

    const { currentTarget } = e;
    if (!state.sign && !state.pending) {
      notify.show(i18next.t('GenerateInvoice:signatureNeeded'), 'error');
      setIsLoading(false);
      return null;
    }

    if (currentTarget.checkValidity() === false) {
      notify.show(i18next.t('GenerateInvoice:verifyForm'), 'error');
    } else if (id) {
      Axios.put(
        `${endpoints.backend}api/invoice/edit/${id}`,
        { ...state, pending: state.sign === '' },
        { headers: { auth: localStorage.getItem('bill-token') } }
      )
        .then(({ data }) => {
          if (data.success) {
            if (data.data._id) {
              history.push(
                state.pending
                  ? '/dashboard'
                  : `/invoice/display/${data.data._id}/${socketRoomId}`
              );
            }
          }
          notify.show(data.message, 'success');
        })
        .catch((err) => {
          notify.show(
            i18next.t('GenerateInvoice:errorCreatingInvoice'),
            'error'
          );
        });
    } else {
      Axios.post(`${endpoints.backend}api/invoice/`, { ...state }, axiosHeaders)
        .then(({ data }) => {
          if (data.id) {
            history.push(
              state.pending
                ? '/dashboard'
                : `/invoice/display/${data.id}/${socketRoomId}`
            );
          }
          notify.show(data.message, 'success');
        })
        .catch((err) => {
          notify.show(
            i18next.t('GenerateInvoice:errorCreatingInvoice'),
            'error'
          );
        });
    }

    setIsLoading(false);
    setValidated(true);

    return false;
  };

  useEffect(() => {
    socket = io(endpoints.backend);

    if (id) {
      Axios.get(`${endpoints.backend}api/invoice/single/${id}`).then(
        ({ data }) => {
          const newDate = data.data.date.substr(0, 10);
          setState({ ...data.data, date: newDate });
        }
      );
    }

    socket.on('close', () => {
      setShowQRCodeModal(false);
      notify.show(i18next.t('GenerateInvoice:phoneConnected'), 'success');
    });

    socket.on('sign', (data: string) => {
      setState((oldstate) => ({ ...oldstate, sign: data, pending: false }));
    });

    return () => {
      socket.disconnect();
      socketRoomId = '';
    };

    // eslint-disable-next-line
  }, [endpoints.backend]);

  const showQRCodeModalAndGenerateCode = async () => {
    if (!socketRoomId) {
      socketRoomId = generateId();
      socket.emit('join', socketRoomId);
    }
    setShowQRCodeModal((i) => !i);
  };

  return (
    <Container>
      <ShowQRCodeModal
        currentId={socketRoomId}
        show={showQRCodeModal}
        onHide={toggleShowQRCodeModal}
      />
      <Row className="h-100-minus align-items-center">
        <Col className="bg-light p-3 shadow rounded">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>{i18next.t('Invoice:date')}</Form.Label>
                  <Form.Control
                    required
                    name="date"
                    onChange={handleChange}
                    value={state.date.toString()}
                    type="date"
                  />
                  <Form.Control.Feedback type="invalid">
                    {i18next.t('GIError:date')}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <p className="text-center">{i18next.t('Invoice:received')}</p>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>{i18next.t('Invoice:from')}</Form.Label>
                  <Form.Control
                    required
                    name="from"
                    onChange={handleChange}
                    value={state.from}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>{i18next.t('Invoice:quantity')}</Form.Label>
                  <Form.Control
                    required
                    name="amountText"
                    onChange={handleChange}
                    value={state.amountText}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>{i18next.t('Invoice:inConceptOf')}</Form.Label>
                  <Form.Control
                    required
                    name="concept"
                    onChange={handleChange}
                    value={state.concept}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <Form.Group>
                  <Form.Label>{i18next.t('Invoice:quantity')}</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <select
                          name="currency"
                          onChange={handleChange}
                          value={state.currency}
                          className="no-decoration"
                        >
                          <option>ARS</option>
                          <option>USD</option>
                        </select>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      name="amount"
                      onChange={handleChange}
                      value={state.amount}
                      min={1}
                      type="decimal"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col className="text-right">
                <p className="lead">{i18next.t('Invoice:signature')}</p>
              </Col>
              <Col>
                {state.sign ? (
                  <img height="100" src={state.sign} alt="signature" />
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col className="text-right d-flex align-items-center justify-content-end">
                {isLoggedIn ? (
                  <fieldset className="mr-3 py-1 px-2 border border-gray rounded">
                    <label htmlFor="pending" className="m-0 p-0">
                      <input
                        id="pending"
                        type="checkbox"
                        name="pending"
                        checked={state.pending}
                        onChange={handleChange}
                        className="mr-1 p-0 m-0"
                      />
                      {i18next.t('GenerateInvoice:markAsPending')}
                    </label>
                  </fieldset>
                ) : null}

                <Button
                  variant="info"
                  onClick={showQRCodeModalAndGenerateCode}
                  className="mr-3"
                >
                  <FontAwesomeIcon icon={faQrcode} />{' '}
                  {i18next.t('GenerateInvoice:QR')}
                </Button>
                <Button
                  disabled={isLoading}
                  variant="secondary"
                  className="mr-3"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />{' '}
                  {i18next.t('GenerateInvoice:cancel')}
                </Button>
                <Button disabled={isLoading} variant="primary" type="submit">
                  {isLoading ? (
                    <Spinner size="sm" animation="border" />
                  ) : (
                    <FontAwesomeIcon icon={faSave} />
                  )}{' '}
                  {i18next.t('GenerateInvoice:save')}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
