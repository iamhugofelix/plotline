
import { useEffect, useState } from "react";
import { options } from "../utils";
import MovieCard from "../components/MovieCard";
import Section from "../components/Section";

export default function MoviesPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([])
    const hasData = movies.lenght;


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
      <div>

        // Popular Movies
        <Section sectionTitle={"Popular Movies"}>
          {!hasData
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
        </Section>

        // Top Rated (Need to change fetch)
        <Section sectionTitle={"Now playing"} isGrid='false'>
          {!hasData
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
        </Section>





      </div>
    );
}