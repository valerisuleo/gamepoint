/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { IListGroup } from './interfaces';
import styles from './list-group.module.scss';

const ListGroupComponent = ({
    collection,
    itemKey,
    text,
    onEmitEvent,
    isHorizontal,
    isFlush,
    isDarkMode,
    noBottomBorder = false, // New prop with default value
    reset = false,
    displayOnly = false,
}: IListGroup) => {
    const [isActive, setActive] = useState(-1);

    useEffect(() => {
        if (reset) {
            setActive(-1);
        }
    }, [reset]);

    const setClasses = (index: number, item?: any) => {
        let classes = 'list-group-item list-group-item-action ';

        if (isActive === index && !displayOnly) {
            classes += 'active ';
        }

        if (item?.isDisabled) {
            classes += 'disabled ';
        }

        if (isDarkMode) {
            classes += styles['list-group-item-dark'] + ' ';
        }

        if (noBottomBorder) {
            classes += styles['no-bottom-border'] + ' '; // Assuming you add a CSS class
        }

        return classes.trim();
    };

    return (
        <ul
            className={`list-group ${
                isHorizontal ? 'list-group-horizontal ' : ''
            }${isFlush ? 'list-group-flush' : ''}`}
        >
            {collection?.map((item, i) => (
                <li
                    key={item[itemKey]}
                    onClick={() => {
                        if (!displayOnly) {
                            setActive(i);
                            onEmitEvent(item);
                        }
                    }}
                    className={setClasses(i, item)}
                    style={{ cursor: 'pointer' }}
                >
                    {item[text]}
                </li>
            ))}
        </ul>
    );
};

export default ListGroupComponent;
