import useGetData from "./useGetData.ts";
import { MovieRes } from "../types/index.types.ts";

const useGetTopRated = (pageParams: string) => {
	return useGetData<MovieRes>(['movie/top_rated/', pageParams], `movie/top_rated?page=${pageParams}&region=se`)
}

export default useGetTopRated