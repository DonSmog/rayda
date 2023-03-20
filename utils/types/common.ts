import { UseFormReturn } from "react-hook-form";

export enum Color {
  PRIMARY = "",
}

export enum Position {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
  CENTER = "center",
}

export interface MenuItem {
  text: string;
  key: string;
  url?: string;
  active?: boolean;
  previous?: boolean;
}

export enum ButtonType {
  SUBMIT = "submit",
  BUTTON = "button",
  RESET = "reset",
}

export enum FormType {
  EMAIL = "email",
  TEXT = "text",
  NUMBER = "number",
  TEL = "tel",
}

export interface IconProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  onClick?: () => void;
}

export interface AccordionData {
  intro: string;
  content: string;
  active?: boolean;
  previous?: boolean;
}

export interface ModalData {
  open: boolean;
  close?: () => void;
}

export enum ModalSize {
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export interface FormInputProps {
  label?: string;
  placeholder?: string;
  title: string;
  handler: UseFormReturn;
  className?: string;
  type?: FormType;
  disabled?: boolean;
}

export interface SelectListProps {
  label: string;
  value: string;
}

export type FormInputValue = string | number | readonly string[] | undefined;
