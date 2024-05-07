/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { gameService } from '../service';
import { IGame, IPlatform } from '../interfaces';
import ms from 'ms';

const useGame = (id: string) => {
    const { data, isLoading, error } = useQuery<IGame>({
        queryKey: ['game', id],
        queryFn: () => getGame(id),
        staleTime: ms('24h'),
    });

    function getGame(gameId: string): Promise<IGame> {
        return gameService.get(`games/${gameId}`).then((response) => {
            const game: IGame = response.data;
            const result = {
                ...game,
                parent_platforms: response.data.parent_platforms.map(
                    (item: IPlatform) => ({
                        id: item.platform.id,
                        name: item.platform.name,
                    })
                ),
            };

            return result;
        });
    }

    return { game: data, isLoading, error };
};

export default useGame;
