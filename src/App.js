import { useState, useEffect } from "react";
import MovieCard from "./movieCard.jsx";
import MovieModal from "./movieModal.jsx";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "https://www.omdbapi.com/?apikey=11e0eaaf";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search || []);
    };

    const fetchMovieDetails = async (id) => {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();
        setSelectedMovie(data);
    };

    useEffect(() => {
        searchMovies('Cars');
    }, []);

    return (
        <div className="app">
            <h1>filmbase</h1>

            <div className="search">
                <input
                    placeholder="Search any movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') searchMovies(searchTerm)
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard 
                            key={movie.imdbID}
                            movie={movie}
                            onSelect={fetchMovieDetails}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found...</h2>
                </div>
            )}

            <MovieModal 
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
            />

            <div className="footer">
                <p>Created by Rounak</p>
            </div>
        </div>
    );
};

export default App;
