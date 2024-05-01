import { useQuery } from '@tanstack/react-query';
import { IGenre } from '../interfaces';
import { gameService } from '../service';
import ms from 'ms';

const useGenres = () => {
    const { data } = useQuery<IGenre[]>({
        queryKey: ['genres'],
        queryFn: () => getGenres(),
        staleTime: ms('24h'),
    });

    function getGenres(): Promise<IGenre[]> {
        return gameService.get('genres').then(({ data }) => data.results);
    }

    return { genres: data };
};

export default useGenres;
