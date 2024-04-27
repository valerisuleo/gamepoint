import React, { useState } from 'react';
import AlertsComponent from './alerts';

export default {
    title: 'Components/Alert',
    component: AlertsComponent,
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
        classes: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
        },
    },
};
const Template = (args) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        if (args.onClose) {
            args.onClose();
        }
    };

    const alertArgs = {
        ...args,
        onClose: handleClose,
        children: args.children || (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
                facilisis justo mollis, auctor consequat urna.
            </p>
        ),
    };

    return <div>{isOpen && <AlertsComponent {...alertArgs} />}</div>;
};

export const Default = Template.bind({});
Default.args = {
    classes: 'primary',
};
