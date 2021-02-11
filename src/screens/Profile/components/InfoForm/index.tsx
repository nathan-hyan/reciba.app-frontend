import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import ButtonWithIcon from "components/ButtonWithIcon";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import BootstrapInput from "components/BootstrapInput";
import { FORM_INPUTS } from "screens/Profile/constants";
import i18next from "i18next";

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
    <Col className="d-flex flex-column align-items-center justify-content-center">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-75"
      >
        {FORM_INPUTS.map((input) => (
          <BootstrapInput
            name={input.name}
            label={i18next.t(input.label)}
            type={input.type}
            onChange={handleChange}
            value={state[input.name]}
            required={input.required}
          />
        ))}
        <ButtonWithIcon
          icon={faSave}
          label={i18next.t("ProfilePage:submit")}
          type="submit"
        />
      </Form>
    </Col>
  );
}

export default InfoForm;
