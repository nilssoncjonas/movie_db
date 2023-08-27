import {Credits, Crew, Genre, MovieRes} from "./index.types.ts";


// movie lists
export type MovieResult = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export type Dates = {
    maximum: string;
    minimum: string;
}


// /movie/:id
export type MovieDetails = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    } | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credits: Credits;
    similar: MovieRes;
    crew: Crew[];

}
export type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}
export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
}
export type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
}