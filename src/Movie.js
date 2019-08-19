import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}


function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}

Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

MoviePoster.propTypes= {
    poster: PropTypes.string.isRequired
}

export default Movie