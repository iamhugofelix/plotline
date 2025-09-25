import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../../services/fetchTrendingMovies";
import { fetchMovieDetails } from "../../../services/fetchMovieDetails";
import HeroSection from "../../PageSections/HeroSection";
import Button from "../../Buttons/Buttons";
import { ArrowRight } from "lucide-react";
import Pill from "../../Pills/Pills";

export default function TopMovie() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTopMovie = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTopMovie(data[0]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTopMovie();
  }, []);
  
  useEffect(() => {
    if (!topMovie.id) return

    const loadMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(topMovie.id);

        setMovieDetails(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovieDetails();
  }, [topMovie]);

  {
    isLoading && <p>Loading...</p>;
  }

  // DELETE LATER
  // console.log("top movies: ", topMovie);
  console.log('movie details: ', movieDetails);

  return (
    <>
      {topMovie && (
        <HeroSection
          heroImage={movieDetails.backdrop_path}
          heroTitle={movieDetails.title}
          heroDescription={movieDetails.overview}
          heroYear={movieDetails.release_date?.slice(0, 4)}
          heroRating={movieDetails.vote_average}
          isFeatured={true}
          heroCategories={movieDetails.genres?.map((genre) => (
            <Pill type="transparent" size="md" key={genre.id}>
              {genre.name}
            </Pill>
          ))}
        >
          <Button
            url={`/movies/${movieDetails.id}`}
            type="transparent"
            size="lg"
          >
            View details
            <ArrowRight size={18} />
          </Button>
        </HeroSection>
      )}
    </>
  );
}
