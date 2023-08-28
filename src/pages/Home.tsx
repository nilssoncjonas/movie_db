import {Link, useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
// components
import C_SearchForm from "../components/C_SearchForm.tsx";

import {MovieHistory} from "../types/index.types.ts";

const Home = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const onSearch = (searchQuery: string) => {
        queryClient.invalidateQueries(['search'])
        navigate(`/search?query=${searchQuery}`)
    }

    const movieHistory = window.localStorage.getItem('movieHistory') ?? '[]'
    const movieList: MovieHistory[] = JSON.parse(movieHistory)


    return (
        <div className={'body'}>

            <div className={'h2__wrap'}>
                <h2>Welcome!</h2>
            </div>
            <C_SearchForm onSearch={onSearch}/>

            {movieList.length >= 1 && (
                <>
                    <h2 className={'movie__history__title'}>Movies from your viewing history</h2>
                    <div className={'data__wrap'}>
                        <div className={'movie__history'}>

                            {movieList.splice(0, 10).map(c => (
                                <Link to={`/movie/${c.id}`} key={c.id}>
                                    <img
                                        src={c.poster_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${c.poster_path}`}
                                        alt={c.title}/>
                                    <p>{c.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )
            }

        </div>
    )
}

export default Home