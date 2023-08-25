import {useQuery} from "@tanstack/react-query";
import * as TMDB_API from "../services/TMDB_API.ts";
const useGetDataListPages = <T>(queryKey: (string | number)[], resource: string, page: string) => {
	return useQuery(queryKey,() => TMDB_API.getDataListWithPages<T>(resource, page))
}
export default useGetDataListPages