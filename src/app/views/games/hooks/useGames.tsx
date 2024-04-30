/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { IGame } from '../interfaces';
import { gameService } from '../service';
import { iconMap } from '../../../common/utilities';

const useGames = () => {
    const [games, setGames] = useState<IGame[]>([]);
    const [isLoading, setSpinner] = useState(false);

    useEffect(() => {
        getGames();
    }, []);

    async function getGames(params?: Record<string, any>): Promise<void> {
        try {
            setSpinner(true);
            const promise = gameService.get('games', params);
            const { data } = await promise;
            setGames(addIconProp(data.results));
        } catch (error) {
            console.log(error);
        } finally {
            setSpinner(false);
        }
    }

    function updatList(current: any): void {
        getGames({ genres: current.id });
    }

    function addIconProp(list: IGame[]): IGame[] {
        return list.map((element: IGame) => {
            return {
                ...element,
                parent_platforms: element.parent_platforms.map((item) => ({
                    ...item['platform'],
                    //@ts-expect-error
                    icon: iconMap[item['platform'].slug] || '',
                })),
            };
        });
    }

    return { games, isLoading, updatList };
};

export default useGames;
