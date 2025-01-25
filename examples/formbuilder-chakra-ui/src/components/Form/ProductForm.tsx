import { useState, useRef } from 'react';
import { FormBuilder, ComponentProps, Action, ActionProps } from 'react-formbuilder-headless';
import { Button } from "../ui";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select"
import { Input, Textarea, HStack, Container, Flex, Heading } from '@chakra-ui/react';
import TagsInput from '../ui/TagsInput';
import { useColorModeValue } from '../ui/color-mode';
import { Radio, RadioGroup } from '../ui/radio';
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from '../ui/file-upload';
import { FormWrapper } from './ProductForm.styles';
import { Result } from '../Result/Result';
import { Checkbox } from '../ui/checkbox';

const components = {
  text: (props: ComponentProps) => {
    return (
      <Input
        {...props}
        size="xs"
      />
    )
  },
  number: (props: ComponentProps) => {
    return (
      <Input
        {...props}
        type='number'
        size="xs"
      />
    )
  },
  select: (props: ComponentProps) => {
    const { placeholder, options, onChange, value } = props;
    console.log('props:', props);
    return (
      <SelectRoot size={'xs'} value={value} onValueChange={({ value }) => onChange(value)}>
        {/* <SelectLabel /> */}
        <SelectTrigger>
          <SelectValueText placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option, index) => {
            return (
              <SelectItem key={index} item={option}>
                {option.label}
              </SelectItem>
            )
          })}
        </SelectContent>
      </SelectRoot>
    )
  },
  tags: (props: ComponentProps) => {
    return (
      <TagsInput variant="solid" {...props} />
    )
  },
  textarea: (props: ComponentProps) => {
    return (
      <Textarea {...props} />
    )
  },
  file: (props: ComponentProps) => {
    return (
      <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10} accept="image/jpeg" onFileChange={props.onChange}>
        <FileUploadDropzone
          label="Drag and drop here to upload"
          description=".png, .jpg up to 5MB"
        />
        <FileUploadList />
      </FileUploadRoot>
    );
  },
  radio: (props: ComponentProps) => {
    const { options = [], value: option, onChange } = props;
    return (
      <RadioGroup defaultValue="red" value={option?.value} onChange={onChange}>
        <HStack gap="6">
          {options?.map(({ label, value }, index) => (
            <Radio key={index} value={value}>{label}</Radio>
          ))}
        </HStack>
      </RadioGroup>
    )
  },
  checkbox: (props: ComponentProps) => {
    return (
      <Checkbox
        {...props}
        type="checkbox"
        size="xs"
      >
        {props.placeholder}
      </Checkbox>
    )
  }
  // number: Input
};

export const ProductForm = ({ schema }) => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({});
  const formBgColor = useColorModeValue('white', 'gray.700');

  const handleSubmit = (data) => {
    console.log('Form data:', data);
    setFormData(data);
  }

  const handleReset = () => {
    console.log('Form reset');
    setFormData({});
  };

  const onRenderLabel = ({ field, label }) => {
    return (
      <Heading as="h3" size="sm" mb={4}>
        {label}
      </Heading>
    );
  };

  const onRenderActions = ({ actions, submit, reset }: ActionProps) => {
    return (
      <Flex justifyContent="end" mt={4} gap={2}>
        {actions?.map((action: Action, index: number) => {
          const { type, label, props } = action;
          const onClick = () => type === 'reset' ? reset() : submit();
          return (
            <Button key={index} type={type} onClick={onClick} {...props}>
              {label}
            </Button>
          )
        })}
      </Flex>
    )
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction="column" align="center">
        <Heading as="h1" size="sm" mb={8} textAlign="center">
          Product Form
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} w="full" justify="center">
          <FormWrapper bgColor={formBgColor}>
            <FormBuilder
              ref={ref}
              schema={schema}
              actions={[
                {
                  type: 'reset',
                  label: 'Reset',
                  props: {
                    variant: 'outline'
                  }
                },
                {
                  type: 'submit',
                  label: 'Submit',
                  props: {
                    variant: 'solid'
                  }
                }
              ]}
              renderLabel={onRenderLabel}
              renderActions={onRenderActions}
              onSubmit={handleSubmit}
              onReset={handleReset}
              components={components}
            />
          </FormWrapper>
          <Result data={formData} />
        </Flex>
      </Flex>
    </Container>
  )
};
