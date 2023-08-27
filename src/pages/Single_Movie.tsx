import useGetData from "../hooks/useGetData.ts";
import {MovieDetails, MovieHistory} from "../types/index.types.ts";
import {Link, useParams} from "react-router-dom";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";

const Single_Movie = () => {
    const {id} = useParams()
    const movieId = Number(id)

    const {
        data,
        isSuccess,
        isError,
        refetch
    } = useGetData<MovieDetails>(['movie/', `${movieId}`], `movie/${movieId}&?append_to_response=credits,similar`)


    if (isSuccess) {
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
                                    {data.credits.crew.filter(c => c.job === "Director").length > 1 ? 'Directors: ' : 'Director: '}
                                    {data.credits.crew.filter(c => c.job === "Director").map(c =>
                                        <span> {c.name} </span>)}
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

                        <div>
                            <h3>Cast in {data.title}</h3>

                            <div className={'single__movie__cast'}>
                                {data.credits.cast.slice(0, 20).map(c => (
                                    <Link to={`/person/${c.id}`} key={c.id}>
                                        <img key={c.id}
                                            src={c.profile_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${c.profile_path}`}
                                            alt={c.name}/>
                                        <p>{c.name} as {c.character}</p>
                                    </Link>
                                ))}
                            </div>

                            <h3> Similar (-ish!) movies as {data.title}</h3>
                            <div className={'single__movie__similar'}>
                                {data.similar.results.sort((a, b) => b.popularity - a.popularity).map(c => (
                                    <Link to={`/movie/${c.id}`} key={c.id}>
                                        <img key={c.id}
                                            src={c.poster_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${c.poster_path}`}
                                            alt={c.title}/>
                                        <p>{c.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
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

export default Single_Movie