import { ReactElement, SyntheticEvent } from "react";
import { Field } from "../types/schema.type";
import { ComponentProps, Components, LabelProps } from "../types/FormBuilder.types";
import { defaultComponents } from "../constants";
import styled from "styled-components";

interface InputFieldProps extends Field {
  components: Components;
  value: string;
  defaultValue?: string;
  // refs: {
  //   current: RefObject<HTMLInputElement>
  // },
  renderLabel: (props: LabelProps) => ReactElement;
  onChange: (e: SyntheticEvent) => void;
};

export const InputField = ({
  name,
  components,
  defaultValue = '',
  label,
  placeholder,
  // refs,
  type,
  value,
  options,
  renderLabel,
  onChange
}: InputFieldProps): ReactElement<ComponentProps> => {

  const mergedComponents = { ...defaultComponents, ...components };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = mergedComponents?.[type] || defaultComponents.text;

  return (
    <>
      {renderLabel && renderLabel({ name, label, type, value })}
      {!renderLabel && label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <Component
        {...{ name, label, placeholder, type, onChange, options }}
        value={value !== undefined ? value : defaultValue}
      />
    </>
  )
};

export const StyledLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  /* color: var(--foreground); */
  margin-bottom: 0.5rem;
  display: block;
`;
