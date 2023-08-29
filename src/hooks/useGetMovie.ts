import useGetData from "./useGetData.ts";
import {MovieDetails} from "../types/movie.types.ts";

const useGetMovie = (movieId: number, ) => {
   return useGetData<MovieDetails>(['movie/', `${movieId}`], `movie/${movieId}&?append_to_response=credits,similar`)
}

export default useGetMovie