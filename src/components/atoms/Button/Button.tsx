import React, { FunctionComponent } from 'react'
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
}

export const Button: FunctionComponent<ButtonProps> = ({ 
  children, 
  theme, 
  ...rest 
}) => (
  <div>
    <button 
      className={`${theme}`} 
      {...rest}
    >
      {children}
    </button>
  </div>
)