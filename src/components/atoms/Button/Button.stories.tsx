import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions'

import Button from "./";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const Primary = () => (
  <Button theme="primary" onClick={action('clicked')}>{text("Label", "Primary")}</Button>
);

export const Info = () => <Button theme="info">{text("Label", "Info")}</Button>;

export const Success = () => (
  <Button theme="success">{text("Label", "Success")}</Button>
);

export const Warning = () => (
  <Button theme="warning">{text("Label", "Warning")}</Button>
);

export const Danger = () => (
  <Button theme="danger">{text("Label", "Danger")}</Button>
);

export const Disabled = () => (
  <Button theme="disabled">{text("Label", "Disabled")}</Button>
);

export const PrimaryOutline = () => (
  <Button theme="primary-outline">{text("Label", "Primary Outline")}</Button>
);

export const InfoOutline = () => (
  <Button theme="info-outline">{text("Label", "Info Outline")}</Button>
);

export const SuccessOutline = () => (
  <Button theme="success-outline">{text("Label", "Success Outline")}</Button>
);

export const PrimaryFlat = () => (
  <Button theme="primary-flat">{text("Label", "Primary Flat")}</Button>
);
