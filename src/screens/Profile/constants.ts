import { BootstrapInputProps } from "components/BootstrapInput";

export const FORM_INPUTS: BootstrapInputProps[] = [
  {
    name: "name",
    label: "Nombre",
    type: "text",
    required: false,
  },
  {
    name: "email",
    label: "Dirección de correo",
    type: "email",
    required: false,
  },
];
