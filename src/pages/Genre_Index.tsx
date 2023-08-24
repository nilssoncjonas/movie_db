import useGetData from "../hooks/useGetData.ts";
import {GenreList} from "../types/index.types.ts";
import React from "react";

const Genre_Index = () => {


    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch,
    } = useGetData<GenreList>(['/genres'], 'genre/movie/list?&language=en')
    console.log(data)
    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Moviegenres</h2>
            </div>
            {isSuccess && data ? (
                <div className={'data__wrap'}>
                    {data.genres.map(g => (
                        <div className={'data__card'} key={g.id}>
                            <p className={'genre__img'}>{g.name}</p>
                        </div>
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