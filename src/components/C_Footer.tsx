import {Link} from "react-router-dom";

const C_Footer = () => {

    return (
        <>

            <footer>
                <div className={'footer__menu'}>

                    <h3>The Movie DB</h3>
                    <ul>
                        <li><Link to={'/movie/now_playing'}>Now Playing</Link></li>
                        <li><Link to={'/movie/popular'}>Trending Movies</Link></li>
                        <li><Link to={'/movie/top_rated'}>Top Rated Movies</Link></li>
                    </ul>


                </div>
                <hr/>
                <div className={'footer__info'}>

                    <p className={'JN__logo'}><a href={'https://www.jonasnilsson.dev'}><img
                        src={'https://www.jonasnilsson.dev/img/svg/jn_logo.svg'} alt="Jonas Nilsson"/> <span
                        id={'JN__link'}>jonasnilsson.dev</span></a></p>
                    {/*<hr/>*/}

                    <p><a href={'https://developer.themoviedb.org/docs'}>All data provided by <span>TMDB-API</span></a>
                    <a href={'https://www.themoviedb.org/'}>
                        <img className={'TMDB__logo'}
                        src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'}
                        alt="The Movie DB . org"/></a>
                    </p>

                </div>
            </footer>

        </>

    )
}

export default C_Footer