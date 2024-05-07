/* eslint-disable react/jsx-no-useless-fragment */
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
import styles from './show.module.scss';
import { imgResizer } from '../../../common/utils/utilities';

function GameShow() {
    const gameId = useParams()?.id;
    const { game } = useGame(gameId!);
    const { isDarkMode } = useTheme();

    const listProps: IListGroup = {
        collection: [],
        itemKey: 'id',
        text: 'name',
        isFlush: true,
        displayOnly: true,
        isDarkMode,
        noBottomBorder: true,
        onEmitEvent: () => {},
    };

    console.log(game);

    return (
        <Fragment>
            {game ? (
                <div className="p-3">
                    <h1 className="my-4">{game.name}</h1>
                    <div className="row">
                        <div className="col-md-12 col-lg-6 animate__animated animate__slideInLeft">
                            <ExpandableTextComponent
                                text={game.description_raw || ''}
                                maxLength={900}
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
                        <div className="col-md-12 col-lg-6 animate__animated animate__slideInRight">
                            {game.movies.results.length ? (
                                <video
                                    src={game.movies.results[0].data[480]}
                                    poster={game.movies.results[0].preview}
                                    controls
                                    className={styles['media-container']}
                                />
                            ) : (
                                <img
                                    src={game.background_image}
                                    alt={`${game.name} poster`}
                                    className={styles['media-container']}
                                />
                            )}
                            <div className="row pt-4">
                                {game.screenshots.map((item) => (
                                    <div className="col-md-6 pb-4">
                                        <img
                                            src={imgResizer(item.image)}
                                            alt={`${game.name} poster`}
                                            className={
                                                styles['media-container']
                                            }
                                            key={item.id}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
}

export default GameShow;
