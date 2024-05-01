import { useQuery } from '@tanstack/react-query';
import { IGenre } from '../interfaces';
import { gameService } from '../service';

const useGenres = () => {
    const { data } = useQuery<IGenre[]>({
        queryKey: ['genres'],
        queryFn: () => getGenres(),
        staleTime: 10 * 1000,
    });

    function getGenres(): Promise<IGenre[]> {
        return gameService.get('genres').then(({ data }) => data.results);
    }

    return { genres: data };
};

export default useGenres;
