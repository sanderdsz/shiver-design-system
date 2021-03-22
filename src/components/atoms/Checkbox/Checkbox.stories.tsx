import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'

import { Checkbox } from './Checkbox';

export default {
  title: "Components/Atoms/Checkbox",
  decorators: [withKnobs],

  parameters: {
    component: Checkbox,
    componentSubtitle: 'Button is a default component to display action in a page.',
  },
};

export const Primary = () => (
  <Checkbox onChange={action('clicked')} theme="primary" >{text("Label", "Primary")}</Checkbox>
)

export const Secondary = () => (
  <Checkbox onChange={action('clicked')} theme="secondary" >{text("Label", "Secondary")}</Checkbox>
)