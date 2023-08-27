import useGetData from "../hooks/useGetData.ts";
import {MovieDetails} from "../types/index.types.ts";
import {Link, useParams} from "react-router-dom";

const Single_Movie = () => {
    const {id} = useParams()
    const movieId = Number(id)

    const {
        data,
        isSuccess,
        isError
    } = useGetData<MovieDetails>(['movie/', `${movieId}`], `movie/${movieId}&?append_to_response=credits,similar`)

    return (
        <>
            {isSuccess && data ? (
                <>
                    <div className={'single__movie__wrap'}>
                        <div className={'single__movie__header'}
                             style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`}}>

                        </div>
                        <div className={'single__movie__data'}>
                            <div>
                                <img alt={data.title} className={'single__movie__cover'}
                                     src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}/>
                            </div>
                            <div>
                                <p>Status: {data.status}</p>
                                <p>Release date: {data.release_date}</p>
                                <p>
                                    {data.credits.crew.filter(c => c.job === "Director").length > 1 ? 'Directors: ' : 'Director: '}:
                                    {data.credits.crew.filter(c => c.job === "Director").map(c =>
                                        <span> {c.name}, </span>)}
                                </p>
                                <p>Runtime: {data.runtime} min</p>
                                <p>Budget: ${new Intl.NumberFormat('sv-Se').format(data.budget)}</p>
                                <p>Revenue: ${new Intl.NumberFormat('sv-SE').format(data.revenue)}</p>
                            </div>
                        </div>

                        <div className={'single__movie__info'}>
                            <h2 className={'single__movie__title'}>{data.title} <span>{data.tagline}</span></h2>
                            <p className={'single__movie__overview'}>{data.overview}</p>
                        </div>

                        <div>
                            <h3>Cast in {data.title}</h3>

                            <div className={'single__movie__cast'}>
                                {data.credits.cast.slice(0, 20).map(c => (
                                    <Link to={`/person/${c.id}`} key={c.id}>
                                        <img src={`https://image.tmdb.org/t/p/w200${c.profile_path}`} alt={c.name}/>
                                        <p>{c.name} as {c.character}</p>
                                    </Link>
                                ))}
                            </div>

                            <h3> Similar (-ish!) movies as {data.title}</h3>
                            <div className={'single__movie_similar'}>
                                {data.similar.results.slice().sort((a, b) => b.popularity - a.popularity).slice(0, 10).map(c => (
                                    <Link to={`/movie/${c.id}`} key={c.id}>
                                        <img src={`https://image.tmdb.org/t/p/w200${c.poster_path}`} alt={c.title}/>
                                        <p>{c.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
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