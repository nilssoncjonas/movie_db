import useGetData from "./useGetData.ts";
import {GenreList} from "../types/index.types.ts";

const useGetGenre = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetData<GenreList>(['genres/'], 'genre/movie/list?&language=en')
    return {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    }
}

export default useGetGenre