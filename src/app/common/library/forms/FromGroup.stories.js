import React from 'react';
import FromGroup from './form-group'; // Adjust the import path as needed

// This default export determines where your story goes in the story list
export default {
    title: 'FromGroup',
    component: FromGroup,
};

const Template = (args) => <FromGroup {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   // props to pass to your FromGroup, if any
// };
