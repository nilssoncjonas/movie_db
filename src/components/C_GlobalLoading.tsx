import {useIsFetching} from "@tanstack/react-query"
import Spinner from "react-bootstrap/Spinner"
const C_GlobalLoading = () => {
    const isFetching = useIsFetching()
    return isFetching
        ? (
            <div id="fetching__wrap">
                <Spinner animation="grow" variant="warning" />
            </div>
        ) : null
}
export default C_GlobalLoading