import useGetData from "./useGetData.ts";
import {MovieRes} from "../types/index.types.ts";

const useGetTrendingMovies = (timeParams: string, pageParams: string) => {
    return useGetData<MovieRes>(['movie/popular/', timeParams, pageParams], `trending/movie/${timeParams}?language=en-US&include_adult=false&page=${pageParams}`)
}

export default useGetTrendingMovies