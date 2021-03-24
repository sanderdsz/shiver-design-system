import React from "react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'

import { Button } from './button'

import "./button.scss"

export default {
  title: "Components/Atoms/Button",
  decorators: [withKnobs],

  parameters: {
    component: Button,
    componentSubtitle: 'Button is a default component to display action in a page.',
  },
};

export const Primary = () => (
  <button class="button primary">Primary</button>
)

export const Info = () => (
  <button class="button info">Info</button>
);

export const Success = () => (
  <button class="button success">Success</button>
);

export const Warning = () => (
  <button class="button warning">Warning</button>
);

export const Danger = () => (
  <button class="button danger">Danger</button>
);

export const Disabled = () => (
  <button class="button disabled">Disabled</button>
);

/*
export const PrimaryOutline = () => (
  <button class="primary-outline" >Primary Outline</button>
);

export const InfoOutline = () => (
  <button class="info-outline">Info Outline</button>
);

export const SuccessOutline = () => (
  <button class="success-outline">Success Outline</button>
);
*/

export const PrimaryFlat = () => (
  <button class="button primary-flat">Primary Flat</button>
);
