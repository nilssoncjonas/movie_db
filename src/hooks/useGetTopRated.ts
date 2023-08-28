import useGetData from "./useGetData.ts";
import {MovieRes} from "../types/index.types.ts";

const useGetTopRated = (pageParams: string) => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetData<MovieRes>(['movie/top_rated', pageParams], `movie/top_rated?page=${pageParams}&region=se`)
    return {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    }
}

export default useGetTopRated