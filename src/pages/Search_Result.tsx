import {useSearchParams} from "react-router-dom";
import useGetData from "../hooks/useGetData.ts";
import {MovieRes} from "../types/index.types.ts";
import C_Pagination from "../components/C_Pagination.tsx";
import C_MovieList from "../components/C_MovieList.tsx";
import C_SearchForm from "../components/C_SearchForm.tsx";
import {useQueryClient} from "@tanstack/react-query";

const Search_Result = () => {

    const queryClient = useQueryClient()
    const [searchParams, setSearchParams] = useSearchParams()
    const pageParams = searchParams.get('page') ?? '1'
    const queryParam = searchParams.get('query') ?? ''
    const scrollTop = () => window.scrollTo({top: 0})
    const prevPage = () => {
        setSearchParams({query: queryParam, page: String(Number(pageParams) - 1)})
        scrollTop()
    }
    const nextPage = () => {
        setSearchParams({query: queryParam, page: String(Number(pageParams) + 1)})
        scrollTop()
    }
    const onSearch = (searchQuery: string) => {
        queryClient.invalidateQueries(['search'])
        setSearchParams({query: searchQuery, page: '1'})
    }
    const {
        data,
        isSuccess,
        isError
    } = useGetData<MovieRes>(['search', queryParam, pageParams], `search/movie?query=${queryParam}&include_adult=false&language=en-US&page=${pageParams}`)
    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Search Result for {queryParam}</h2>
            </div>

            <C_SearchForm onSearch={onSearch}/>

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
                // TODO fix better error message
                ' An error occurred...'
            ) : null}
        </>
    )
}

export default Search_Result