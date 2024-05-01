/* eslint-disable @typescript-eslint/no-explicit-any */

import { IBtn } from '../../common/library/components/button/interfaces';

export const sortOptions = [
    {
        value: 'name',
        label: 'Name',
    },
    {
        value: '-added',
        label: 'Date added',
    },
    {
        value: '-released',
        label: 'Date released',
    },
    {
        value: '-metacritic',
        label: 'Popularity',
    },
    {
        value: '-rating',
        label: 'Average rating',
    },
];

export const getBtnProps = (handleResetFilters: () => void): IBtn => ({
    classes: {
        contextual: 'secondary',
        size: 'md',
    },
    isDarkMode: false,
    type: 'button',
    label: 'Reset',
    onEmitEvent: handleResetFilters,
});
