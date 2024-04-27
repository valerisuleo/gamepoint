import { useState } from 'react';

export interface IExpandableText {
    text?: string;
    maxLength: number;
}

const ExpandableTextComponent = ({ text, maxLength }: IExpandableText) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };

    // Only create a substring if the text is longer than maxLength
    const displayText =
        isOpen || text?.length <= maxLength ? text : `${text?.substring(0, maxLength)}…`;

    return (
        <div>
            <h1>Welcome to ExpandableText!</h1>
            <p className="p-2">
                {displayText}
                {text?.length > maxLength && (
                    <button
                        className="btn btn-light btn-sm"
                        onClick={toggle}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? 'Less' : 'Read more'}
                    </button>
                )}
            </p>
        </div>
    );
};

export default ExpandableTextComponent;
