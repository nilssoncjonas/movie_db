import {MovieRes} from "../types/index.types.ts";
import C_MovieList from "../components/C_MovieList.tsx";
import {useSearchParams} from "react-router-dom";
import {useState} from "react";
import useGetMoviePages from "../hooks/useGetDataListPages.ts";
import Button from "react-bootstrap/Button";


const Top_Rated = () => {

    const [urlParams, setUrlParams] = useSearchParams()
    const pageParams = urlParams.get('page')

    const [page, setPage] = useState(Number(pageParams))

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch,
    } = useGetMoviePages<MovieRes>(['/movie/top_rated', page], 'movie/top_rated', page)

    const pageHandler = () => {
        setPage(prevValue => prevValue + 1)
        setUrlParams(`&page=${page}`)
        // urlParams.set('page', page.toString())
        console.log(urlParams)
    }

    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Topplista Filmer</h2>
                <Button variant="outline-warning" onClick={() => pageHandler()}>page handler</Button>
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

export default Top_Rated