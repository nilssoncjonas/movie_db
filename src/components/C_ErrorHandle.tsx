import React from 'react'
// style
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

interface Props {
    variant: string
    msg: string
    reFetch: () => void
}

const C_ErrorHandle: React.FC<Props> = ({variant, msg, reFetch}) => {

    return (
        <div className={'error__wrap'}>
            <Alert key={variant} variant={variant}>
                Whops! {msg}
                <Button className={'d-block mt-2'} variant={`outline-${variant}`} size={'sm'} onClick={() => reFetch()}>Try
                    again...</Button>
            </Alert>
        </div>
    )
}

export default C_ErrorHandle