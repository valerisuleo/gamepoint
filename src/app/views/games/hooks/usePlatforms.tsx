import { useQuery } from '@tanstack/react-query';
import { IPlatform } from '../interfaces';
import { gameService } from '../service';

const usePlatforms = () => {
    const { data } = useQuery<IPlatform[]>({
        queryKey: ['platforms'],
        queryFn: () => getPlatforms(),
        staleTime: 10 * 1000,
    });

    function getPlatforms(): Promise<IPlatform[]> {
        return gameService.get('platforms').then(({ data }) => data.results);
    }

    return { platforms: data };
};

export default usePlatforms;
