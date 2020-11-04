import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Accordion, Button, Card, Col, Form, Row } from "react-bootstrap";
import { queryType } from "../../Interfaces/invoice";

export default function Filter({
  submitFilter,
}: {
  submitFilter: (query: queryType) => void;
}) {
  const [query, setQuery] = useState<queryType>({
    from: "",
    to: "",
  });

  const handleSubmit = (e: any) => {
    if (e) {
      e.preventDefault();
    }

    let queryToSend = { ...query };

    if (query.to) {
      queryToSend.to = new Date(query.to).setUTCHours(27).toString();
    }

    submitFilter(queryToSend);
  };

  const clearSearch = () => {
    submitFilter({});
    setQuery({ from: "", to: "" });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    let { name, value } = e.target;
    setQuery({ ...query, [name]: value });

    handleSubmit("");
  };

  const filterDisplay = () => {
    if (query.from || query.to) {
      return (
        <small className="text-muted border rounded p-1">
          {`${
            query.from
              ? `Desde: ${Intl.DateTimeFormat(navigator.language, {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(query.from).setUTCHours(3))}`
              : ""
          } ${
            query.to
              ? `Hasta: ${Intl.DateTimeFormat(navigator.language, {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(query.to).setUTCHours(3))}`
              : ""
          }`}
        </small>
      );
    }
  };

  return (
    <Col className="bg-white rounded shadow p-3 mb-3">
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Filtros {filterDisplay()}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Desde</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={handleChange}
                        name="from"
                        value={query.from}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Hasta</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={handleChange}
                        name="to"
                        value={query.to}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-end w-100">
                    <Button className="mr-3" variant="success" type="submit">
                      <FontAwesomeIcon icon={faSearch} /> Buscar
                    </Button>

                    <Button onClick={clearSearch} variant="danger">
                      <FontAwesomeIcon icon={faTimesCircle} /> Limpiar búsqueda
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>
  );
}
