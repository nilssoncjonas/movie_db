import useGetData from "./useGetData.ts";
import {SinglePerson} from "../types/person.types.ts";

const useGetPerson = (personId: number) => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetData<SinglePerson>(['person/', `${personId}`], `person/${personId}&?append_to_response=movie_credits`)
    return {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    }
}

export default useGetPerson