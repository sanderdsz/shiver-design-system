import React, { FunctionComponent } from 'react'

import "./Checkbox.scss";

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
  <div className="checkbox">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">{children}</label>
  </div>
)