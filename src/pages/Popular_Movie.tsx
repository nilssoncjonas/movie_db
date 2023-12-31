import { useSearchParams } from "react-router-dom";
// hooks
import useGetTrendingMovies from "../hooks/useGetTrendingMovies.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_Pagination from "../components/C_Pagination.tsx";
// style
import Button from "react-bootstrap/Button";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";

const Popular_Movie = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const pageParams = searchParams.get('page') ?? '1'
	const timeParams = searchParams.get('time_window') ?? 'day'

	const {
		data,
		isLoading,
		isSuccess,
		isError,
		isFetching
	} = useGetTrendingMovies(timeParams, pageParams)


	const prevPage = () => {
		setSearchParams({ time_window: timeParams === 'day' ? 'day' : 'week', page: String(Number(pageParams) - 1) })
	}
	const nextPage = () => {
		setSearchParams({ time_window: timeParams === 'day' ? 'day' : 'week', page: String(Number(pageParams) + 1) })
	}
	return (
		<div className={'body'}>
			<div className={'h2__wrap'}>
				<h2>Trending Movies {timeParams === 'day' ? 'Today!' : 'This Week!'}</h2>
			</div>
			{isLoading && <C_Placeholder_loading />}
			
			{Number(pageParams) > 500 ? (
				<C_ErrorHandle variant={'warning'} msg={'Invalid page: Pages start at 1 and max at 500.'} />
			): null }
			
			{isSuccess && data.results.length > 1 ? (
				<>

					<div className={'d-flex justify-content-around align-items-center pagination__wrap'}>
						<Button variant={timeParams === 'day' ? 'warning' : 'outline-warning'}
							disabled={isFetching || timeParams === 'day'}
							onClick={() => setSearchParams({ time_window: 'day', page: '1' })}>Trending Today</Button>

						<Button variant={timeParams === 'week' ? 'warning' : 'outline-warning'}
							disabled={isFetching || timeParams === 'week'}
							onClick={() => setSearchParams({ time_window: 'week', page: '1' })}>Trending This
							Week</Button>
					</div>
					<div className={'text-center'}>
						<p>{new Intl.NumberFormat('se-SV').format(data.total_results)} Result</p>
						<C_Pagination
							page={data.page}
							total_pages={data.total_pages}
							hasPrevPage={data.page > 1}
							hasNextPage={data.page + 1 > data.total_pages || data.page === 500}
							prevPage={prevPage}
							nextPage={nextPage}
						/>
					</div>
					<C_MovieList res={data.results} />

					<C_Pagination
						page={data.page}
						total_pages={data.total_pages}
						hasPrevPage={data.page > 1}
						hasNextPage={data.page + 1 > data.total_pages || data.page === 500}
						prevPage={prevPage}
						nextPage={nextPage}
					/>
				</>
			) : null}
			{isError ? (
				<C_ErrorHandle variant={'danger'} msg={'Something went wrong when fetching the trending movies.'} />
			) : null}

		</div>
	)
}

export default Popular_Movie