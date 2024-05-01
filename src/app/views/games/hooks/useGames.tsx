/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { IGame } from '../interfaces';
import { gameService } from '../service';
import { iconMap } from '../../../common/utilities';
import { useQuery } from '@tanstack/react-query';

const useGames = () => {
    const [query, setQuery] = useState({});
    const { data, isLoading } = useQuery<IGame[]>({
        queryKey: ['games', query],
        queryFn: () => getGames(query),
        staleTime: 10 * 1000,
    });

    function getGames(params?: Record<string, any>): Promise<IGame[]> {
        return gameService
            .get('games', params)
            .then(({ data }) => addIconProp(data.results));
    }

    function listUpdate(current: any): void {
        if (Object.values(current).length) {
            setQuery((prevQuery) => {
                const newQuery = { ...prevQuery, ...current };
                return newQuery;
            });
        } else {
            setQuery({});
        }
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

    return { games: data, isLoading, listUpdate };
};

export default useGames;
