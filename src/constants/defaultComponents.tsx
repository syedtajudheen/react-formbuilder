import React from 'react';
import { Components } from "../types/FormBuilder.types";
import { Input } from "../components/Input/Input";
import { Select } from '../components/Select/Select';

export const defaultComponents: Components = {
  text: Input,
  select: Select,
  checkbox: (props: React.ComponentProps<'input'>) => <input type="checkbox" {...props} />,
  radio: (props: React.ComponentProps<'input'>) => <input type="radio" {...props} />,
};
