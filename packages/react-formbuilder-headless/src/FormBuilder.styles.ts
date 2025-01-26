import styled from 'styled-components';

export const FormBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormField = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
      background-color: #0056b3;
  }
`;

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(min(20px, 100%), 1fr));
  column-gap: 16px;
`;

export const FieldWrapper = styled.div<{ span: number }>`
  box-sizing: border-box;
  padding: 8px 0;
  ${({ span }) => span && `grid-column: span ${span};`}
`;
