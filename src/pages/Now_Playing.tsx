// custom hooks
import useGetNowPlaying from "../hooks/useGetNowPlaying.ts";
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
    } = useGetNowPlaying()

    return (
        <div  className={'body'}>

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
        </div>
    )
}
export default Now_Playing