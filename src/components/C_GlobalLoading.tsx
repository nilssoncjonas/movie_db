import {useIsFetching} from "@tanstack/react-query"
import Spinner from "react-bootstrap/Spinner"
const C_GlobalLoading = () => {
    const isFetching = useIsFetching()
    return isFetching
        ? (
            <Spinner id={'isFetching__spinner__wrap'} animation="border" variant="warning" />
        ) : null
}
export default C_GlobalLoading