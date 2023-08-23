import {Route, Routes} from "react-router-dom";
// style
import './assets/scss/style.scss'
// pages
import Home from "./pages/Home.tsx";
import Now_Playing from "./pages/Now_Playing.tsx";
import NotFound from "./pages/NotFound.tsx";
// components
import C_GlobalLoading from "./components/C_GlobalLoading.tsx";
import C_Navigation from "./components/C_Navigation.tsx";

function App() {
    return (
        <div id={'app'}>
            <C_Navigation />
            <C_GlobalLoading />
            <Routes>
							<Route path={'/'} element={<Home/>}/>

							<Route path={'/movie'}>
							{/*<Route path={'/'} element={} />*/}
							<Route path={'now_playing'} element={<Now_Playing />} />
							{/*	<Route path={':id'} element={} />*/}
							</Route>

							{/*<Route path={'/person'}>*/}
							{/*	<Route path={'/'} element={} />*/}
							{/*	<Route path={'/:id'} element={} />*/}
							{/*</Route>*/}

							<Route path={'*'} element={<NotFound />} />

            </Routes>
        </div>
    )
}
export default App
