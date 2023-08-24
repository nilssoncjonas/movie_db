import React from 'react'
// types
import {ActorResult} from "../types/index.types.ts";
import {Link} from "react-router-dom";

interface Props {
    res: ActorResult[]
}

const C_PersonList: React.FC<Props> = ({res}) => {
    return (
        <>
            <div className={'data__wrap'}>
                {res.map(p => (
                    <Link to={`/person/${p.id}`} key={p.id}>
                        <div className={'data__card'} >
                            <img src={`https://image.tmdb.org/t/p/w200${p.profile_path}`}/>
                            <p>{p.name} <span>{p.known_for_department}</span></p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default C_PersonList