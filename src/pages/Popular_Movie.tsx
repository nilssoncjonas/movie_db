import useGetData from "../hooks/useGetData.ts";
import {NowPlayingRes} from "../types/index.types.ts";
import C_MovieList from "../components/C_MovieList.tsx";

const Popular_Movie = () => {
	const {
		data,
		isSuccess,
		isError
	} = useGetData<NowPlayingRes>(['movie/popular'], 'movie/popular?page=1?&region=se')
	//  TODO kunna välja populära filmer för dagen elelr veckan, tåla omladdning
    return (
        <>
					<div className={'h2__wrap'}>
						<h2>Popular Movies Right Now</h2>
					</div>
					{isSuccess && data ? (
						<C_MovieList res={data.results}/>
					) : null}
					{isError ? (
						//TODO fix better error message
						' An error occurred...'
					) : null}
				{/*	TODO Pagnation*/}
        </>
    )
}

export default Popular_Movie