import useGetData from "./useGetData.ts";
import {MovieDetails} from "../types/movie.types.ts";

const useGetMovie = (movieId: number, ) => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetData<MovieDetails>(['movie/', `${movieId}`], `movie/${movieId}&?append_to_response=credits,similar`)
    return {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    }
}

export default useGetMovie