import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'

import { Checkbox } from './Checkbox';

export default {
  title: "Components/Atoms/Checkbox",
  decorators: [withKnobs],

  parameters: {
    component: Checkbox,
    componentSubtitle: 'teste',
  },
};

export const Default = () => (
  <Checkbox theme="default">{text("Label", "Default")}</Checkbox>
)