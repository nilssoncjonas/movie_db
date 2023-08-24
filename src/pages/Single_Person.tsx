import useGetData from "../hooks/useGetData.ts";
import {SinglePerson} from "../types/person.types.ts";
import {useParams} from "react-router-dom";

const Single_Person = () => {
    const {id} = useParams()
    const personId = Number(id)
    const {
        data,
        isSuccess,
        isError
    } = useGetData<SinglePerson>(['person/', `${personId}`], `person/${personId}?region=se`)
    console.log(personId)
    console.log(data)
    return (
        <>
        </>
    ) 
}
export default Single_Person