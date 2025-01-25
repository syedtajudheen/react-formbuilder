import { RefCallback, SyntheticEvent } from "react";
import { Action, FormSchema } from "./schema.type";
import { SelectProps } from "../components/Select/Select";

export interface FormBuilderProps {
  components: Components;
  formId?: string; // Unique identifier for the form
  title?: string; // Title of the form
  description?: string; // Description of the form
  schema: FormSchema;
  actions: Action[] // Form-level actions
  renderLabel: (field: LabelProps) => React.ReactElement; // Function to render field labels
  renderActions: (props: ActionProps) => React.ReactElement; // Function to render form action buttons
  onSubmit: (data: FormState) => void;
  onReset: () => void;
};

export type LabelProps = { 
  name: string; 
  label: string; 
  type: string; 
  value: string; 
};

export type FieldType = string; // Add other component types as needed

export type Components = {
  [key in FieldType]: React.ComponentType<SelectProps> | React.ComponentType<InputProps> | React.ForwardRefExoticComponent<React.ComponentProps<'input'>>;
};

export interface InputProps {
  name: string;
  defaultValue: string;
  onChange: (e: SyntheticEvent) => void;
  value: string;
  refs?: RefCallback<HTMLDivElement>;
}

export interface RefObj {
  [key: string]: HTMLInputElement;
}

export type FormState = {
  [key: string]: string;
};

export type ComponentProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  onChange: (e: SyntheticEvent) => void;
  options?: { label: string, value: string }[];
  value: string;
  defaultValue?: string;
}

export type ActionProps = {
  actions: Action[];
  submit: (e: SyntheticEvent) => void;
  reset: (e: SyntheticEvent) => void;
};
