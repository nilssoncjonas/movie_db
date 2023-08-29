import {useParams} from "react-router-dom";
// hooks
import useGetMovie from "../hooks/useGetMovie.ts";
// Types
import {MovieHistory} from "../types/index.types.ts";
// components
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_MovieScroll from "../components/C_MovieScroll.tsx";
import C_PersonScroll from "../components/C_PersonScroll.tsx";
import C_MoviePage_Placeholder from "../components/C_MoviePage_Placeholder.tsx";

const Single_Movie = () => {
	const {id} = useParams()
	const movieId = Number(id)
	
	const {
		data,
		isLoading,
		isSuccess,
		isError,
	} = useGetMovie(movieId)
	
	if (isSuccess && data) {
		const movieHistory = window.localStorage.getItem('movieHistory') ?? '[]'
		const movieList = JSON.parse(movieHistory)
		
		if (!movieList.some((obj: MovieHistory) => obj.id === movieId)) {
			window.localStorage.setItem('movieHistory', JSON.stringify([{
				id: movieId,
				title: data.title,
				poster_path: data.poster_path
			}, ...movieList]))
		}
	}
	
	return (
		<div className={'body'}>
			{isLoading && <C_MoviePage_Placeholder/>}
			
			{isSuccess && data ? (
				<>
					<div className={'single__movie__wrap'}>
						<div className={'single__movie__header'} style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`}}>
						
						</div>
						<div className={'single__movie__data'}>
							<div>
								<img alt={data.title} className={'single__movie__cover'} src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}/>
							</div>
							<div>
								<p>Status: {data.status}</p>
								<p>Release date: {data.release_date}</p>
								<p>
									{data.credits.crew.filter(c => c.job === "Director").length > 1 ? 'Directors: ' : 'Director: '}
									{data.credits.crew.filter(c => c.job === "Director").map(c =>
										<span key={c.id}> {c.name} </span>)}
								</p>
								<p>Runtime: {data.runtime} min</p>
								<p>Budget: $ {new Intl.NumberFormat('sv-Se').format(data.budget)}</p>
								<p>Revenue: $ {new Intl.NumberFormat('sv-SE').format(data.revenue)}</p>
							</div>
						</div>
						
						<div className={'single__movie__info'}>
							<h2 className={'single__movie__title'}>{data.title} <span>{data.tagline}</span></h2>
							<p className={'single__movie__overview'}>{data.overview}</p>
						</div>
						
						{isSuccess && data.credits && data.similar ? (
							
							<div>
								<h3>Cast in {data.title}</h3>
								<div className={'single__movie__cast'}>
									<C_PersonScroll data={data.credits}/>
								</div>
								<h3> Similar (-ish!) movies as {data.title}</h3>
								<div className={'single__movie__similar'}>
									<C_MovieScroll data={data.similar}/>
								</div>
							</div>
						) : null}
					</div>
				</>
			) : null}
			
			{isError ? (
				<C_ErrorHandle variant={'danger'} msg={'Something went wrong when fetching info about this movie.'}/>
			) : null}
		
		</div>
	)
}

export default Single_Movie