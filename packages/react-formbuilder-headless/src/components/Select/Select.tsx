import { useState, ReactElement } from 'react';
import { StyledSelectWrapper, StyledSelectButton, StyledSelectList, StyledSelectOption } from './Select.styles';

type Option = {
  label: string;
  value: string;
};

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

export const Select = ({ value, onChange, options = [], ...props }: SelectProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <StyledSelectWrapper {...props}>
      <StyledSelectButton onClick={() => setIsOpen(!isOpen)}>
        {options.find(option => option.value === value)?.label || 'Select'}
      </StyledSelectButton>
      {isOpen && (
        <StyledSelectList>
          {options.map(({ label, value }: Option) => (
            <StyledSelectOption key={value} onClick={() => handleSelect(value)}>
              {label}
            </StyledSelectOption>
          ))}
        </StyledSelectList>
      )}
    </StyledSelectWrapper>
  );
};