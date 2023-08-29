import useGetData from "./useGetData.ts";
import {GenreList} from "../types/index.types.ts";

const useGetGenre = () => {
    return useGetData<GenreList>(['genres/'], 'genre/movie/list?&language=en')
}

export default useGetGenre