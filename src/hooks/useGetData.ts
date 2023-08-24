import * as TMDB_API from '../services/TMDB_API'
import {useQuery} from "@tanstack/react-query";

const useGetData = <T>(queryKey:( string |  number)[], resource: string) => {
    const {data, isError, isLoading, isSuccess, refetch} = useQuery(
        queryKey,
        () => TMDB_API.get<T>(resource)
    )
    return {
        data,
        isError,
        isLoading,
        isSuccess,
        refetch
    }
}
export default useGetData