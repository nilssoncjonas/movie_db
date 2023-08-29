import React from 'react'
import {Link} from "react-router-dom";
// types
import {MovieResult} from "../types/movie.types.ts";

interface Props {
    res: MovieResult[]
}

const C_MovieList: React.FC<Props> = ({res}) => {
    return (
        <>
            <div className={'data__wrap'}>
                {res.map(m => (
                    <Link to={`/movie/${m.id}`} key={m.id}>
                        <div className={'data__card'}>
                            <img alt={m.title} src={ m.poster_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${m.poster_path}`}/>
                            <p>{m.title} <span>{m.release_date}</span></p>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    )
}

export default C_MovieList