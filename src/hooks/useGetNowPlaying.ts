import useGetData from "./useGetData.ts";
import { NowPlayingRes } from "../types/index.types.ts";

const useGetNowPlaying = (pageParams: string) => {
	return useGetData<NowPlayingRes>(['movie/now_playing/', pageParams], `movie/now_playing?language=en-US&page=${pageParams}`)
	
}

export default useGetNowPlaying