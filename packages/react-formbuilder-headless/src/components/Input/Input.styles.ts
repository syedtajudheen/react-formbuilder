import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  height: 32px;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--border-input);
  background-color: transparent;
  padding: 0.25rem 5px;
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  transition: colors 0.2s;
  &::file {
    border: 0;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--file-foreground);
  }
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
