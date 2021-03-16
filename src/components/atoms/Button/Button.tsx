import React, { FunctionComponent } from 'react'

import styles from "./Button.module.scss";
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

export const Button: FunctionComponent<ButtonProps> = ({ 
  children, 
  onClick, 
  theme, 
  ...rest 
}) => (
  <div>
    <button 
      className={styles[theme]} 
      onClick={onClick} 
      {...rest}
    >
      {children}
    </button>
  </div>
)