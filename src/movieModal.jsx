import React from "react";
import './App.css';

const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

                <button className="closeBtn" onClick={onClose}>X</button>

                <div className="modalContent">
                    <img 
                        src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/400"} 
                        alt={movie.Title}
                    />

                    <div className="modalDetails">
                        <h2>{movie.Title} ({movie.Year})</h2>
                        <p><b>Genre:</b> {movie.Genre}</p>
                        <p><b>Runtime:</b> {movie.Runtime}</p>
                        <p><b>Director:</b> {movie.Director}</p>
                        <p><b>Cast:</b> {movie.Actors}</p>
                        <p><b>Plot:</b> {movie.Plot}</p>
                        <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MovieModal;
