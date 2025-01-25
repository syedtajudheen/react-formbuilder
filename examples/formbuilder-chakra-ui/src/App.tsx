import { Box } from '@chakra-ui/react';
import { ColorModeButton, useColorModeValue } from './components/ui/color-mode';
import { ProductForm } from './components/Form/ProductForm';
import { ColorButton } from './components/Form/ProductForm.styles';
import { schema } from './schemas/formSchema';

function App() {
  const color = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box w="full" padding={"1rem 2rem"} bg={color}>
      <ColorButton w="full" justify="end" >
        <ColorModeButton />
      </ColorButton>
      <ProductForm schema={schema} />
    </Box>
  )
}

export default App;
