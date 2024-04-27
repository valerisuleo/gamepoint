import { IBadge } from './interfaces';

const BadgeComponent = ({ label, classes }: IBadge) => {
    return <span className={`badge bg-${classes.contextual}`}>{label}</span>;
};

export default BadgeComponent;
