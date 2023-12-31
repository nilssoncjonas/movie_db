import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
// hooks
import useGetSearch from "../hooks/useGetSearch.ts";
// components
import C_Pagination from "../components/C_Pagination.tsx";
import C_MovieList from "../components/C_MovieList.tsx";
import C_SearchForm from "../components/C_SearchForm.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Placeholder_loading from "../components/C_Placeholder_loading.tsx";

const Search_Result = () => {

	const queryClient = useQueryClient()
	const [searchParams, setSearchParams] = useSearchParams()
	const pageParams = searchParams.get('page') ?? '1'
	const queryParam = searchParams.get('query') ?? ''

	const {
		data,
		isLoading,
		isSuccess,
		isError,
	} = useGetSearch(queryParam, pageParams)

	const prevPage = () => {
		setSearchParams({ query: queryParam, page: String(Number(pageParams) - 1) })
	}
	const nextPage = () => {
		setSearchParams({ query: queryParam, page: String(Number(pageParams) + 1) })
	}
	const onSearch = (searchQuery: string) => {
		queryClient.invalidateQueries(['search/'])
		setSearchParams({ query: searchQuery, page: '1' })
	}

	return (
		<div className={'search__page'}>

			<div className={'h2__wrap'}>
				<h2>Search Result for "{queryParam}"</h2>
			</div>

			<C_SearchForm onSearch={onSearch} />

			{isLoading && <C_Placeholder_loading />}
			
			{data && data.total_results === 0 ? (
			<div className={'search__noresult'}>
				Couldn't find any movies that matches: <span> "{queryParam}"</span>
				<p>
					Try search again for a movie title!
				</p>
			</div>
			):null}
			
			{isSuccess && data.page > data.total_pages ? (
				<C_ErrorHandle variant={'warning'} msg={`Seems like you tyring to reach a page that dosen't exist! Choose a page between 1 and ${data.total_pages}! `} />
			): null }
			
			{isSuccess && data.results.length > 1  ? (
				<>
					<div className={'text-center'}>
						<p className={'my-2'}>Listing {new Intl.NumberFormat('se-SV').format(data.total_results)} Result</p>
						<C_Pagination
							page={data.page}
							total_pages={data.total_pages}
							hasPrevPage={data.page > 1}
							hasNextPage={data.page + 1 > data.total_pages}
							prevPage={prevPage}
							nextPage={nextPage}
						/>
					</div>

					<C_MovieList res={data.results} />

					<C_Pagination
						page={data.page}
						total_pages={data.total_pages}
						hasPrevPage={data.page > 1}
						hasNextPage={data.page + 1 > data.total_pages}
						prevPage={prevPage}
						nextPage={nextPage}
					/>
				</>
			): null }
			
			{isError ? (
				<C_ErrorHandle variant={'danger'} msg={'Something went wrong when searching.'} />
			) : null}
		</div>
	)
}

export default Search_Result