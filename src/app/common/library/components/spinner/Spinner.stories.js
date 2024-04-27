import React from 'react';
import SpinnerComponent from './spinner';

export default {
    title: 'Components/Spinner',
    component: SpinnerComponent,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ],
            name: 'Color',
        },
        textContent: {
            control: 'text',
            name: 'Text Content',
        },
    },
};

const Template = (args) => <SpinnerComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    textContent: 'Loading...', // Default text content, can be left empty or changed as needed
};
