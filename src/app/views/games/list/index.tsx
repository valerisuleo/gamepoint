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
import { IBtn } from '../../../common/library/components/button/interfaces';

const GameIndex = () => {
    const { isDarkMode } = useTheme();
    const { event } = useDataContext();
    const { genres } = useGenres();
    const { platforms } = usePlatforms();
    const { games, isLoading, listUpdate, fetchNextPage, isFetchingNextPage } =
        useGames();

    const [reset, setReset] = useState(false);
    const [heading, setHeading] = useState({});
    const [filters, setFilters] = useState({
        platforms: '',
        ordering: '',
    });
    const [btnProps, setBtnProps] = useState<IBtn>({
        type: 'button',
        label: 'Load more...',
        isDarkMode,
        onEmitEvent: fetchNextPage,
        classes: {
            contextual: 'primary',
            size: 'lg',
        },
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
            onChange: handleSelectChange,
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
            onChange: handleSelectChange,
            type: 'select',
            textProp: 'label',
            valueProp: 'value',
            options: sortOptions,
        },
    ];

    useEffect(() => {
        handleData(event);
    }, [event]);

    useEffect(() => {
        setBtnProps((prevState) => ({
            ...prevState,
            classes: {
                ...prevState.classes,
                contextual: isDarkMode ? 'light' : 'dark',
            },
        }));
    }, [isDarkMode]);

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

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void {
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

    const flattenedData = games?.pages?.flat() || [];

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
                        {isLoading || isFetchingNextPage ? (
                            <SpinnerComponent color={'primary'} />
                        ) : (
                            <Fragment>
                                {flattenedData?.map((item) => {
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
                    <div className="my-5 d-flex justify-content-center">
                        <Button {...btnProps} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameIndex;
