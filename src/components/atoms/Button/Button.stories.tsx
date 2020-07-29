import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'

import Button from ".";

export default {
  title: "Atoms/Button",
  decorators: [withKnobs],
};

export const Primary = () => (
  <Button theme="primary" onClick={action('clicked')}>{text("Label", "Primary")}</Button>
);

export const Info = () => <Button theme="info" onClick={action('clicked')}>{text("Label", "Info")}</Button>;

export const Success = () => (
  <Button theme="success" onClick={action('clicked')}>{text("Label", "Success")}</Button>
);

export const Warning = () => (
  <Button theme="warning" onClick={action('clicked')}>{text("Label", "Warning")}</Button>
);

export const Danger = () => (
  <Button theme="danger" onClick={action('clicked')}>{text("Label", "Danger")}</Button>
);

export const Disabled = () => (
  <Button theme="disabled" onClick={action('clicked')}>{text("Label", "Disabled")}</Button>
);

export const PrimaryOutline = () => (
  <Button theme="primary-outline" onClick={action('clicked')}>{text("Label", "Primary Outline")}</Button>
);

export const InfoOutline = () => (
  <Button theme="info-outline" onClick={action('clicked')}>{text("Label", "Info Outline")}</Button>
);

export const SuccessOutline = () => (
  <Button theme="success-outline" onClick={action('clicked')}>{text("Label", "Success Outline")}</Button>
);

export const PrimaryFlat = () => (
  <Button theme="primary-flat" onClick={action('clicked')}>{text("Label", "Primary Flat")}</Button>
);
