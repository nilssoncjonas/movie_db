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
	// TODO kunna klicka in på en film och få detaljerad information om filmen och få reda på vilka som var skådespelare i filmen.
	return (
		<>
			{isSuccess && data ? (
				<>
					{/*<div className={'h2__wrap'}><h2>{data.title}</h2></div>*/}
					<div className={'single__movie__wrap'}>
						<div className={'single__movie__header'} style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`}}>

						</div>
						<div>
							{/* TODO https://api.themoviedb.org/3/movie/157336?append_to_response=credits, filter/find crew->job->director etc.
								TODO Add, runtime, release date budget
*/}
							<img className={'single__movie__cover'} src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}/>
							<div className={'single__movie__info'}>
								<h2 className={'single__movie__title'}>{data.title}</h2>
								<p className={'single__movie__overview'}>{data.overview}</p>
							</div>
						</div>
					{/*	TODO relaterade / liknande filmer för vald film*/}
					</div>
				</>
			) : null}
			{isError ? (
				//TODO fix better error message
				' An error occurred...'
			) : null}
		</>
	)
}

export default Single_Movie