import useGetData from "./useGetData.ts";
import {MovieRes} from "../types/index.types.ts";

const useGetSearch = (queryParam: string,  pageParams: string) => {
    return useGetData<MovieRes>(['search/', queryParam, pageParams], `search/movie?query=${queryParam}&include_adult=false&language=en-US&page=${pageParams}`)
}

export default useGetSearch