import {useSearchParams} from "react-router-dom";
// hooks
import useGetData from "../hooks/useGetData.ts";
// types
import {MovieRes} from "../types/index.types.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_Pagination from "../components/C_Pagination.tsx";
// style
import Button from "react-bootstrap/Button";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";

const Popular_Movie = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageParams = searchParams.get('page') ?? '1'
    const timeParams = searchParams.get('time_window') ?? 'day'

    const {
        data,
        isSuccess,
        isError,
        isFetching, refetch
    } = useGetData<MovieRes>(['movie/popular', timeParams, pageParams], `trending/movie/${timeParams}?language=en-US&include_adult=false&page=${pageParams}`)

    const scrollTop = () => window.scrollTo({top: 0})
    const prevPage = () => {
        setSearchParams({time_window: timeParams === 'day' ? 'day' : 'week', page: String(Number(pageParams) - 1)})
        scrollTop()
    }
    const nextPage = () => {
        setSearchParams({time_window: timeParams === 'day' ? 'day' : 'week', page: String(Number(pageParams) + 1)})
        scrollTop()
    }
    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Trending Movies {timeParams === 'day' ? 'Today!' : 'This Week!'}</h2>
            </div>
            {isSuccess && data ? (
                <>

            <div className={'d-flex justify-content-around align-items-center pagination__wrap'}>
                <Button variant={timeParams === 'day' ? 'warning' : 'outline-warning'}
                        disabled={isFetching || timeParams === 'day'}
                        onClick={() => setSearchParams({time_window: 'day', page: '1'})}>Trending Today</Button>

                <Button variant={timeParams === 'week' ? 'warning' : 'outline-warning'}
                        disabled={isFetching || timeParams === 'week'}
                        onClick={() => setSearchParams({time_window: 'week', page: '1'})}>Trending This Week</Button>
            </div>
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
                <div className={'data__wrap mx-4'}>
                    <C_ErrorHandle reFetch={refetch} variant={'danger'}
                                   msg={'Something went wrong, could not fetch the data. Please try again... '}/>
                </div>
            ) : null}

        </>
    )
}

export default Popular_Movie