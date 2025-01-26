import { FieldType } from "./FormBuilder.types";

export type FieldGroups = {
  "id": string, // Unique identifier for the group
  "title": string, // Group title
  "description": string, // Optional description for the group
  "layout": string, // Layout type (e.g., "horizontal", "vertical", "grid")
  "fields": Field[] // Fields belonging to the group
};

export type Row = {
  fields: Field[]; // Array of fields in the row
};

export type FormSchema = {
  rows: Array<Row>
};

export type Field =  {
  span?: number, // Number of columns the field spans out of 12 units (columns)
  name: string, // Name attribute for the field, used in form data
  id: string, // Unique field identifier
  label: string, // Field label
  type: FieldType, // Field type (e.g., text, number, select, checkbox)
  placeholder?: string, // Placeholder text
  defaultValue?: string, // Default value for the field
  options?: Option[] // For fields with selectable options (e.g., dropdown),
  validation?: { // Validation rules
    required?: boolean, // Whether the field is mandatory
    minLength?: number, // Minimum input length
    maxLength?: number, // Maximum input length
    minValue?: number, // Minimum numeric value
    maxValue?: number, // Maximum numeric value
    pattern?: string, // Regex pattern for custom validation
    custom?: string // Reference to a custom validation function
  },
  visibilityCondition?: { // Conditional visibility logic
    fieldId: string, // Field ID to check against
    operator: string, // Operator (e.g., equals, notEquals, greaterThan)
    value: unknown // Value to match
  },
  ui?: { // UI-specific configurations
    multiline: boolean, // For textareas
    step: number, // Step increment for numeric fields
    tooltip: string, // Tooltip for user guidance
    icon: string, // Icon for the field
    customClass: string // Custom CSS class
  }
};

export type Props = {
  [key in string]: unknown;
};

export type Action = {
  label: string, // Button label (e.g., Submit, Reset)
  type: "reset" | "submit", // Action type (e.g., submit, reset, custom),
  props: Props // Additional button properties
}

type Option = { label: string, value: unknown };
