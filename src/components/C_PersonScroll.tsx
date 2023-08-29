import React from 'react'
import {Link} from "react-router-dom";
import {Credits} from "../types/person.types.ts";

interface Props {
	data: Credits
}

const C_PersonScroll: React.FC<Props> = ({data}) => {
	
	return (
		<>
			{data.cast.slice(0, 20).map(c => (
				<Link to={`/person/${c.id}`} key={c.id}>
					<img key={c.id} src={c.profile_path === null ? `https://placehold.co/200x300/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat` : `https://image.tmdb.org/t/p/w200${c.profile_path}`} alt={c.name}/>
					<p>{c.name} as {c.character}</p>
				</Link>
			))}
		</>
	)
}

export default C_PersonScroll