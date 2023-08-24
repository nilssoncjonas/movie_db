import React from 'react'
// types
import {ActorResult} from "../types/index.types.ts";

interface Props {
    res: ActorResult[]
}

const C_PersonList: React.FC<Props> = ({res}) => {
    return (
        <>
            <div className={'data__wrap'}>
                {res.map(p => (
                    <div className={'data__card'} key={p.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${p.profile_path}`} />
                        <p>{p.name} <span>{p.known_for_department}</span></p>
                    </div>
                    ))}
            </div>
        </>
    )
}

export default C_PersonList