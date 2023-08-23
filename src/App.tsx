import {Route, Routes} from "react-router-dom";
// pages
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
    return (
        <>
            <Routes>
							<Route path={'/'} element={<Home/>}/>

							{/*<Route path={'/movie'}>*/}
							{/*<Route path={'/'} element={} />*/}
							{/*	<Route path={':id'} element={} />*/}
							{/*</Route>*/}

							{/*<Route path={'/person'}>*/}
							{/*	<Route path={'/'} element={} />*/}
							{/*	<Route path={'/:id'} element={} />*/}
							{/*</Route>*/}

							<Route path={'*'} element={<NotFound />} />

            </Routes>
        </>
    )
}
export default App
