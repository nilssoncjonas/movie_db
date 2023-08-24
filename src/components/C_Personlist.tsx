import React from 'react'
import {Person} from "../types/index.types.ts";

interface Props {
res: Person[]
}

const C_Personlist: React.FC<Props> = ({res}) => {
    console.log(res)

    return (
        <>
        </>
    )
}

export default C_Personlist