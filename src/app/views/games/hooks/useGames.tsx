/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { IGame } from '../interfaces';
import { gameService } from '../service';
import { iconMap } from '../../../common/utilities';
import { useInfiniteQuery } from '@tanstack/react-query';

const useGames = () => {
    const [query, setQuery] = useState({});
    const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
        useInfiniteQuery<IGame[]>({
            queryKey: ['games', query],
            queryFn: ({ pageParam = 1 }) => getGames(pageParam),
            keepPreviousData: true,
            staleTime: 24 * 60 * 60 * 1000, // 24h
            getNextPageParam: (lastPage, allPages) => {
                // return the nextPage number 1 -> 2
                return lastPage.length ? allPages.length + 1 : undefined;
            },
        });

    function getGames(pageParam?: number): Promise<IGame[]> {
        const params = { ...query, page: pageParam };
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

    return {
        games: data,
        isLoading,
        listUpdate,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    };
};

export default useGames;
