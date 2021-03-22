import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'

import { Checkbox } from './Checkbox';

import './Checkbox.scss';

export default {
  title: "Components/Atoms/Checkbox",
  decorators: [withKnobs],

  parameters: {
    component: Checkbox,
    componentSubtitle: 'Button is a default component to display action in a page.',
  },
};

export const Html = () => (
  <label className='checkbox'>
      <input 
        type="checkbox"
      />
      <span className='checkmark'></span>
  </label>
)