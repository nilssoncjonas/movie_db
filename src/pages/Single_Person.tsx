import {Link, useParams} from "react-router-dom";
import useGetData from "../hooks/useGetData.ts";
import {SinglePerson} from "../types/person.types.ts";

const Single_Person = () => {
    const {id} = useParams()
    const personId = Number(id)
    const {
        data,
        isSuccess,
        isError
    } = useGetData<SinglePerson>(['person/', `${personId}`], `person/${personId}&?append_to_response=movie_credits`)

    return (
        <>
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
                                <img src={c.poster_path === null ? 'https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat' : `https://image.tmdb.org/t/p/w200${c.poster_path}`} alt={c.title}/>
                                <p>{c.title} as {c.character}</p>
                            </Link>
                        ))}
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
export default Single_Person