/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-empty */
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ListGroupComponent from '../../../common/library/components/list-group/list-group';
import { IListGroup } from '../../../common/library/components/list-group/interfaces';
import { useTheme } from '../../../common/context/theme/theme';
import ExpandableTextComponent from '../../../common/library/components/expandable-text/expandable-text';
import { Fragment } from 'react';
import Metacritic from '../components/metacritic';

function GameShow() {
    const gameId = useParams()?.id;
    const { game } = useGame(gameId!);
    const { isDarkMode } = useTheme();

    // console.log(game);

    const listProps: IListGroup = {
        collection: [],
        itemKey: 'id',
        text: 'name',
        isFlush: true,
        displayOnly: true,
        isDarkMode,
        onEmitEvent: () => {},
    };

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <Fragment>
            {game ? (
                <div className="p-3">
                    <h1 className="my-4">{game.name}</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <ExpandableTextComponent
                                text={game.description_raw || ''}
                                maxLength={300}
                            />
                            <div className="row my-5">
                                <div className="col-6">
                                    <h4>Platforms</h4>
                                    <ListGroupComponent
                                        {...listProps}
                                        collection={game.parent_platforms!}
                                    />
                                </div>
                                <div className="col-6">
                                    <h4>Metascore</h4>
                                    <Metacritic {...game} />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-6">
                                    <h4>Genres</h4>
                                    <ListGroupComponent
                                        {...listProps}
                                        collection={game.genres!}
                                    />
                                </div>
                                <div className="col-6">
                                    <h4>Publisher</h4>
                                    <ListGroupComponent
                                        {...listProps}
                                        collection={game.publishers!}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
}

export default GameShow;
