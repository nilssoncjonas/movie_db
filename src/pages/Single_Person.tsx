import {Link, useParams} from "react-router-dom";
// hooks
import useGetPerson from "../hooks/useGetPerson.ts";
// components
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";


const Single_Person = () => {
    const {id} = useParams()
    const personId = Number(id)
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetPerson(personId)

    return (
        <>
            {isLoading && (

                <div className={'person__placeholder__loading__wrap'}>
                    <span className="image placeholder placeholder-wave bg-warning"></span>

                    <span className="name placeholder placeholder-wave bg-warning"></span>

                    <span className="info placeholder placeholder-wave bg-warning"></span>

                    <span className="heading placeholder placeholder-wave bg-warning"></span>
                    <span className="text placeholder placeholder-wave bg-warning"></span>
                    <span className="text placeholder placeholder-wave bg-warning"></span>
                    <span className="text placeholder placeholder-wave bg-warning"></span>
                    <span className="text placeholder placeholder-wave bg-warning"></span>
                    <span className="text placeholder placeholder-wave bg-warning"></span>
                    <span className="text placeholder placeholder-wave bg-warning"></span>
                    <span className="text placeholder placeholder-wave bg-warning"></span>
                </div>
            )}

            {isSuccess && data ? (
                <div className={'person__wrap'}>
                    <img className={'person__img'} src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                         alt={data.name}/>
                    <h2 className={'person__name'}>{data.name}</h2>
                    <div className={'person__info'}>
                        <p>{data.gender === 1 ? 'Actress' : 'Actor'}</p>
                        <p>Birthday: {data.birthday}
                            (age {new Date().getFullYear() - new Date(data.birthday).getFullYear()})</p>
                        <p>Place of birth: <span> {data.place_of_birth}</span></p>
                        <p>Known for {data.movie_credits.cast.length} movies</p>
                    </div>
                    <div className={'person__biography'}>
                        <h2>Biography</h2>
                        {data.biography}
                    </div>
                    <h2 className={'person__starring'}>Starring in</h2>
                    <div className={'person__cast'}>
                        {data.movie_credits.cast.map(c => (
                            <Link to={`/movie/${c.id}`} key={c.id}>
                                <img
                                    src={c.poster_path === null ? 'https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat' : `https://image.tmdb.org/t/p/w200${c.poster_path}`}
                                    alt={c.title}/>
                                <p>{c.title} as {c.character}</p>
                            </Link>
                        ))}
                    </div>

                </div>
            ) : null}
            {isError ? (
                <C_ErrorHandle reFetch={refetch} variant={'danger'}
                               msg={'Something went wrong when fetching this person\'s info. Please try again... '}/>
            ) : null}
        </>
    )
}
export default Single_Person