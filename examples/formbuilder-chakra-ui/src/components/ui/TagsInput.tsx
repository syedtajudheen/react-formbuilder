import React, { useState } from 'react';
import styled from 'styled-components';
import { Tag } from './tag';

const TagsInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border: 1px solid var(--border-input);
  padding: 8px;
  border-radius: 4px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 0.875rem;
  background-color: transparent;
`;

interface TagsInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

const TagsInput: React.FC<TagsInputProps> = ({ value = [], onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!value.includes(inputValue.trim())) {
        onChange([...value, inputValue.trim()]);
        setInputValue('');
      }
    }
  };

  const handleRemoveTag = (tag: string) => {
    onChange(value.filter(t => t !== tag));
  };

  return (
    <TagsInputWrapper>
      {Array.isArray(value) && value?.map(tag => (
        <Tag key={tag} closable variant="solid" onClose={() => handleRemoveTag(tag)}>
          {tag}
        </Tag>
      ))}
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </TagsInputWrapper>
  );
};

export default TagsInput;