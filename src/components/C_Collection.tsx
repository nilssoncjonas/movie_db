import React from 'react'
import useGetCollection from "../hooks/useGetCollection.ts";
import {Link} from "react-router-dom";


interface Props {
	collectionId: number
}
const C_Collection: React.FC<Props> = ({collectionId}) => {
	
	const {
		data,
		isSuccess,
		isLoading,
	} = useGetCollection(collectionId)

	return (
		<>
			{isLoading ? (
				<>
					<h3>Loading Collection</h3>
					<div className={'collection__loading__placeholder'}>
							<span className={'placeholder placeholder-wave bg-warning'}></span>
							<span className={'placeholder placeholder-wave bg-warning'}></span>
							<span className={'placeholder placeholder-wave bg-warning'}></span>
							<span className={'placeholder placeholder-wave bg-warning'}></span>
							<span className={'placeholder placeholder-wave bg-warning'}></span>
							<span className={'placeholder placeholder-wave bg-warning'}></span>
					</div>
				</>
			) : null}
			
			{isSuccess && data ? (
				<div>
					<h3>Belongs to</h3>
					<p>{data.name}</p>
					<div className={'single__movie__collection'}>
						<Link to={`/collection/${data.id}`}>
							<img  className={'movie__collection'} src={data.poster_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${data.poster_path}`} alt={data.name}/>
							<p>{data.name}</p>
						</Link>
						
						{data.parts.map(c => (
							<Link to={`/movie/${c.id}`} key={c.id}>
								<img key={c.id} src={c.poster_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${c.poster_path}`} alt={c.title}/>
								<p>{c.title}</p>
							</Link>
						))}
					</div>
				</div>
			) : null}
		
		</>
	)
}

export default C_Collection