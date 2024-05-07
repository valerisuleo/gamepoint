import React from 'react';
import BadgeComponent from '../../../common/library/components/badges/badge';
import { IGame } from '../interfaces';

const Metacritic = (props: IGame) => {
    return (
        <BadgeComponent
            label={props.metacritic?.toString() || ''}
            classes={{
                contextual:
                    props.metacritic || 0 >= 90
                        ? 'success'
                        : props.metacritic || 0 >= 60
                        ? 'warning'
                        : 'danger',
            }}
        />
    );
};

export default Metacritic;
