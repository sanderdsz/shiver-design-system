import React from "react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'

import { Button } from './Button'

import "./Button.scss"

export default {
  title: "Components/Atoms/Button",
  decorators: [withKnobs],

  parameters: {
    component: Button,
    componentSubtitle: 'Button is a default component to display action in a page.',
  },
};

export const Primary = () => (
  <button class="primary">Primary</button>
)

export const Info = () => (
  <button class="info">Info</button>
);

export const Success = () => (
  <button class="success">Success</button>
);

export const Warning = () => (
  <button class="warning">Warning</button>
);

export const Danger = () => (
  <button class="danger">Danger</button>
);

export const Disabled = () => (
  <button class="disabled">Disabled</button>
);

export const PrimaryOutline = () => (
  <button class="primary-outline" >Primary Outline</button>
);

export const InfoOutline = () => (
  <button class="info-outline">Info Outline</button>
);

export const SuccessOutline = () => (
  <button class="success-outline">Success Outline</button>
);

export const PrimaryFlat = () => (
  <button class="primary-flat">Primary Flat</button>
);
