import React from 'react'
import {useNavigate} from "react-router-dom";
// style
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

interface Props {
    variant: string
    msg: string
    reFetch: () => void
}

const C_ErrorHandle: React.FC<Props> = ({variant, msg, reFetch}) => {
const navigate = useNavigate()
    return (
        <div className={'error__wrap'}>
            <Alert key={variant} variant={variant}>
                Whops! {msg}
                <Button className={'d-block mt-2'} variant={`outline-${variant}`} size={'sm'} onClick={() => reFetch()}>Try
                    Again...</Button>
                <Button variant={`outline-${variant}`} className={'mt-2'} onClick={() => navigate('/')}> Or Go Back To Startpage!</Button>
            </Alert>
        </div>
    )
}

export default C_ErrorHandle