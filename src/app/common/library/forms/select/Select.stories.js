import React from 'react';
import SelectComponent from './select';

export default {
    title: 'FromGroup/SelectComponent',
    component: SelectComponent,
    parameters: {
        docs: {
            description: {
                component: `
### This is a 'SelectComponents'
Use this component to render a select input field with a corresponding label. 
Specify the options for the select field, where each option has a 'text' and a 'value' property.

Example usage:

\`\`\`jsx
<SelectComponents 
  label="My Select" 
  options={[{ text: 'Option 1', value: '1' }, { text: 'Option 2', value: '2' }]} 
  textProp="text" 
  valueProp="value" 
  onChange={myChangeHandler} 
  name="mySelect" 
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        onChange: { action: "changed" },
    },
    tags: ["autodocs"],
};

const Template = (args) => {
    return <SelectComponent {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    options: [
        { text: "Option 1", value: "1" },
        { text: "Option 2", value: "2" },
    ],
    textProp: "text",
    valueProp: "value",
    label: "Label",
    name: "select",
};