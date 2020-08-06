import React, { SFC } from 'react'

import "./Button.scss";

export interface ButtonProps {
  /**
   * Set this to change button theme properties
   * @default primary
   */
  theme:| "primary"
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

export const Button: SFC<ButtonProps> = ({ children, onClick, theme, ...rest }) => (
  <div>
    <button className={`${theme}`} onClick={onClick} {...rest}>
      {children}
    </button>
  </div>
)