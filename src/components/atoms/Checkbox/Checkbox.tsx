import React, { FunctionComponent } from 'react'

import './Checkbox.scss'

export interface CheckboxProps {
  size:
    | "small"
    | "medium"
    | "large"
  onClick?: () => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ 
  children, 
  onClick, 
  size, 
  ...rest 
}) => (
  <label className="checkbox">
      <input type="checkbox" />
      {children}
      <span className="checkmark"></span>
  </label>
)