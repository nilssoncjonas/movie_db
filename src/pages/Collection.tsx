import {Link, useParams} from "react-router-dom";
// hooks
import useLocalStorage from "../hooks/useLocalStorage.ts";
// Types
import {CollectionHistory} from "../types/index.types.ts";
// components
import C_Person_Placeholder from "../components/C_Person_Placeholder.tsx";
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import useGetCollection from "../hooks/useGetCollection.ts";

const Collection = () => {
	const {id} = useParams()
	const collectionId = Number(id)
	
const {data, isSuccess, isError, isLoading} = useGetCollection(String(collectionId))

	const [collectionList, setCollectionList] = useLocalStorage<CollectionHistory[]>('collectionHistory')
	
	if (collectionId && data) {
		if (!collectionList.some((obj: CollectionHistory) => obj.name === data.name)) {
			setCollectionList([{
				id: collectionId,
				name: data.name,
				poster_path: !data.poster_path ? '' : data.poster_path
			}, ...collectionList.slice(0,9)])
		}
	}
	return (
		<div className={'body'}>
			
			{isLoading && <C_Person_Placeholder />}
			
			{isSuccess && data ? (
				<>
					<div className={'collection__header'} style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`}}>
					</div>
					<img className={'collection__cover'} alt={data.name} src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}/>
					<div className={'collection__info'}>
						<h2>{data.name}</h2>
						<p>{data.overview}</p>
					</div>
					<div className={'data__wrap marginBottom'}>
						{data.parts.map(m => (
						<Link to={`/movie/${m.id}`} key={m.id}>
							<div className={'data__card'}>
								<span className={'vote__average__badge'}> {Math.floor(m.vote_average * 10)}%</span>
								<img alt={m.title} src={m.poster_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${m.poster_path}`} />
								<p>{m.title} <span>{m.release_date}</span></p>
							</div>
						</Link>
						))}
					</div>
				</>
			) : null }
			
			{isError ? (
				<C_ErrorHandle variant={'danger'} msg={'Something went wrong when fetching info about this collection.'} />
			) : null}
		
		</div>
	)
}

export default Collection