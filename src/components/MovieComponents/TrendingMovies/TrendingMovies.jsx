import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../../services/fetchTrendingMovies";
import FullWidthSection from "../../PageSections/FullWidthSection";
import MovieCard from "../../Card/Card";

export default function TrendingMovies () {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const loadTrendingMovies = async () => {
            try {
                const data = await fetchTrendingMovies()
                setTrendingMovies(data)
            } finally {
                setIsLoading(false);
            }
        }

        loadTrendingMovies();
    }, [])

    {isLoading && <p>Loading...</p>}

    // DELETE LATER
    // console.log(trendingMovies);

  return (
    <FullWidthSection sectionTitle={"Trending movies this week"}>
      {trendingMovies.slice(1).map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            cardPoster={movie.poster_path}
            cardTitle={movie.title}
            cardYear={movie.release_date.slice(0, 4)}
            cardRating={movie.vote_average}
          />
        );
      })}
      <div className="hor-spacer"></div>
    </FullWidthSection>
  );
}