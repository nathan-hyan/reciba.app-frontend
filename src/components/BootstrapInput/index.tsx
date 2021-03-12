import React from "react";
import { Form } from "react-bootstrap";
import { INVALID_MESSAGES } from "./constants";

export type BootstrapInputProps = {
  name: string;
  label: string;
  type?: "email" | "text" | "number" | "password";
  placeholder?: string;
  subtext?: string;
  subtextColor?: "success" | "danger" | "info" | "warning";
  required: boolean;
};

interface Props extends BootstrapInputProps {
  value: string | number;
  onChange: (arg0: {
    target: {
      value: string | number;
    };
  }) => void;
}

export default function BootstrapInput({
  name,
  label,
  type = "text",
  placeholder,
  subtext,
  subtextColor,
  value,
  onChange,
  required = false,
}: Props) {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className="w-100"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      <Form.Text className={`text-${subtextColor ?? "muted"}`}>
        {subtext}
      </Form.Text>
      <Form.Control.Feedback type="invalid">
        {INVALID_MESSAGES[type]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
