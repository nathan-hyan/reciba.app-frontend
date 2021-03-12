/* eslint-disable indent */
import React, { useState } from "react";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Accordion, Card, Col, Form, Row } from "react-bootstrap";
import moment from "moment";
import i18next from "i18next";
import { RADIO } from "screens/GenerateInvoice/constants";
import { queryType } from "interfaces/invoice";
import { dateConverter } from "utils/dateConverter";
import ButtonWithIcon from "components/ButtonWithIcon";

export default function Filter({
  submitFilter,
  isLoading,
  setIsLoading,
}: {
  submitFilter: (query: queryType) => void;
  isLoading: boolean;
  setIsLoading: (_isLoading: boolean) => void;
}) {
  const [query, setQuery] = useState<queryType>({
    from: "",
    to: "",
    tags: "",
    type: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    submitFilter({
      from: query.from
        ? moment(query.from).startOf("day").format("YYYY-MM-DD")
        : "undefined",
      to: query.to
        ? moment(query.to).endOf("day").format("YYYY-MM-DD")
        : "undefined",
      tags: query.tags,
      type: query.type,
    });
  };

  const clearSearch = () => {
    setIsLoading(true);
    submitFilter({});
    setQuery({ from: "", to: "", tags: "", type: "" });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const filterDisplay = () => {
    if (query.from || query.to) {
      return (
        <small className="text-muted border rounded p-1">
          {`${
            query.from
              ? `${i18next.t("Filter:from")}: ${moment(
                  dateConverter(query.from)
                ).format("L")}`
              : ""
          } ${
            query.to
              ? `${i18next.t("Filter:to")}: ${moment(
                  dateConverter(query.to)
                ).format("L")}`
              : ""
          }`}
        </small>
      );
    }
    return (
      <small className="text-muted border rounded p-1">
        {`${i18next.t("Filter:title")} ${Intl.DateTimeFormat(
          navigator.language,
          {
            month: "long",
          }
        ).format(new Date())}`}
      </small>
    );
  };

  return (
    <Col className="bg-white rounded shadow p-3 mb-3">
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {i18next.t("Filter:filter")} {filterDisplay()}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>{i18next.t("Filter:tag")}</Form.Label>
                      <Form.Control
                        name="tags"
                        value={query.tags}
                        onChange={handleChange}
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>{i18next.t("Filter:from")}</Form.Label>
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
                      <Form.Label>{i18next.t("Filter:to")}</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={handleChange}
                        name="to"
                        value={query.to}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>{i18next.t("Filter:payment")}</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="type"
                        value={query.type}
                        as="select"
                      >
                        <option value="">{i18next.t("Filter:all")}</option>
                        {RADIO.map((item) => (
                          <option key={Math.random()} value={item}>
                            {i18next.t(`Radio:${item}`)}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-end w-100">
                    <ButtonWithIcon
                      label={i18next.t("Filter:search")}
                      icon={faSearch}
                      disabled={isLoading}
                      className="mr-3"
                      variant="primary"
                      type="submit"
                    />

                    <ButtonWithIcon
                      label={i18next.t("Filter:cleanSearch")}
                      icon={faTimesCircle}
                      disabled={isLoading}
                      variant="danger"
                      onClick={clearSearch}
                    />
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
