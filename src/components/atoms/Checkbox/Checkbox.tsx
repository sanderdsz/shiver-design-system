import React, { FunctionComponent } from 'react'

import "./Checkbox.scss";

export interface CheckboxProps {
  theme:| "default";
    onClick?: () => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ 
  children, 
  onClick, 
  theme, 
  ...rest 
}) => (
  <div>
    <input
      type="checkbox" 
      className={`${theme}`} 
      onClick={onClick} 
      {...rest}
    >
    </input>
    <span>{children}</span>
  </div>
)