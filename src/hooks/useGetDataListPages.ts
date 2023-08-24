import {useQuery} from "@tanstack/react-query";
import * as TMDB_API from "../services/TMDB_API.ts";
const useGetDataListPages = <T>(queryKey:( string |  number)[], resource: string, page: number) => {
	const {data, isError, isLoading, isSuccess, refetch} = useQuery(
		queryKey,
		() => TMDB_API.getDataListWithPages<T>(resource, page)
	)
    return {
			data,
			isError,
			isLoading,
			isSuccess,
			refetch
		}
}
export default useGetDataListPages