import React from 'react';
import ExpandableTextComponent from './expandable-text';

export default {
    title: 'Components/Expandable Text',
    component: ExpandableTextComponent,
};

const Template = (args) => <ExpandableTextComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'This is a sample text that is long enough to be truncated by the ExpandableTextComponent. It demonstrates how the component behaves with longer text content.',
    maxLength: 50,
};

export const ShortText = Template.bind({});
ShortText.args = {
    text: 'Short text',
    maxLength: 50,
};

export const NoText = Template.bind({});
NoText.args = {
    text: '',
    maxLength: 50,
};
