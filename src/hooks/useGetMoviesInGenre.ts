import useGetData from "./useGetData.ts";
import {MovieRes} from "../types/index.types.ts";

const useGetMoviesInGenre = (genreId: number, pageParams: string) => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetData<MovieRes>(
        ['movie/genre', genreId, pageParams], `discover/movie?include_adult=false&sort_by=popularity.desc&with_genres=${genreId}&page=${pageParams}`)
    return {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    }
}

export default useGetMoviesInGenre