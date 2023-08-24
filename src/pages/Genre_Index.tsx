import useGetData from "../hooks/useGetData.ts"
import {GenreList} from "../types/index.types.ts"
import {Link} from "react-router-dom"

const Genre_Index = () => {
    const {
        data,
        isSuccess,
        isError
    } = useGetData<GenreList>(['/genres'], 'genre/movie/list?&language=en')
    console.log(data)
    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Movie Genres</h2>
            </div>
            {isSuccess && data ? (
                <div className={'data__wrap'}>
                    {data.genres.map(g => (
                        <Link to={`/genre/${g.id}`} key={g.id}>
                            <div className={'data__card'}>
                                <p className={'genre__img'}>{g.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : null}
            {isError ? (
                //TODO fix better error message
                ' An error occurred...'
            ) : null}
        </>
    )
}

export default Genre_Index