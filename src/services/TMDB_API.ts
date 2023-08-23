import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': "application/json",
		'accept': 'application/json',
	}
})
const get = async <T>(endpoint: string) => {
	const res = await instance.get<T>(BASE_URL + endpoint + API_KEY)
	return res.data
}