import * as TMDB_API from '../services/TMDB_API'
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

const useGetData = <T>(initialQueryKey: string | null, initialEndpoint: string | null) => {
    const [queryKey, setQueryKey] = useState<string | null>(initialQueryKey)
    const [endpoint, setEndpoint] = useState<string | null>(initialEndpoint)
    const {data, isError, isLoading, isSuccess, refetch} = useQuery(
        [queryKey],
        () => TMDB_API.get<T>(endpoint)
    )
    return {
        setQueryKey,
        setEndpoint,
        data,
        isError,
        isLoading,
        isSuccess,
        refetch
    }
}
export default useGetData