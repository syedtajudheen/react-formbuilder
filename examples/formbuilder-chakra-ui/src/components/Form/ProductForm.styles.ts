import styled from 'styled-components';
import { Box, Flex } from '@chakra-ui/react';

export const FormWrapper = styled(Box)`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  max-width: 65%;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(props: { bgColor: string }): string => props.bgColor};
`;

export const ResultWrapper = styled(Box)`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  max-width: 35%;
  width: 100%;
  margin-left: 16px;
  background-color: var(--chakra-colors-color-palette-subtle);
  white-space: pre-wrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(props: { bgColor: string }): string => props.bgColor};
`;
// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   /* align-items: center; */
//   min-height: 100%;
// `;

export const ColorButton = styled(Flex)`
  text-align: end;
`;

export const CodeWrapper = styled.pre`
  white-space: break-spaces;
`;
