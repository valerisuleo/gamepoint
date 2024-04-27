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
}: IListGroup) => {
    const [isActive, setActive] = useState(-1);

    useEffect(() => {
        if (reset) {
            setActive(-1);
        }
    }, [reset]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setClasses = (index: number, item?: any) => {
        let classes = 'list-group-item list-group-item-action ';

        if (isActive === index) {
            classes += 'active';
        }

        if (item?.isDisabled) {
            classes += 'disabled';
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
                        setActive(i);
                        onEmitEvent(item);
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
