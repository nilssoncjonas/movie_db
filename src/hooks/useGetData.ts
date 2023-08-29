import * as TMDB_API from '../services/TMDB_API'
import { useQuery } from "@tanstack/react-query";

const useGetData = <T>(queryKey: (string | number)[], resource: string) => {

	return useQuery(queryKey, () => TMDB_API.get<T>(resource), {
		keepPreviousData: true
	})
}
export default useGetData