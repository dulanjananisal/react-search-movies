import React from "react";

const MovieData = ({details}) => {

    let img = `https://image.tmdb.org/t/p/w500/${details.poster_path}`;
    let pathId = `/details/${details.id}`;

    return ( 
        <div className="movies-card">
            <div className="img">
                <img src={img} alt="..." />
            </div>
            <div className="details">
                <h2>{details.original_title}</h2>
                <p>{details.release_date}</p>
                <a href={pathId}><button>More Details</button></a>
            </div>
        </div>
     );
}
 

const Main = ({searchText,searchResult}) => {

    let searchResults = searchResult.map((details, key) => {
        return <MovieData details={details} key={key}/>
    })

    return ( 
        <div className="main-container">
            <div className="search-text">
                {searchText && <h3>Your Looking For <i>"{searchText}"</i></h3>}
            </div>
            <div className="main-movies">
                {searchResults}
            </div>
        </div>
     );
}
 
export default Main;