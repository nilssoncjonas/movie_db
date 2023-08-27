import {MovieRes} from "../types/index.types.ts";
import {useParams, useSearchParams} from "react-router-dom";
import useGetData from "../hooks/useGetData.ts";
import C_MovieList from "../components/C_MovieList.tsx";
import C_Pagination from "../components/C_Pagination.tsx";

const Single_Genre = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const pageParams = searchParams.get('page') ?? '1'

	const {id} = useParams()
	const genreId = Number(id)

	const {
		data,
		isSuccess,
		isError,
	} = useGetData<MovieRes>(
		['movie/genre', genreId, pageParams], `discover/movie?include_adult=false&sort_by=popularity.desc&with_genres=${genreId}&page=${pageParams}`)
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
				<h2>Movies By Genre</h2>
			</div>

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

export default Single_Genre