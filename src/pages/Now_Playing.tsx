// custom hooks
import useGetData from "../hooks/useGetData.ts";
// types
import {NowPlayingRes} from "../types/index.types.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";

const Now_Playing = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetData<NowPlayingRes>(['movie/now_playing'], 'movie/now_playing?region=se')

    return (
        <>

            <div className={'h2__wrap'}>
                <h2>Movies Playing In Theaters Now</h2>
            </div>
            {isLoading && <C_Placeholder_loading/>}
            {isSuccess && data ? (
                <C_MovieList res={data.results}/>
            ) : null}
            {isError ? (
                <C_ErrorHandle reFetch={refetch} variant={'danger'}
                               msg={'Something went wrong when fetching the movies that are playing now. Please try again... '}/>
            ) : null}
        </>
    )
}
export default Now_Playing