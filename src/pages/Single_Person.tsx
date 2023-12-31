import { Link, useParams } from "react-router-dom";
// hooks
import useGetPerson from "../hooks/useGetPerson.ts";
import useLocalStorage from "../hooks/useLocalStorage.ts";
// Types
import {PersonHistory} from "../types/index.types.ts";
// components
import C_ErrorHandle from "../components/C_ErrorHandle.tsx";
import C_Person_Placeholder from "../components/C_Person_Placeholder.tsx";

const Single_Person = () => {
	const { id } = useParams()
	const personId = Number(id)
	const {
		data,
		isLoading,
		isSuccess,
		isError,
	} = useGetPerson(personId)
	
	const [personList, setPersonList] = useLocalStorage<PersonHistory[]>('personHistory', [])
	
	if (personId && data) {
		if (!personList.some((obj: PersonHistory) => obj.name === data.name)) {
			setPersonList([{
				id: personId,
				name: data.name,
				profile_path: !data.profile_path ? '' : data.profile_path
			}, ...personList.slice(0,9)])
		}
	}
	
	return (
		<div className={'body'}>
			{isLoading && <C_Person_Placeholder />}

			{isSuccess && data ? (
				<div className={'person__wrap'}>
					<img className={'person__img'} src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt={data.name} />
					<h2 className={'person__name'}>{data.name}</h2>
					<div className={'person__info'}>
						<p>{data.gender === 1 ? 'Actress' : 'Actor'}</p>
						<p>Birthday: {data.birthday} {!data.deathday ? `(age ${new Date().getFullYear() - new Date(data.birthday).getFullYear()})` : null }</p>
						{data.deathday ? <p>Deathday: {data.deathday} {data.deathday ? `(age ${new Date(data.deathday).getFullYear() - new Date(data.birthday).getFullYear()})` : null }</p> : null }
						<p>Place of birth: <span> {data.place_of_birth}</span></p>
						<p>Known for {data.movie_credits.cast.length} movies</p>
					</div>
					<div className={'person__biography'}>
						<h2>Biography</h2>
						{data.biography}
					</div>
					<h2 className={'person__starring'}>Starring in</h2>
					<div className={'person__cast'}>
						{data.movie_credits.cast.map(c => (
							<Link to={`/movie/${c.id}`} key={c.id}>
								<img src={c.poster_path === null ? 'https://placehold.co/200x30 0/212529/e5a00d?text=!\\nimage\\nmissing&font=montserrat' : `https://image.tmdb.org/t/p/w200${c.poster_path}`} alt={c.title} />
								<p>{c.title} as {c.character}</p>
							</Link>
						))}
					</div>

				</div>
			) : null}
			{isError ? (
				<C_ErrorHandle variant={'danger'} msg={'Something went wrong when fetching this person\'s info.'} />
			) : null}
		</div>
	)
}
export default Single_Person