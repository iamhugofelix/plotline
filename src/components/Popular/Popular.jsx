import { useEffect, useState } from "react";
import { options } from "../../utils";
import MovieCard from "../MovieCard/MovieCard";

export default function PopularMovies({type = 'movie'}) {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([])
    const hasData = movies.length > 0;


    useEffect(() => {
        const fetchMovies = async () => {

        setIsLoading(true);
        
        try {
            const data = await fetch(
                    `https://api.themoviedb.org/3/${type}/popular`,
                    options // const imported from utils.js
            );
            const newMoviesList = await data.json();

            setMovies(newMoviesList.results);

            } catch (error) {
                
                console.log('error', error);
            
            } finally {
                
                setIsLoading(false);
            
            }
        };

        fetchMovies();

    }, []);

    if (isLoading === true) return <span>Loading...</span>;

    // console.log('movies', movies);
    // console.log("hasData", hasData);
    
    return (
        <div className="grid">
          {hasData
            ? movies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    moviePoster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    movieTitle={movie.title}
                    movieYear={movie.release_date.slice(0, 4)}
                    movieRating={movie.vote_average}
                  />
                );
              })
            : ""}
        </div>
    );
}