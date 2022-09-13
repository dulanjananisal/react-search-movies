import React from "react";
import { useParams } from 'react-router-dom';

const MovieDetails = () => {

    let {id} = useParams()
    console.log(id)

    let [idData,setIdData] = React.useState({})

    React.useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c5a0e90027a3182835d4703f43119fa4&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setIdData(data)
            })

    }, [id])

    let idDataImg = `https://image.tmdb.org/t/p/original/${idData.backdrop_path}`;
    let movieImg = `https://image.tmdb.org/t/p/w500/${idData.poster_path}`

    return ( 
        <div className="details-container">
            <div className="details-navbar">
                <div className="nav-left">
                    <a href="/"><img src="https://imgs.search.brave.com/k-PTi6DU3YPlpZKrRdRS6217c-y1sVe5fn9cVCo9FiI/rs:fit:1118:1103:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvbW92aWUtcG5n/LWhkLW1vdmllLWxv/Z28tY2xpcGFydHMt/MjUyNDkxMC0xMTE4/LnBuZw" alt="..."/></a>
                </div>
                <div className="nav-middle">
                    <h1>Find Movies, TV shows and more</h1>
                </div>
                <div className="nav-right">
                    <button>LOGIN</button>
                </div>
            </div>
            <div className="details-details" style={{backgroundImage: `url(${idDataImg})`}}>
                <div className="details-card">
                    <div className="left-side">
                        <img src={movieImg} alt='...' />
                    </div>
                    <div className="right-side">
                        <button>Watch now</button>
                        <h1>{idData.original_title}</h1>
                        <p className="title">{idData.overview}</p>
                        <p><b>Released: </b>{idData.release_date}</p>
                        <p><b>Duration: </b>{idData.runtime} min</p>
                        <p><b>Popularity: </b>{idData.popularity}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MovieDetails;