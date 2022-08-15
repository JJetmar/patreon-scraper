import { Dataset } from 'crawlee';
import { Actor } from 'apify';

const datasets: Record<string, Dataset> = {};

export const useDataset = async <T, > (dataStoreName: string): Promise<Dataset<T>> => {
    if (!datasets[dataStoreName]) {
        datasets[dataStoreName] = await Actor.openDataset(dataStoreName);
    }
    return datasets[dataStoreName];
};
