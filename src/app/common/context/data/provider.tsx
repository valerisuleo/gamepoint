/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { IContext } from '../../interfaces';
import { IEventEmitted } from './interfaces';
import { DataContext } from './context';

export const DataProvider = ({ children }: IContext) => {
    const [event, setEvent] = useState<IEventEmitted | undefined>(undefined);

    const outputEvent = (current: IEventEmitted) => {
        setEvent(current);
    };

    return (
        <DataContext.Provider value={{ event, outputEvent }}>
            {children}
        </DataContext.Provider>
    );
};
