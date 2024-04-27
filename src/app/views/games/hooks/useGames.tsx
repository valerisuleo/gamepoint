import { useEffect, useState } from 'react';
import { IGame } from '../interfaces';
import { gameService } from '../service';

const useGames = () => {
    const [games, setGames] = useState<IGame[]>([]);

    useEffect(() => {
        getGames();
    }, []);

    async function getGames(): Promise<void> {
        const promise = gameService.get('games');
        const { data } = await promise;
        setGames(data.results);
        console.log(data);
    }

    return { games };
};

export default useGames;
