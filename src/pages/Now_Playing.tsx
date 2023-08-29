// custom hooks
import useGetNowPlaying from "../hooks/useGetNowPlaying.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";

const Now_Playing = () => {
	const {
		data,
		isLoading,
		isSuccess,
		isError,
	} = useGetNowPlaying()
	// TODO sidhantering, hämta från regin=us istället för se, ändra i hook + lägga till C_pagination
	
console.log(data)
	return (
		<div className={'body'}>
			
			<div className={'h2__wrap'}>
				<h2>Movies Playing In Theaters Now</h2>
			</div>
			{isLoading && <C_Placeholder_loading/>}
			{isSuccess && data ? (
				<C_MovieList res={data.results}/>
			) : null}
			{isError ? (
				<C_ErrorHandle variant={'danger'} msg={'Something went wrong when fetching the movies that are playing in theaters now.'}/>
			) : null}
		</div>
	)
}
export default Now_Playing