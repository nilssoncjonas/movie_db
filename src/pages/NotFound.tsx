import {useNavigate} from "react-router-dom";
// style
import Button from "react-bootstrap/Button";

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div  className={'body'}>
            <div className={'h2__wrap'}><h2>Nope, not found... ¯\_(ツ)_/¯</h2>
                <p>Here isn't any movies or anything exciting!</p>
            <Button variant={"outline-warning"} onClick={()=> navigate('/')}>Take me to the frontpage!</Button></div>
        </div>
    )
}

export default NotFound