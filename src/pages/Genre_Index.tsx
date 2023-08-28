import {Link} from "react-router-dom"
// hooks
import useGetGenre from "../hooks/useGetGenre.ts";
// components
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";

const Genre_Index = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetGenre()
    return (
        <>
            <div className={'h2__wrap'}>
                <h2>Movie Genres</h2>
            </div>
            {isLoading && <C_Placeholder_loading/>}
            {isSuccess && data ? (
                <div className={'genre__wrap'}>
                    {data.genres.map(g => (
                        <Link to={`/genre/${g.id}`} key={g.id}>
                            <div className={'genre__img'}>
                                <img src={`https://placehold.co/200x200/212529/e5a00d?text=${g.name}&font=montserrat`}
                                     alt={g.name}/>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : null}
            {isError ? (
                <C_ErrorHandle reFetch={refetch} variant={'danger'}
                               msg={'Something went wrong when fetching movie genres. Please try again... '}/>
            ) : null}
        </>
    )
}

export default Genre_Index