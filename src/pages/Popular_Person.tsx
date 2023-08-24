import {ActorRes, PersonRes} from "../types/index.types.ts";
import {useSearchParams} from "react-router-dom";
import {useState} from "react";
import useGetDataListPages from "../hooks/useGetDataListPages.ts";
import C_PersonList from "../components/C_PersonList.tsx";

const Popular_Person = () => {
    const [urlParams, setUrlParams] = useSearchParams()
    const pageParams = urlParams.get('page')

    const [page, setPage] = useState(Number(pageParams))

    const {
        data,
        isSuccess,
        isError
    } = useGetDataListPages<ActorRes>(['person/popular', page], 'person/popular', page)
    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Popular People</h2>
            </div>
            {isSuccess && data ? (
                <C_PersonList res={data.results}/>
            ) : null}
            {isError ? (
                //TODO fix better error message
                ' An error occurred...'
            ) : null}
            {/*	TODO Pagnation*/}
        </>
    )
}

export default Popular_Person