/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useState } from 'react';

import CardComponent from '../../../common/library/components/cards/card';
import SpinnerComponent from '../../../common/library/components/spinner/spinner';
import ListGroupComponent from '../../../common/library/components/list-group/list-group';
import Button from '../../../common/library/components/button/button';
import SelectComponent from '../../../common/library/forms/select/select';

import {
    IListGroup,
    IListItem,
} from '../../../common/library/components/list-group/interfaces';
import { IFormCtrl } from '../../../common/library/forms/hooks/interfaces';
import { IGenre, IPlatform } from '../interfaces';
import { IEventEmitted } from '../../../common/context/data/interfaces';

import { useTheme } from '../../../common/context/theme/theme';
import { useDataContext } from '../../../common/context/data/context';
import useGames from '../hooks/useGames';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

import { getBtnProps, sortOptions } from '../config';
import { cardProps } from './components/game-card';

const GameIndex = () => {
    const { isDarkMode } = useTheme();
    const { games, isLoading, listUpdate } = useGames();
    const { event } = useDataContext();

    const { genres } = useGenres();

    const { platforms } = usePlatforms();
    const [reset, setReset] = useState(false);
    const [heading, setHeading] = useState({});
    const [filters, setFilters] = useState({
        platforms: '',
        ordering: '',
    });

    const listProps: IListGroup = {
        collection: genres || [],
        itemKey: 'id',
        text: 'name',
        isFlush: true,
        isDarkMode,
        onEmitEvent: handleSelectedGenre,
        reset: reset,
    };

    const dropDowns: IFormCtrl[] = [
        {
            name: 'platforms',
            label: 'filter by platforms',
            value: filters.platforms,
            onBlur: () => {},
            onChange: handleInputChange,
            type: 'select',
            textProp: 'name',
            valueProp: 'id',
            //@ts-expect-error
            options: platforms || [],
        },
        {
            name: 'ordering',
            label: 'order by:',
            value: filters.ordering,
            onBlur: () => {},
            onChange: handleInputChange,
            type: 'select',
            textProp: 'label',
            valueProp: 'value',
            options: sortOptions,
        },
    ];

    useEffect(() => {
        handleData(event);
    }, [event]);

    function handleData(event?: IEventEmitted): void {
        if (event) {
            const { name, data } = event;
            const obj = {
                [name]: data,
            };

            listUpdate(obj);
        }
    }

    function handleSelectedGenre(element: IListItem): void {
        const current = element as IGenre;
        listUpdate({
            genres: current?.id.toString(),
        });

        setHeading((prev) => ({ ...prev, genres: current.name }));
        setReset(false);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLSelectElement>): void {
        const { name, value } = e.target;

        setFilters((prev) => {
            const filtersUpdated = { ...prev, ...{ [name]: value } };
            return filtersUpdated;
        });

        listUpdate({
            [name]: value,
        });

        setDynamicHeading(value, name);
        setReset(false);
    }

    function setDynamicHeading(value: string, name: string): void {
        const currentPlatform = platforms?.find(
            (item: IPlatform) => item.id === +value
        );

        if (name === 'platforms') {
            setHeading((prev) => ({
                ...prev,
                platform: currentPlatform?.name,
            }));
        }
    }

    function handleResetFilters(): void {
        setFilters({
            platforms: '',
            ordering: '',
        });
        listUpdate({});
        setHeading({});
        setReset(true);
    }

    return (
        <div className="px-3">
            <h1 className="py-5">{Object.values(heading).join(' ')} Games</h1>

            <div className="row">
                <div className="col-md-2">
                    <ListGroupComponent {...listProps} />
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-even align-items-center">
                        {dropDowns?.map((item, i) => (
                            <div className="me-3 mb-4" key={i}>
                                <SelectComponent
                                    options={item.options}
                                    textProp={item.textProp}
                                    valueProp={item.valueProp}
                                    onChange={item.onChange}
                                    onBlur={item.onBlur}
                                    label={item.label}
                                    name={item.name}
                                    value={item.value}
                                    type={item.type}
                                    isDark={isDarkMode}
                                />
                            </div>
                        ))}
                        <div className="mb-2">
                            <Button {...getBtnProps(handleResetFilters)} />
                        </div>
                    </div>
                    <div className="row">
                        {isLoading ? (
                            <SpinnerComponent color={'primary'} />
                        ) : (
                            <Fragment>
                                {games?.map((item) => {
                                    const props = cardProps(item, isDarkMode);
                                    return (
                                        <div
                                            className="col-md-6 col-lg-4 mb-4"
                                            key={item.id}
                                        >
                                            <CardComponent
                                                header={props.header}
                                                body={props.body}
                                                classes={props.classes}
                                                isDarkMode={props.isDarkMode}
                                            />
                                        </div>
                                    );
                                })}
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameIndex;
