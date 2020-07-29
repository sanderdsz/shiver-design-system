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
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, theme, onClick }) => (
  <div data-testid="Button">
    <button className={`${theme}`} onClick={onClick}>{children}</button>
  </div>
);

export default Button;
