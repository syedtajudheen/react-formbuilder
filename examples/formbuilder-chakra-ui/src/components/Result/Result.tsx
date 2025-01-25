import { Code, Heading } from '@chakra-ui/react';
import { CodeWrapper, ResultWrapper } from "../Form/ProductForm.styles";
import { useColorModeValue } from '../ui/color-mode';

export const Result = ({ data }) => {
  const resultBgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <ResultWrapper bgColor={resultBgColor}>
      <Heading as="h2" size="md" mb={4}>
        Form Data
      </Heading>
      <CodeWrapper>
        <Code>{JSON.stringify(data, null, 2)}</Code>
      </CodeWrapper>
    </ResultWrapper>
  );
}