import React, { useState } from 'react';
import InputGroup from './input-group';

export default {
    title: 'FromGroup/InputGroup',
    component: InputGroup,
    argTypes: {
        onChange: { action: 'changed' },
        onBlur: { action: 'blurred' },
    },
    tags: ['autodocs'],
};

const Template = (args) => {
    // useState to manage the input value
    const [value, setValue] = useState(args.value);

    // Handler for change events
    const handleChange = (e) => {
        setValue(e.target.value); // Update the value state
        args.onChange(); // Call the original onChange prop (if any)
    };

    return <InputGroup {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});

Default.args = {
    label: 'Email',
    value: '',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
};
