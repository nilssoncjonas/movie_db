import useGetData from "./useGetData.ts";
import { MovieRes } from "../types/index.types.ts";

const useGetMoviesInGenre = (genreId: number, pageParams: string) => {
	return useGetData<MovieRes>(
		['movie/genre/', genreId, pageParams], `discover/movie?include_adult=false&sort_by=popularity.desc&with_genres=${genreId}&page=${pageParams}`)

}

export default useGetMoviesInGenre