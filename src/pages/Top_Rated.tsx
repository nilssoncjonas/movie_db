import {useSearchParams} from "react-router-dom";
// hooks
import useGetTopRated from "../hooks/useGetTopRated.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_Pagination from "../components/C_Pagination.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";


const Top_Rated = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageParams = searchParams.get('page') ?? '1'

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetTopRated(pageParams)

    const prevPage = () => {
        setSearchParams({page: String(Number(pageParams) - 1)})
    }
    const nextPage = () => {
        setSearchParams({page: String(Number(pageParams) + 1)})
    }

    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Top Rated Movies</h2>
            </div>
            {isLoading && <C_Placeholder_loading/>}

            {isSuccess && data ? (
                <>
                    <div className={'text-center'}>
                        <p>{new Intl.NumberFormat('se-SV').format(data.total_results)} Result</p>
                        <C_Pagination
                            page={data.page}
                            total_pages={data.total_pages}
                            hasPrevPage={data.page > 1}
                            hasNextPage={data.page < data.total_pages}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
                    </div>
                    <C_MovieList res={data.results}/>
                    <C_Pagination
                        page={data.page}
                        total_pages={data.total_pages}
                        hasPrevPage={data.page > 1}
                        hasNextPage={data.page < data.total_pages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />
                </>
            ) : null}

            {isError ? (
                <C_ErrorHandle reFetch={refetch} variant={'danger'}
                               msg={'Something went wrong when fetching the Top Rated movies. Please try again... '}/>
            ) : null}

        </>
    )
}

export default Top_Rated