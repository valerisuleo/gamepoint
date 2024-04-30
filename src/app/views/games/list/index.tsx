/* eslint-disable @typescript-eslint/no-explicit-any */
import CardComponent from '../../../common/library/components/cards/card';
import { cardProps } from '../config';
import { useTheme } from '../../../common/context/theme/theme';
import useGames from '../hooks/useGames';
import { Fragment } from 'react';
import SpinnerComponent from '../../../common/library/components/spinner/spinner';
import useGenres from '../hooks/useGenres';
import ListGroupComponent from '../../../common/library/components/list-group/list-group';
import {
    IListGroup,
    IListItem,
} from '../../../common/library/components/list-group/interfaces';

const GameIndex = () => {
    const { isDarkMode } = useTheme();
    const { games, isLoading, updatList } = useGames();
    const { genres } = useGenres();

    const listProps: IListGroup = {
        collection: genres,
        itemKey: 'id',
        text: 'name',
        isFlush: true,
        isDarkMode,
        onEmitEvent: handleSelectedGenre,
    };

    function handleSelectedGenre(current: IListItem) {
        updatList(current);
    }

    return (
        <div>
            <h1 className="my-5">GameIndex</h1>
            <div className="row">
                <div className="col-md-2">
                    <ListGroupComponent {...listProps} />
                </div>
                <div className="col-md-10">
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
