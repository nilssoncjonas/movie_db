import useGetData from "./useGetData.ts";
import {NowPlayingRes} from "../types/index.types.ts";

const useGetNowPlaying = () => {
 return useGetData<NowPlayingRes>(['movie/now_playing/'], 'movie/now_playing?region=us')
    
}

export default useGetNowPlaying