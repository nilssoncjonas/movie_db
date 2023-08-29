
import { useParams, useSearchParams } from "react-router-dom";
// hooks
import useGetMoviesInGenre from "../hooks/useGetMoviesInGenre.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_Pagination from "../components/C_Pagination.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";


const Single_Genre = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const pageParams = searchParams.get('page') ?? '1'
	const genreParams = searchParams.get('genre') ?? 'Genre'

	const { id } = useParams()
	const genreId = Number(id)

	const {
		data,
		isLoading,
		isSuccess,
		isError,
	} = useGetMoviesInGenre(genreId, pageParams)
	const prevPage = () => {
		setSearchParams({ page: String(Number(pageParams) - 1) })
	}
	const nextPage = () => {
		setSearchParams({ page: String(Number(pageParams) + 1) })
	}

	return (
		<div className={'body'}>

			<div className={'h2__wrap'}>
				<h2>Movies By Genre - {genreParams}</h2>
			</div>

			{isLoading && <C_Placeholder_loading />}

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

					<C_MovieList res={data.results} />

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
				<C_ErrorHandle variant={'danger'}
					msg={'Something went wrong when search for movies in this genre.'} />
			) : null}

		</div>
	)
}

export default Single_Genre