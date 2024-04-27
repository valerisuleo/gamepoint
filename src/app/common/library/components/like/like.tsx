/* eslint-disable no-sequences */
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { ILike } from './interfaces';

const LikeComponent = ({ color, size, onEmitEvent }: ILike) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        const newActiveState = !isActive;
        setActive(newActiveState);
        onEmitEvent(newActiveState);
    };

    const props = {
        cursor: 'pointer',
        color: color || 'red',
        size: size || 20,
        onClick: handleClick,
    };

    return (
        <div>
            {isActive ? (
                <FaHeart {...props} data-testid="liked-icon" />
            ) : (
                <FaRegHeart {...props} data-testid="unliked-icon" />
            )}
        </div>
    );
};

export default LikeComponent;
