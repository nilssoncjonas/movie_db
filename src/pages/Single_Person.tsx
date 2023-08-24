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

    console.log(personId, data)

    return (
        <><div className={'h2__wrap'}><h2>Single Person</h2></div>
        </>
    ) 
}
export default Single_Person