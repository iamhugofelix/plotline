import { useEffect, useState } from "react";
import FullWidthSection from "../../PageSections/FullWidthSection";
import MovieCard from "../../Card/Card";
import { fetchNowPlayingMovies } from "../../../services/fetchNowPlayingMovies";

export default function NowPlayingMovies () {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const loadNowPlayingMovies = async () => {
            try {
                const data = await fetchNowPlayingMovies()
                setNowPlayingMovies(data)
            } finally {
                setIsLoading(false);
            }
        }

        loadNowPlayingMovies();
    }, [])

    {isLoading && <p>Loading...</p>}

    // DELETE LATER
    // console.log(trendingMovies);

  return (
    <FullWidthSection sectionTitle={"Now playing"}>
        {nowPlayingMovies.map((movie) => {
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