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

export const Default = () => (
  <Checkbox checked theme="" >{text("Label", "Default")}</Checkbox>
)

export const Primary = () => (
  <Checkbox theme="primary" >{text("Label", "Primary")}</Checkbox>
)

export const Secondary = () => (
  <Checkbox theme="secondary" >{text("Label", "Secondary")}</Checkbox>
)

export const Disabled = () => (
  <Checkbox theme="disabled" >{text("Label", "Disabled")}</Checkbox>
)