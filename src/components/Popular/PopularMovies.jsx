import { useEffect, useState } from "react";
import { options } from "../../utils";
import Card from "../Card/Card";

export default function PopularMovies() {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([])
    const hasData = movies.length > 0;


    useEffect(() => {
        const fetchMovies = async () => {

        setIsLoading(true);
        
        try {
            const data = await fetch(
                    `https://api.themoviedb.org/3/movie/popular`,
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
        <div className='flex'>
          {hasData
            ? movies.map((movie) => {
                return (
                  <Card
                    key={movie.id}
                    cardPoster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    cardTitle={movie.title}
                    cardYear={movie.release_date.slice(0, 4)}
                    cardRating={movie.vote_average}
                  />
                );
              })
          : ""}
        </div>
    );
}