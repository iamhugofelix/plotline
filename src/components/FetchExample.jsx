import { useEffect, useState } from "react"
import { options } from "../utils";

export default function FetchExample() {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([])

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

    const hasData = movies.lenght

     console.log('movies', movies);
     console.log("hasData", hasData);
    
    return (
        <div>
            <h3>Movies List</h3>
            
            {!hasData ? movies.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h1>{movie.title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                    </div>
                )
            }) : ''}

        </div> 
    )
}