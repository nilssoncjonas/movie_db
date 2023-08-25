import {useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
// hooks
import useGetDataListPages from "../hooks/useGetDataListPages.ts";
// types
import {MovieRes} from "../types/index.types.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
// style
import Button from "react-bootstrap/Button";


const Top_Rated = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [searchParams, setSearchParams] = useSearchParams()
	const pageParams = searchParams.get('page') ?? '1'

	// const [page, setPage] = useState(Number(pageParams) === 0 ? 1 : Number(pageParams))


	const {
		data,
		isSuccess,
		isError,
	} = useGetDataListPages<MovieRes>(['movie/top_rated', pageParams], 'movie/top_rated', pageParams)



	const nextPage = () => {
		// setPage(prevValue => prevValue + 1)
		setSearchParams({page: String(Number(pageParams)+1)})
	}
	const prevPage = () => {
		setSearchParams({page: String(Number(pageParams)-1)})
	}
	
	// TODO queryClient?? set/get
	return (
		<>
			<div className={'h2__wrap'}>
				<h2>Top Rated Movies</h2>
			</div>

			<div className={'m-3 px-4 d-flex justify-content-between'}>
				<Button variant="outline-warning" onClick={prevPage}>prev page</Button>
				<Button variant="outline-warning" onClick={nextPage}>next page</Button>
			</div>
			{isSuccess && data ? (
					<div className={'text-center'}>
						<p>{new Intl.NumberFormat('se-SV').format(data.total_results)} Result</p>
						<p>Page {data.page} / {data.total_pages}</p>
				<C_MovieList res={data.results}/>
					</div>
				) : null}
			{isError ? (
				// TODO fix better error message
				' An error occurred...'
			) : null}

			{/*	TODO pagnation*/}

		</>
	)
}

export default Top_Rated