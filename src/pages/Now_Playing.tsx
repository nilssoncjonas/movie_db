// custom hooks
import useGetData from "../hooks/useGetData.ts";
// types
import {NowPlayingRes} from "../types/index.types.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";

const Now_Playing = () => {
	const {
		data,
		isSuccess,
		isError
	} = useGetData<NowPlayingRes>(['movie/now_playing'], 'movie/now_playing?language=sv-SE&region=se')

	return (
		<>
			<div className={'h2__wrap'}>
				<h2>På Bio just nu</h2>
			</div>
			{isSuccess && data ? (
				<C_MovieList res={data.results}/>
			) : null}
			{isError ? (
				//TODO fix better error message
				' An error occurred...'
			) : null}
		</>
	)
}
export default Now_Playing