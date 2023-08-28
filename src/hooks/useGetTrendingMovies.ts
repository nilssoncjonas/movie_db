import useGetData from "./useGetData.ts";
import {MovieRes} from "../types/index.types.ts";

const useGetTrendingMovies = (timeParams: string, pageParams: string) => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        isFetching, refetch
    } = useGetData<MovieRes>(['movie/popular/', timeParams, pageParams], `trending/movie/${timeParams}?language=en-US&include_adult=false&page=${pageParams}`)
    return {
        data,
        isLoading,
        isSuccess,
        isError,
        isFetching, refetch
    }
}

export default useGetTrendingMovies