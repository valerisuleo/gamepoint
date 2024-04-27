import { ICard } from './ intefaces';

const CardComponent = ({ header, body, classes, isDarkMode }: ICard) => {
    const getClasses = () => {
        let className = 'card ';
        className += `${classes?.equalHeight && 'h-100'} ${
            isDarkMode && 'text-white bg-secondary'
        }`;

        return className;
    };
    return (
        <div className={getClasses()}>
            {header.children && (
                <div className="">{header.children}</div>
            )}

            {(body.children || body.cardTitle) && (
                <div className="card-body">
                    <h5 className="card-title">{body.cardTitle}</h5>
                    <section className="card-text">{body.children}</section>
                </div>
            )}
        </div>
    );
};

export default CardComponent;
