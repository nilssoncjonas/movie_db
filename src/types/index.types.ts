import {Dates, MovieResult} from "./movie.types"
import {ActorResult, Person} from "./person.types"

export * from './movie.types'
export * from './person.types'

export type NowPlayingRes = MovieRes & {
    dates: Dates;
}

export type MovieRes =  {
    page: number;
    results: MovieResult[];
    total_pages: number;
    total_results: number;
}

export type ActorRes =  {
    page: number;
    results: ActorResult[];
    total_pages: number;
    total_results: number;
}

export type PersonRes = {
    page: number;
    results: Person[];
    total_pages: number;
    total_results: number;
}


// genre/movie/list
export type Genre = {
    id: number;
    name: string;
}

export type GenreList = {
    genres: Genre[];
}