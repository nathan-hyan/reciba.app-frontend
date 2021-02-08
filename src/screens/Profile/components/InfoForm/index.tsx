import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import ButtonWithIcon from "components/ButtonWithIcon";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import BootstrapInput from "components/BootstrapInput";
import { FORM_INPUTS } from "screens/Profile/constants";

type StateProps = {
  name: string;
  email: string;
  [key: string]: string;
};

function InfoForm() {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState<StateProps>({
    name: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Col>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {FORM_INPUTS.map((input) => (
          <BootstrapInput
            name={input.name}
            label={input.label}
            type={input.type}
            onChange={handleChange}
            value={state[input.name]}
            required={input.required}
          />
        ))}
        <ButtonWithIcon icon={faSave} label="Submit" type="submit" />
      </Form>
    </Col>
  );
}

export default InfoForm;
