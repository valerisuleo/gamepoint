import { useEffect, useState } from 'react';
import { IPlatform } from '../interfaces';
import { gameService } from '../service';

const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<IPlatform[]>([]);

    useEffect(() => {
        getPlatforms();
    }, []);

    async function getPlatforms() {
        try {
            const promise = gameService.get('platforms');
            const { data } = await promise;
            setPlatforms(data.results);
        } catch (error) {
            console.log('oops! something wrong with platfroms...', error);
        }
    }

    return { platforms };
};

export default usePlatforms;
