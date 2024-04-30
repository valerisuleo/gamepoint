/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CardComponent from '../../../common/library/components/cards/card';
import { cardProps, sortOptions } from '../config';
import { useTheme } from '../../../common/context/theme/theme';
import useGames from '../hooks/useGames';
import { Fragment, useState } from 'react';
import SpinnerComponent from '../../../common/library/components/spinner/spinner';
import useGenres from '../hooks/useGenres';
import ListGroupComponent from '../../../common/library/components/list-group/list-group';
import {
    IListGroup,
    IListItem,
} from '../../../common/library/components/list-group/interfaces';
import { IFormCtrl } from '../../../common/library/forms/hooks/interfaces';
import usePlatforms from '../hooks/usePlatforms';
import SelectComponent from '../../../common/library/forms/select/select';
import { IGenre } from '../interfaces';
import Button from '../../../common/library/components/button/button';
import { IBtn } from '../../../common/library/components/button/interfaces';

const GameIndex = () => {
    const { isDarkMode } = useTheme();
    const { games, isLoading, listUpdate } = useGames();
    const { genres } = useGenres();
    const { platforms } = usePlatforms();
    const [reset, setReset] = useState(false);
    const [filters, setFilters] = useState({
        platforms: '',
        ordering: '',
    });

    const btnProps: IBtn = {
        classes: {
            contextual: 'secondary',
            size: 'md',
        },
        isDarkMode: false,
        type: 'button',
        label: 'Reset',
        onEmitEvent: handleResetFilters,
    };

    const listProps: IListGroup = {
        collection: genres,
        itemKey: 'id',
        text: 'name',
        isFlush: true,
        isDarkMode,
        onEmitEvent: handleSelectedGenre,
        reset: reset
    };

    const data: IFormCtrl[] = [
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
            options: platforms,
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

    function handleSelectedGenre(element: IListItem) {
        const current = element as IGenre;
        listUpdate({
            genres: current?.id.toString(),
        });
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

        listProps.reset = true;

        console.log(name, value);
    }

    function handleResetFilters() {
        setFilters({
            platforms: '',
            ordering: '',
        });
        listUpdate({});
        setReset(true);
    }

    return (
        <div>
            <h1 className="my-5">GameIndex</h1>

            <div className="row">
                <div className="col-md-2">
                    <ListGroupComponent {...listProps} />
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-even align-items-center">
                        {data?.map((item, i) => (
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
                            <Button {...btnProps} />
                        </div>
                    </div>
                    <div className="row">
                        {isLoading ? (
                            <SpinnerComponent color={'primary'} />
                        ) : (
                            <Fragment>
                                {games.map((item) => {
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
