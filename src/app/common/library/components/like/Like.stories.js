import React from 'react';
import LikeComponent from './like';

export default {
    title: 'Components/Like',
    component: LikeComponent,
    parameters: {
        docs: {
            description: {
                component: 'The `LikeComponent` is a versatile component used to display a like button with heart icons. Users can toggle their like status, which is visually represented by a filled heart (liked) or an outlined heart (not liked). The component also emits the current state of like (active or not) to a parent component or handler.'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onEmitEvent: { action: 'clicked' }
    },
};

// ... other storybook setup

const Template = (args) => <LikeComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    onEmitEvent: (isActive) => console.log(`Liked: ${isActive}`),
};

export const PinkLarge = Template.bind({});
PinkLarge.args = {
    onEmitEvent: (isActive) => console.log(`Liked: ${isActive}`),
    color: 'pink',
    size: 40,
};
