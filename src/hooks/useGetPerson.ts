import useGetData from "./useGetData.ts";
import { SinglePerson } from "../types/person.types.ts";

const useGetPerson = (personId: number) => {
	return useGetData<SinglePerson>(['person/', `${personId}`], `person/${personId}&?append_to_response=movie_credits`)
}

export default useGetPerson