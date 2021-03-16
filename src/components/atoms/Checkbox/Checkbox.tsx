import React, { FunctionComponent } from 'react'

import styles from './Checkbox.module.scss'

export interface CheckboxProps {
  theme:
    | "primary"
    | "secondary"
    | "disabled"
    /*
  size: 
    | "medium"
    | "small"
    | "large"
    */
  checked?: boolean;
  /*
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  */
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ 
  children,
  checked, 
  theme, 
  ...rest 
}) => (
  <label className={`${styles.checkbox} ${styles[theme]}`}>
      <input 
        type="checkbox"
        checked={checked}
      />
      {children}
      <span className={styles.checkmark}></span>
  </label>
)