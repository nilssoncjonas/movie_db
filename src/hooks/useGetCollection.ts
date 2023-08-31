import useGetData from "./useGetData.ts";
import {MovieCollection} from "../types/index.types.ts";

const useGetCollection = (collectionId: number) => {
	return useGetData<MovieCollection>(['collection/', collectionId], `collection/${collectionId}?language=en-US`)
	
}

export default useGetCollection