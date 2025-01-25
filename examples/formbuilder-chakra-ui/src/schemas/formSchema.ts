export const schema = {
  rows: [
    {
      fields: [{
        span: 6,
        name: 'productName',
        id: 'productName', // Unique field identifier
        label: 'Product Name', // Field label
        type: 'text', // Field type (e.g., text, number, select, checkbox)
        placeholder: 'Enter the product name',
        defaultValue: '', // Default value for the field
        validation: { // Validation rules
          required: true, // Whether the field is mandatory
          minLength: 2, // Minimum input length
          maxLength: 16, // Maximum input length
        }
      },
      { span: 6, name: 'sku', label: 'SKU', type: 'text', required: true, placeholder: 'Enter SKU (e.g., ABC123)' },
      ]
    },
    {
      fields: [
        {
          span: 3,
          name: 'category',
          label: 'Category',
          placeholder: 'Select Category', // Placeholder text
          type: 'select',
          options: [
            { label: 'Electronics', value: 'electronics' },
            { label: 'Clothing', value: "clothing" }
          ]
        },
        { name: 'price', span: 3, label: 'Price', type: 'number', required: true, placeholder: 'Enter product price' },
        { name: 'quantity', span: 3, label: 'Quantity', type: 'number', required: true, placeholder: 'Enter product quantity' },
        { span: 3, name: 'shippingWeight', label: 'Weight (kg)', type: 'number', placeholder: 'Enter weight in kilograms' },

      ]
    },
    {
      fields: [
        {
          span: 6, name: 'color', label: 'Color', type: 'radio',
          options: [
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: "blue" },
            { label: 'Green', value: "green" }
          ], placeholder: 'Select color'
        },
        {
          span: 6, name: 'size', label: 'Size', type: 'select',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Large', value: "large" }
          ], placeholder: 'Select size'
        }
      ]
    },
    {
      fields: [
        { name: 'tags', span: 12, label: 'Tags', type: 'tags', required: true, placeholder: 'Enter product tags' },
      ]
    },
    {
      fields: [
        { span: 12, name: 'productImages', label: 'Product Images', type: 'file', multiple: true, placeholder: 'Upload product images' }
      ]
    },
    {
      fields: [
        { span: 6, name: 'email', label: 'Support Email', type: 'email', required: false, placeholder: 'Enter support email' },
        { span: 6, name: 'website', label: 'Product Website', type: 'url', required: false, placeholder: 'Enter website URL' }
      ]
    },
    {
      fields: [
        {
          span: 12,
          name: 'productDescription',
          id: 'productDescription', // Unique field identifier
          label: 'Description', // Field label
          type: 'textarea', // Field type (e.g., text, number, select, checkbox)
          placeholder: 'Enter product description', // Placeholder text
          defaultValue: '', // Default value for the field
          validation: { // Validation rules
            required: true, // Whether the field is mandatory
            minLength: 2, // Minimum input length
            maxLength: 16, // Maximum input length
          }
        },
      ]
    },{
      fields: [
        {
          span: 12,
          name: 'agreement',
          label: 'Terms Agreement',
          type: 'checkbox',
          placeholder: 'Agree to terms',
          id: 'productDescription', // Unique field identifier
          validation: { // Validation rules
            required: true, // Whether the field is mandatory
          }
        },
      ]
    }]
};
