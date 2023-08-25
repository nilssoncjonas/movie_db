import {Route, Routes} from "react-router-dom";
// style
import './assets/scss/style.scss'
// pages
import Home from "./pages/Home.tsx";

import Movie_Index from "./pages/Movie_Index.tsx";
import Now_Playing from "./pages/Now_Playing.tsx";
import Top_Rated from "./pages/Top_Rated.tsx";
import Popular_Movie from "./pages/Popular_Movie.tsx";
import Single_Movie from "./pages/Single_Movie.tsx";

import Single_Person from "./pages/Single_Person.tsx";

import Genre_Index from "./pages/Genre_Index.tsx";
import Single_Genre from "./pages/Single_Genre.tsx";

import Search_Result from "./pages/Search_Result.tsx";

import NotFound from "./pages/NotFound.tsx";
// components
import C_GlobalLoading from "./components/C_GlobalLoading.tsx";
import C_Navigation from "./components/C_Navigation.tsx";

function App() {
	return (
		<div id={'app'}>
			<C_Navigation/>
			<C_GlobalLoading/>
			{/*TODO footer component*/}
			<Routes>
				<Route path={'/'} element={<Home/>}/>

				<Route path={'/movie'}>
					<Route path={''} element={<Movie_Index/>}/>
					<Route path={':id'} element={<Single_Movie/>}/>
					<Route path={'now_playing'} element={<Now_Playing/>}/>
					<Route path={'top_rated'} element={<Top_Rated/>}/>
					<Route path={'popular'} element={<Popular_Movie/>}/>
				</Route>

				<Route path={'/person'}>
					<Route path={':id'} element={<Single_Person />} />
				</Route>

				<Route path={'/genre'}>

					<Route path={''} element={<Genre_Index />} />
					<Route path={':id'} element={<Single_Genre />} />

				</Route>
					<Route path={'/search'} element={<Search_Result />} />

				<Route path={'*'} element={<NotFound/>}/>

			</Routes>
		</div>
	)
}

export default App
