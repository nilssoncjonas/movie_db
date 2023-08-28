import {MovieRes} from "../types/index.types.ts";
import {useParams, useSearchParams} from "react-router-dom";
// hooks
import useGetData from "../hooks/useGetData.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_Pagination from "../components/C_Pagination.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";

const Single_Genre = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageParams = searchParams.get('page') ?? '1'

    const {id} = useParams()
    const genreId = Number(id)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetData<MovieRes>(
        ['movie/genre', genreId, pageParams], `discover/movie?include_adult=false&sort_by=popularity.desc&with_genres=${genreId}&page=${pageParams}`)
    const prevPage = () => {
        setSearchParams({page: String(Number(pageParams) - 1)})
    }
    const nextPage = () => {
        setSearchParams({page: String(Number(pageParams) + 1)})
    }

    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Movies By Genre</h2>
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
                            hasNextPage={data.page + 1 < data.total_pages}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
                    </div>

                    <C_MovieList res={data.results}/>

                    <C_Pagination
                        page={data.page}
                        total_pages={data.total_pages}
                        hasPrevPage={data.page > 1}
                        hasNextPage={data.page + 1 < data.total_pages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />

                </>
            ) : null}
            {isError ? (
                <C_ErrorHandle reFetch={refetch} variant={'danger'}
                               msg={'Something went wrong when search for movies in this genre. Please try again... '}/>
            ) : null}

        </>
    )
}

export default Single_Genre