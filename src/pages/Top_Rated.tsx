import {useSearchParams} from "react-router-dom";
// hooks
import useGetData from "../hooks/useGetData.ts";
// types
import {MovieRes} from "../types/index.types.ts";
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
	} = useGetData<MovieRes>(['movie/top_rated', pageParams], `movie/top_rated?page=${pageParams}&region=se`)
	const scrollTop = () => window.scrollTo({top: 0})
	const prevPage = () => {
		setSearchParams({page: String(Number(pageParams) - 1)})
		scrollTop()
	}
	const nextPage = () => {
		setSearchParams({page: String(Number(pageParams) + 1)})
		scrollTop()
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
				<div className={'data__wrap mx-4'}>
					<C_ErrorHandle reFetch={refetch} variant={'danger'} msg={'Something went wrong, could not fetch the data. Please try again... '}/>
				</div>
			) : null}

		</>
	)
}

export default Top_Rated