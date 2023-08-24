import React from 'react'
// types
import {MovieResult} from "../types/movie.types.ts";
// style

interface Props {
    res: MovieResult[]
}

const C_MovieList: React.FC<Props> = ({res}) => {
    return (
        <>
            <div className={'movie__wrap'}>
                {res.map(m => (
                    <div className={'movie__card'} key={m.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}/>
                        <p>{m.title} <span>{m.release_date}</span></p>
                    </div>
								))}
            </div>

        </>
    )
}

export default C_MovieList