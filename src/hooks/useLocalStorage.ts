import React, {useEffect, useState} from "react";

type ReturnType<T> = [
	T,
	React.Dispatch<React.SetStateAction<T>>
]
const useLocalStorage = <T>(key: string, initialValue?: T): ReturnType<T> => {

const [value, setValue] = useState(() => {
	
	const storedValue = window.localStorage.getItem(key) ?? '[]'
	
	return storedValue
		? JSON.parse(storedValue)
		: initialValue
})
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])
	
    return [
		value,
		setValue
    ]
}
    
export default useLocalStorage