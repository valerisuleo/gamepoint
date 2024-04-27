import { IconProps } from './interfaces';

const IconComponent = ({ color, size, cursor, Icon }: IconProps) => {
    const props = {
        color,
        size,
        cursor,
    };
    return <Icon {...props} />;
};

export default IconComponent;
