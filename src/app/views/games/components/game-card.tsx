/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICard } from '../../../common/library/components/cards/ intefaces';
import IconComponent from '../../../common/library/components/icon/icon';
import { imgResizer } from '../../../common/utilities';
import { IGame } from '../interfaces';
import Metacritic from './metacritic';

export const cardProps = (game: IGame, isDarkMode: boolean): ICard => {
    return {
        header: {
            children: (
                <img
                    src={imgResizer(game.background_image)}
                    className="card-img-top"
                    alt="..."
                />
            ),
        },
        body: {
            cardTitle: `${game.name}`,
            children: (
                <div className="d-flex justify-content-between">
                    <div>
                        {game.parent_platforms.map(
                            (platform: any, index: any) => {
                                const Icon = platform.icon;
                                return Icon ? (
                                    <span className="px-2" key={index}>
                                        <IconComponent
                                            color=""
                                            size={20}
                                            cursor="pointer"
                                            Icon={Icon}
                                        />
                                    </span>
                                ) : null;
                            }
                        )}
                    </div>
                    <div>
                        <Metacritic {...game} />
                    </div>
                </div>
            ),
        },
        classes: {
            equalHeight: true,
        },
        isDarkMode,
    };
};
