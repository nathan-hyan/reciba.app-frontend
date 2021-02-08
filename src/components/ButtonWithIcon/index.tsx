import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconProp;
  label: string;
  variant?: "primary" | "danger" | "warning";
  type?: "submit" | "button";
};

export default function ButtonWithIcon({
  icon,
  label,
  variant = "primary",
  type = "button",
}: Props) {
  return (
    <Button variant={variant} type={type}>
      <FontAwesomeIcon icon={icon} className="mr-2" /> {label}
    </Button>
  );
}
