import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'
import { Checkbox } from './checkbox';

import './checkbox.scss';

export default {
  title: "Components/Atoms/Checkbox",
  decorators: [withKnobs],

  parameters: {
    component: Checkbox,
    componentSubtitle: 'Checkboxes allow the user to select one or more items from a set.',
  },
};

export const Primary = () => (
  <label className='checkbox'>
    <input class='input' type="checkbox"/>
    <span className='checkmark'></span>
  </label>
)