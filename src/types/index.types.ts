import {Dates, MovieResult} from "./movie.types"

export * from './movie.types'
export * from './person.types'

export type NowPlayingRes = MovieRes & {
	dates: Dates
}

export type MovieRes = {
	page: number
	results: MovieResult[]
	total_pages: number
	total_results: number
}

export type Genre = {
	id: number
	name: string
}

export type GenreList = {
	genres: Genre[]
}

export type MovieHistory = {
	id: number,
	title: string,
	poster_path: string
}
export type PersonHistory = {
	id: number,
	name: string,
	profile_path: string
}

export type CollectionHistory = {
	id: number,
	name: string,
	poster_path: string,

}