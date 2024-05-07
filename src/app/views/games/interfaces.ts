/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IGame {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: IPlatform[];
    genres: IGenre[];
    slug?: string;
    description_raw?: string;
    publishers?: [];
    metacritic?: number
}

export interface IGenre {
    id: number;
    name: string;
    background_image: string;
    games: IGame[];
}

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
    games_count?: number;
    image_background?: string;
    image?: null | string;
    year_start?: null | number;
    year_end?: null | number;
    games?: IGame[];
    icon?: any;
    platform?: any
}

export interface IGameHeader {
    platforms: any[];
    filters: IGameFilters;
}

interface IGameFilters {
    platforms: string;
    ordering: string;
}