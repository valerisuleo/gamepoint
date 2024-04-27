import { useEffect, useState } from 'react';
import { IGame } from '../interfaces';
import { gameService } from '../service';

const useGames = () => {
    const [games, setGames] = useState<IGame[]>([]);
    const [isLoading, setSpinner] = useState(false);

    useEffect(() => {
        getGames();
    }, []);

    async function getGames(): Promise<void> {
        try {
            setSpinner(true);
            const promise = gameService.get('games');
            const { data } = await promise;
            setGames(data.results);
        } catch (error) {
            console.log(error);
        } finally {
            setSpinner(false);
        }
    }

    return { games, isLoading };
};

export default useGames;
