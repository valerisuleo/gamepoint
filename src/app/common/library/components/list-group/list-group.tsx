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
    reset = false,
    displayOnly = false, // Added optional prop with default value
}: IListGroup) => {
    const [isActive, setActive] = useState(-1);

    useEffect(() => {
        if (reset) {
            setActive(-1);
        }
    }, [reset]);

    const setClasses = (index: number, item?: any) => {
        let classes = 'list-group-item list-group-item-action ';

        if (isActive === index && !displayOnly) { // Check displayOnly before adding 'active'
            classes += 'active ';
        }

        if (item?.isDisabled) {
            classes += 'disabled ';
        }

        if (isDarkMode) {
            classes += styles['list-group-item-dark'];
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
                        if (!displayOnly) { // Only change active item if not displayOnly
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
