/* eslint-disable @typescript-eslint/no-explicit-any */
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
        // First API call to get game details
        return gameService.get(`games/${gameId}`).then((response) => {
            const game: IGame = response.data;
            const gameWithPlatforms = {
                ...game,
                parent_platforms: response.data.parent_platforms.map(
                    (item: IPlatform) => ({
                        id: item.platform.id,
                        name: item.platform.name,
                    })
                ),
            };

            return getGameTrailer(gameId, gameWithPlatforms);
        });
    }

    function getGameTrailer(gameId: string, gameWithPlatforms: IGame) {
        return gameService.get(`games/${gameId}/movies`).then((response) => {
            const movies = response.data;

            return getGameScreenshots(gameId, gameWithPlatforms, movies);
        });
    }

    function getGameScreenshots(
        gameId: string,
        gameWithPlatforms: IGame,
        movies: any
    ) {
        return gameService
            .get(`games/${gameId}/screenshots`)
            .then((response) => {
                const screenshots = response.data.results.slice(0, 4);
                return {
                    ...gameWithPlatforms,
                    movies,
                    screenshots,
                };
            });
    }

    return { game: data, isLoading, error };
};

export default useGame;
