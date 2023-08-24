import React from 'react'
// types
import {MovieResult} from "../types/movie.types.ts";
import {Link} from "react-router-dom";

interface Props {
    res: MovieResult[]
}

const C_MovieList: React.FC<Props> = ({res}) => {
    return (
        <>
            <div className={'data__wrap'}>
                {res.map(m => (
                    <Link to={`/movie/${m.id}`}>
                        <div className={'data__card'} key={m.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}/>
                            <p>{m.title} <span>{m.release_date}</span></p>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    )
}

export default C_MovieList