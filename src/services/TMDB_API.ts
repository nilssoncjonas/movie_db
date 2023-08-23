import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const FAKE_DELAY = 1500
const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': "application/json",
		'accept': 'application/json',
	}
})
export const get = async <T>(endpoint: string) => {
	console.log(endpoint)
	const res = await instance.get<T>(BASE_URL + endpoint + API_KEY)
	// Simulate a delay
	!!FAKE_DELAY && await new Promise((r) => setTimeout(r, FAKE_DELAY))
	return res.data
}