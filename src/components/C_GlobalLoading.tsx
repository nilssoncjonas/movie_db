import { useIsFetching } from "@tanstack/react-query"
// style
import Spinner from "react-bootstrap/Spinner"

const C_GlobalLoading = () => {
	const isFetching = useIsFetching()
	return isFetching
		? (
			<Spinner id={'isFetching__spinner'} animation="border" variant="warning" />
		) : null
}
export default C_GlobalLoading