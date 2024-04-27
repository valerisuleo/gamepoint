import { ReactNode } from 'react';
import { IDarkMode } from '../../../interfaces';

export interface Card {
    header: {
        children: ReactNode;
    };
    body: {
        cardTitle?: string;
        children: ReactNode;
    };
    classes?: {
        equalHeight: boolean;
    };
}

export type ICard = Card & IDarkMode;
