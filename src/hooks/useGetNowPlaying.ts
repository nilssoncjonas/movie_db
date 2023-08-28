import useGetData from "./useGetData.ts";
import {NowPlayingRes} from "../types/index.types.ts";

const useGetNowPlaying = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetData<NowPlayingRes>(['movie/now_playing'], 'movie/now_playing?region=se')
    return {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    }
}

export default useGetNowPlaying