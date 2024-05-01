import { useQuery } from '@tanstack/react-query';
import { IPlatform } from '../interfaces';
import { gameService } from '../service';
import ms from 'ms';

const usePlatforms = () => {
    const { data } = useQuery<IPlatform[]>({
        queryKey: ['platforms'],
        queryFn: () => getPlatforms(),
        staleTime: ms('24h'),
    });

    function getPlatforms(): Promise<IPlatform[]> {
        return gameService.get('platforms').then(({ data }) => data.results);
    }

    return { platforms: data };
};

export default usePlatforms;
