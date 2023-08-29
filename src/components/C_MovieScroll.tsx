import React from 'react'
import {Link} from "react-router-dom";
import {MovieRes} from "../types/index.types.ts";

interface Props {
	data: MovieRes
}

const C_MovieScroll: React.FC<Props> = ({data}) => {
	
	return (
		<>
			{data.results.sort((a, b) => b.popularity - a.popularity).map(c => (
				<Link to={`/movie/${c.id}`} key={c.id}>
					<img key={c.id} src={c.poster_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${c.poster_path}`} alt={c.title}/>
					<p>{c.title}</p>
				</Link>
			))}
		</>
	)
}

export default C_MovieScroll