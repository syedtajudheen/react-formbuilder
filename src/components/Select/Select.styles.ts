import styled from 'styled-components';

export const StyledSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelectButton = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--border-input);
  background-color: transparent;
  padding: 0.25rem 5px;
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: colors 0.2s;
  box-sizing: border-box;
  cursor: pointer;
  appearance: none;
  &::placeholder {
    color: var(--placeholder-muted-foreground);
  }
  &:focus-visible {
    outline: none;
    border: 1px solid var(--ring);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const StyledSelectList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid var(--border-input);
  border-radius: 0.375rem;
  background-color: var(--background);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledSelectOption = styled.li`
  padding: 0.25rem 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-background);
  }
`;
