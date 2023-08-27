import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Props {
	onSearch: (searchQuery: string) => void

}


const C_SearchForm: React.FC<Props> = ({onSearch}) => {

	const [searchInput, setSearchInput] = useState('')
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSearch(searchInput)

	}
    return (
        <>
					<div className={'form__wrap'} >
						<Form className="d-flex" onSubmit={handleSubmit}>
							<Form.Control
								onChange={e => setSearchInput(e.target.value)}
								value={searchInput}
								required
								type="search"
								placeholder="Movie search..."
								className="me-2"
								aria-label="Search"
							/>
							<Button type={"submit"} variant="outline-warning" disabled={!searchInput.trim()}>Search</Button>
						</Form>
					</div>
        </>
    )
}

export default C_SearchForm