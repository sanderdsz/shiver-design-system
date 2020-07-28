import React from "react";

import "./styles.scss";

export interface Props {
  theme:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "disabled"
    | "primary-outline"
    | "info-outline"
    | "success-outline"
    | "warning-outline"
    | "danger-outline"
    | "primary-flat";
}

const Button: React.FC<Props> = ({ children, theme }) => (
  <div data-testid="Button">
    <button className={`${theme}`}>{children}</button>
  </div>
);

export default Button;
