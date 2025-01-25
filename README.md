```markdown
# Headless FormBuilder UI Component

A headless form builder UI component built with React. This component allows you to dynamically render forms based on a schema and provides flexibility for custom rendering of form fields and action buttons.

## Installation

To install the component, use npm or yarn:

```bash
npm install react-formbuilder-headless
# or
yarn add react-formbuilder-headless
```

## Usage

### Basic Usage

```tsx
import React from 'react';
import { ChakraProvider, Box, Container, Flex, Heading, Button } from '@chakra-ui/react';
import { FormBuilder } from 'react-formbuilder-headless';
import { schema } from './schemas/formSchema';
import theme from './theme';

const App = () => {
  const renderActions = ({ actions, submit, reset }) => {
    return (
      <Flex justifyContent="center" mt={4}>
        {actions?.map((action, index) => (
          <Button
            key={index}
            type={action.type}
            onClick={action.type === 'reset' ? reset : submit}
            ml={index > 0 ? 2 : 0}
          >
            {action.label}
          </Button>
        ))}
      </Flex>
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <Box w="full" minH="100vh" p={4}>
        <Container maxW="container.xl">
          <Flex direction="column" align="center">
            <Heading as="h1" size="xl" mb={8} textAlign="center">
              Product Form
            </Heading>
            <FormBuilder schema={schema} renderActions={renderActions} />
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
```

### Schema Example

```typescript

export const schema = {
  rows: [
    {
      fields: [
        {
          span: 6,
          name: 'productName',
          id: 'productName',
          label: 'Product Name',
          type: 'text',
          placeholder: 'Enter the product name',
          defaultValue: '',
          validation: {
            required: true,
            minLength: 2,
            maxLength: 16,
          },
        },
        {
          span: 6,
          name: 'sku',
          label: 'SKU',
          type: 'text',
          required: true,
          placeholder: 'Enter SKU (e.g., ABC123)',
        },
      ],
    },
    // Add more rows and fields as needed
  ],
};
```

## API

### FormBuilder Props

| Prop            | Type                                                                 | Description                                                                                     |
|-----------------|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| `formId`        | `string`                                                             | The ID of the form.                                                                             |
| `components`    | `object`                                                             | Custom components for rendering form fields.                                                    |
| `title`         | `string`                                                             | The title of the form.                                                                          |
| `description`   | `string`                                                             | The description of the form.                                                                    |
| `schema`        | `{ rows: Row[] }`                                                    | The schema defining the structure of the form.                                                  |
| `actions`       | `{ type: string; label: string; onClick?: () => void }[]`            | The actions (buttons) to be rendered in the form.                                               |
| `renderLabel`   | `(props: { field: Field; label: string }) => ReactElement`           | Custom function for rendering field labels.                                                     |
| `renderActions` | `(props: { actions: Action[]; submit: () => void; reset: () => void }) => ReactElement` | Custom function for rendering action buttons.                                                   |
| `onSubmit`      | `(data: FormState) => void`                                          | Callback function to handle form submission.                                                    |
| `onReset`       | `() => void`                                                         | Callback function to handle form reset.                                                         |



### Schema Definition

The schema defines the structure of the form. It consists of rows, each containing fields.

#### Row

| Field   | Type     | Description                  |
|---------|----------|------------------------------|
| `fields`| `Field[]`| The fields in the row.       |

#### Field


| Field              | Type       | Description                                                                 |
|--------------------|------------|-----------------------------------------------------------------------------|
| `span`             | `number`   | The number of columns the field should span.                                |
| `name`             | `string`   | The name of the field.                                                      |
| `id`               | `string`   | The unique identifier of the field.                                         |
| `label`            | `string`   | The label of the field.                                                     |
| `type`             | `string`   | The type of the field (e.g., `text`, `number`, `select`, `radio`, `checkbox`). |
| `placeholder`      | `string`   | The placeholder text for the field.                                         |
| `defaultValue`     | `any`      | The default value of the field.                                             |
| `validation`       | `object`   | The validation rules for the field.                                         |
| `options`          | `Option[]` | The options for select, radio, and checkbox fields.                         |


#### Option


| Field   | Type     | Description                  |
|---------|----------|------------------------------|
| `label` | `string` | The label of the option.     |
| `value` | `any`    | The value of the option.     |

## Custom Components

You can provide custom components for rendering form fields by passing them to the `components` prop.

```tsx
const components = {
  text: (props) => <Input {...props} size="xs" />,
  number: (props) => <Input {...props} type="number" size="xs" />,
  select: (props) => (
    <Select {...props}>
      {props.options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  ),
  // Add more custom components as needed
};
```

## License

This project is licensed under the MIT License.
