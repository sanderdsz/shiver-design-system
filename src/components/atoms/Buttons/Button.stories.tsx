import React from "react";
import Button from "./";

export default {
  title: "Button",
};

export const Primary = () => <Button theme="primary">Primary</Button>;

export const Info = () => <Button theme="info">Info</Button>;

export const Success = () => <Button theme="success">Success</Button>;

export const Warning = () => <Button theme="warning">Warning</Button>;

export const Danger = () => <Button theme="danger">Danger</Button>;

export const Disabled = () => <Button theme="disabled">Disabled</Button>;

export const PrimaryOutline = () => (
  <Button theme="primary-outline">Primary Outline</Button>
);

export const InfoOutline = () => (
  <Button theme="info-outline">Info Outline</Button>
);

export const SuccessOutline = () => (
  <Button theme="success-outline">Success Outline</Button>
);

export const PrimaryFlat = () => (
  <Button theme="primary-flat">Primary Flat</Button>
);
