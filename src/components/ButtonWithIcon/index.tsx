import React, { MouseEventHandler } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconProp;
  label: string;
  variant?: "primary" | "danger" | "warning";
  type?: "submit" | "button";
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
};

export default function ButtonWithIcon({
  icon,
  label,
  variant = "primary",
  type = "button",
  disabled,
  className = "",
  onClick,
}: Props) {
  return (
    <Button
      className={className}
      disabled={disabled}
      variant={variant}
      type={type}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="mr-2" /> {label}
    </Button>
  );
}
