import React from 'react'
import Button from "react-bootstrap/Button";

interface Props {
	page: number
	total_pages: number
	hasPrevPage: boolean
	hasNextPage: boolean
	prevPage: () => void
	nextPage: () => void
}

const C_Pagination: React.FC<Props> = ({prevPage, nextPage, hasNextPage, hasPrevPage, page, total_pages }) => {

	return (
		<>
			<div className={'m-3 px-4 d-flex justify-content-between align-items-center'}>
				<Button variant="outline-warning" disabled={!hasPrevPage} onClick={prevPage}>prev page</Button>
				<p>Page {page} / {total_pages}</p>
				<Button variant="outline-warning" disabled={!hasNextPage} onClick={nextPage}>next page</Button>
			</div>
		</>
	)
}

export default C_Pagination