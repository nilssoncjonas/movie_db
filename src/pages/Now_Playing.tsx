// custom hooks
import useGetNowPlaying from "../hooks/useGetNowPlaying.ts";
// components
import C_MovieList from "../components/C_MovieList.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";
import C_Pagination from "../components/C_Pagination.tsx";
import {useSearchParams} from "react-router-dom";

const Now_Playing = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const pageParams = searchParams.get('page') ?? '1'
	
	const {
		data,
		isLoading,
		isSuccess,
		isError,
	} = useGetNowPlaying(pageParams)
	const prevPage = () => {
		setSearchParams({page: String(Number(pageParams) - 1)})
	}
	const nextPage = () => {
		setSearchParams({page: String(Number(pageParams) + 1)})
	}
	return (
		<div className={'body'}>
			
			<div className={'h2__wrap'}>
				<h2>Movies Playing In Theaters Now</h2>
			</div>
			{isLoading && <C_Placeholder_loading/>}
			
			{isSuccess && data ? (
				<>
					<div className={'text-center'}>
						<p>{new Intl.NumberFormat('se-SV').format(data.total_results)} Result</p>
						<C_Pagination
							page={data.page}
							total_pages={data.total_pages}
							hasPrevPage={data.page > 1}
							hasNextPage={data.page + 1 < data.total_pages}
							prevPage={prevPage}
							nextPage={nextPage}
						/>
					</div>
					
					<C_MovieList res={data.results}/>
					
					<C_Pagination
						page={data.page}
						total_pages={data.total_pages}
						hasPrevPage={data.page > 1}
						hasNextPage={data.page + 1 < data.total_pages}
						prevPage={prevPage}
						nextPage={nextPage}
					/>
				
				</>
			) : null}
			
			{isError ? (
				<C_ErrorHandle variant={'danger'} msg={'Something went wrong when fetching the movies that are playing in theaters now.'}/>
			) : null}
		</div>
	)
}
export default Now_Playing