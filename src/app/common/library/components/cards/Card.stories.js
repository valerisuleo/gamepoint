import React from 'react';
import CardComponent from './card';

export default {
    title: 'Components/Card',
    component: CardComponent,
    tags: ['autodocs'],
    argTypes: {
        headerContent: { control: 'text', name: 'Header Content' },
        cardTitle: { control: 'text', name: 'Card Title' },
        bodyContent: { control: 'text', name: 'Body Content' },
        equalHeight: { control: 'boolean', name: 'Equal Height' },
        isDarkMode: { control: 'boolean', name: 'Dark Mode' },
    },
};

const Template = ({
    headerContent,
    cardTitle,
    bodyContent,
    equalHeight,
    isDarkMode,
}) => {
    const classes = {
        equalHeight,
    };
    const header = {
        children: headerContent,
    };
    const body = {
        children: bodyContent,
        cardTitle,
    };

    return (
        <div style={{ width: '18rem' }}>
            <CardComponent
                header={header}
                body={body}
                classes={classes}
                isDarkMode={isDarkMode}
            />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    headerContent: <h2 className='m-3'>Card Header</h2>,
    cardTitle: 'Card Title',
    bodyContent:
        'Hendrerit iusto nostrud quidem doloribus ducimus ullamcorper rem, nisi nemo amet exercitation temporibus non sapiente accumsan sem doloremque? Viverra augue, consectetuer dolores earum consequatur pulvinar anim ac',
    equalHeight: false,
    isDarkMode: false,
};
