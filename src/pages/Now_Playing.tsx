// custom hooks
import useGetData from "../hooks/useGetData.ts";
// types
import {NowPlayingRes} from "../types/index.types.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";

const Now_Playing = () => {
    const {
        data,
        isSuccess,
        isError,
        refetch
    } = useGetData<NowPlayingRes>(['movie/now_playing'], 'movie/now_playing?region=se')

    return (
        <>

            <div className={'h2__wrap'}>
                <h2>Movies Playing In Theaters Now</h2>
            </div>
            {isSuccess && data ? (
                <C_MovieList res={data.results}/>
            ) : null}
            {isError ? (
                <div className={'data__wrap mx-4'}>
                    <C_ErrorHandle reFetch={refetch} variant={'danger'} msg={'Something went wrong, could not fetch the data. Please try again... '}/>
                </div>
            ) : null}
        </>
    )
}
export default Now_Playing