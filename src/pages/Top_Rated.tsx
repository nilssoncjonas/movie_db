import {useSearchParams} from "react-router-dom";
// hooks
import useGetDataListPages from "../hooks/useGetDataListPages.ts";
// types
import {MovieRes} from "../types/index.types.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_Pagination from "../components/C_Pagination.tsx";


const Top_Rated = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const pageParams = searchParams.get('page') ?? '1'

	const {
		data,
		isSuccess,
		isError,
	} = useGetDataListPages<MovieRes>(['movie/top_rated', pageParams], 'movie/top_rated', pageParams)

	return (
		<>
			<div className={'h2__wrap'}>
				<h2>Top Rated Movies</h2>
			</div>

			{isSuccess && data ? (
				<div className={'text-center'}>
					<p>{new Intl.NumberFormat('se-SV').format(data.total_results)} Result</p>
					<C_Pagination
						page={data.page}
						total_pages={data.total_pages}
						hasPrevPage={data.page > 1}
						hasNextPage={data.page + 1 < data.total_pages}
						prevPage={() => {
							setSearchParams({page: String(Number(pageParams) - 1)})
						}}
						nextPage={() => {
							setSearchParams({page: String(Number(pageParams) + 1)})
						}}
					/>
					<C_MovieList res={data.results}/>
				</div>
			) : null}
			{isError ? (
				// TODO fix better error message
				' An error occurred...'
			) : null}

			{/*	TODO pagnation*/}

			{isSuccess ? (
				<C_Pagination
					page={data.page}
					total_pages={data.total_pages}
					hasPrevPage={data.page > 1}
					hasNextPage={data.page + 1 < data.total_pages}
					prevPage={() => {
						setSearchParams({page: String(Number(pageParams) - 1)})
						window.scrollTo({top: 0})
					}}
					nextPage={() => {
						setSearchParams({page: String(Number(pageParams) + 1)})
						window.scrollTo({top: 0})
					}}
				/>
			): null }

		</>
	)
}

export default Top_Rated