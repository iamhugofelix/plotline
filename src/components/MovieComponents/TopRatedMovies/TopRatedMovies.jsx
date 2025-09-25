import { useEffect, useState } from "react";
import FullWidthSection from "../../PageSections/FullWidthSection";
import MovieCard from "../../Card/Card";
import { fetchTopRatedMovies } from "../../../services/fetchMoviesData/fetchTopRatedMovies";

export default function TopRatedMovies () {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const loadTopRatedMovies = async () => {
            try {
                const data = await fetchTopRatedMovies();
                setTopRatedMovies(data)
            } finally {
                setIsLoading(false);
            }
        }

        loadTopRatedMovies();
    }, [])

    {isLoading && <p>Loading...</p>}

    // DELETE LATER
    // console.log(trendingMovies);

  return (
    <FullWidthSection sectionTitle={"Top 10 Movies of All Time"}>
      {topRatedMovies.slice(0, 10).map((movie, index) => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            cardPoster={movie.poster_path}
            cardTitle={movie.title}
            cardYear={movie.release_date.slice(0, 4)}
            cardRating={movie.vote_average}
            cardPosition={index + 1}
          />
        );
      })}
      <div className="hor-spacer"></div>
    </FullWidthSection>
  );
}