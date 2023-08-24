import useGetData from "../hooks/useGetData.ts";
import {MovieDetails} from "../types/index.types.ts";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import React, {useState} from "react";

const Single_Movie = () => {
	const {id} = useParams()
	const movieId = Number(id)

	const location = useLocation()

	const [urlParams, setUrlParams] = useSearchParams()

// const page = location.search

	const page = urlParams.get('page')

	const [url, setUrl] = useState(`movie/${movieId}?region=se`)

	const {
		data,
		isSuccess,
		isError
	} = useGetData<MovieDetails>(['movie/', `${movieId}`], `movie/${movieId}?region=se`)

	return (
		<>
			<div className={'h2__wrap'}><h2>Single Movie</h2></div>
			{isSuccess && data ? (
				<div className={'single__movie__wrap'}>
					<div className={'single__movie__header'} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500${data.backdrop_path}')` }}>

					</div>
						<div>
							<img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}/>
								<div className={'single__movie__info'}>
									<p className={'single__movie__title'}>{data.title}</p>
									<p className={'single__movie__overview'}>{data.overview}</p>
								</div>
						</div>

				</div>
			) : null}
			{isError ? (
				//TODO fix better error message
				' An error occurred...'
			) : null}
		</>
	)
}

export default Single_Movie