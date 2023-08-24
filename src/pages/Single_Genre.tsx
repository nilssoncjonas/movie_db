import {MovieRes} from "../types/index.types.ts";
import {useParams, useSearchParams} from "react-router-dom";
import {useState} from "react";
import C_MovieList from "../components/C_MovieList.tsx";
import {getDataByGenreWithPages} from "../services/TMDB_API.ts";
import {useQuery} from "@tanstack/react-query";

const Single_Genre = () => {
    const [urlParams, setUrlParams] = useSearchParams()
    const pageParams = urlParams.get('page')

    const {id} = useParams()
    const genreId = Number(id)


    const [page, setPage] = useState(Number(pageParams))
    console.log(page)

    const {
        data,
        isSuccess,
        isError,
    } = useQuery(
        ['movie/genre', genreId, page],
        () => getDataByGenreWithPages<MovieRes>(`discover/movie?include_adult=false&sort_by=popularity.desc&with_genres=${genreId}`, page)
    )
    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Movies By Genre</h2>

            </div>
            {isSuccess && data ? (
                <C_MovieList res={data.results}/>
            ) : null}
            {isError ? (
                // TODO fix better error message
                ' An error occurred...'
            ) : null}

            {/*	TODO pagnation*/}
        </>
    )
}

export default Single_Genre