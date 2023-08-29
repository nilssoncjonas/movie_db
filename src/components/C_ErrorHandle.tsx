import React from 'react'
import { useNavigate } from "react-router-dom";
// style
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

interface Props {
	variant: string
	msg: string
}

const C_ErrorHandle: React.FC<Props> = ({ variant, msg }) => {
	const navigate = useNavigate()
	return (
		<div className={'error__wrap'}>
			<Alert key={variant} variant={variant}>
				Whops! {msg}
				<Button variant={`outline-${variant}`} className={'mt-2'} onClick={() => navigate('/')}> Or Go Back To Startpage!</Button>
			</Alert>
		</div>
	)
}

export default C_ErrorHandle