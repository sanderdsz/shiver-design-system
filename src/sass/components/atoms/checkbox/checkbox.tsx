import React, { FunctionComponent } from 'react'

import './checkbox.scss'

export interface CheckboxProps {
  class:
    | "primary"
    /*
    | "secondary"
    | "disabled"
    */
    /*
  size: 
    | "medium"
    | "small"
    | "large"
    */
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ 
  children,
  class, 
  ...rest 
}) => (
  <label className='checkbox'>
      <input 
        type='checkbox'
      />
      {children}
      <span className='checkmark'></span>
  </label>
)