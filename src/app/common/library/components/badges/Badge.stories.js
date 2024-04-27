import React from 'react';
import BadgeComponent from './badge';

// Assuming IBadge is similar to IClasses in structure, particularly for the `contextual` part
export default {
    title: 'Components/Badge',
    component: BadgeComponent,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
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
    },
};

const Template = ({ contextualClass, ...args }) => {
    const classes = {
        contextual: contextualClass,
    };

    return <BadgeComponent {...args} classes={classes} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'New',
    contextualClass: 'primary', // Default selection for the contextual class
};
