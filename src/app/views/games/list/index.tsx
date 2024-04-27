import React, { useEffect, useState } from 'react';
import { IGame } from '../interfaces';
import { gameService } from '../service';
import CardComponent from '../../../common/library/components/cards/card';
import { cardProps } from '../config';
import { useTheme } from '../../../common/context/theme/theme';

const GameIndex = () => {
    const [games, setGames] = useState<IGame[]>([]);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        getGames();
    }, []);

    async function getGames(): Promise<void> {
        const promise = gameService.get('games');
        const { data } = await promise;
        setGames(data.results);
        console.log(data);
    }

    return (
        <div>
            <h1 className="my-5">GameIndex</h1>
            <div className="row">
                <div className="col-md-2">Side</div>
                <div className="col-md-10">
                    <div className="row">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameIndex;
