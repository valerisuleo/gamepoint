import { useState } from 'react';
import { IExpandableText } from './interface';
import Button from '../button/button';
import { IBtn } from '../button/interfaces';

const ExpandableTextComponent = ({ text, maxLength }: IExpandableText) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };

    const btnProps: IBtn = {
        classes: {
            contextual: 'light',
            size: 'sm',
        },
        label: isOpen ? 'Less' : 'Read more',
        onEmitEvent: toggle,
        type: 'button',
        isDarkMode: false,
    };

    // Only create a substring if the text is longer than maxLength
    const displayText =
        isOpen || text?.length <= maxLength
            ? text
            : `${text?.substring(0, maxLength)}…`;

    return (
        <div>
            <p className="p-2" style={{lineHeight: '2rem'}}>
                {displayText}
                {text?.length > maxLength && <Button {...btnProps} />}
            </p>
        </div>
    );
};

export default ExpandableTextComponent;
