import { useEffect, useState } from 'react';
import { IGenre } from '../interfaces';
import { gameService } from '../service';

const useGenres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        getGenres();
    }, []);

    function getGenres(): void {
        gameService.get('genres').then(({ data }) => {
            setGenres(data.results);
        });
    }

    
    return { genres };
};

export default useGenres;
