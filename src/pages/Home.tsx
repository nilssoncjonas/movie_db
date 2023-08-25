
import { useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import C_SearchForm from "../components/C_SearchForm.tsx";

const Home = () => {
	// TODO se de senaste 10 filmerna man visat, historiken ska överleva mellan sessioner
	const queryClient = useQueryClient()
	const navigate = useNavigate()

	const onSearch = (searchQuery: string) => {
		queryClient.invalidateQueries(['search'])
		navigate(`/search?query=${searchQuery}&page=1`)
	}

	return (
		<>

			{/* TODO Besökaren ska kunna söka efter filmer och se vilka filmer (med paginering) som matchar sökfrågan, eller om inga filmer matchar min sökfråga. Både sökfråga och paginering ska bibehållas vid omladdning av sidan.*/}
			<div className={'h2__wrap'}>
				<h2>Welcome!</h2>
			</div>
			<C_SearchForm onSearch={onSearch}/>
		</>
	)
}

export default Home