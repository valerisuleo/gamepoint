import React from 'react';
import Button from './button';

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
        },
        // Adjusting this to work with the structure of IClasses
        contextualClass: {
            name: 'contextual', // Display name in Storybook controls
            control: 'select',
            options: [
                'primary',
                'secondary',
                'success',
                'warning',
                'danger',
                'close',
                'light',
                'dark',
            ],
        },
        size: {
            control: 'select',
            options: ['lg', 'sm', 'md'],
        },
        isDarkMode: { control: 'boolean' },
        onEmitEvent: { action: 'clicked' },
    },
};

const Template = ({ contextualClass, size, ...args }) => {
    const classes = {
        contextual: contextualClass,
        size,
    };

    return <Button {...args} classes={classes} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Click Me',
    type: 'button',
    contextualClass: 'primary', // Default selection for contextual class
    size: 'lg', // Default size
    isDarkMode: false,
    onEmitEvent: () => alert('Button clicked!'),
};
