import { useParams } from "react-router";
import HeroSection from "../components/PageSections/HeroSection";
import { useEffect, useState } from "react";
import { fetchMovieCredits, fetchMovieDetails } from "../services/fetchMovieDetails";
import Pill from "../components/Pills/Pills";
import { Calendar, Clock, Globe } from "lucide-react";

export default function MovieDetailsPage () {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [movieCredits, setMovieCredits] = useState(null)

  useEffect(() => {
    async function loadMovieDetails() {
      const data = await fetchMovieDetails(id);
      setMovie(data)
    }

    loadMovieDetails()
  }, [id])

  useEffect(()=> {
    async function loadMovieCredits() {
      const data = await fetchMovieCredits(id);
      setMovieCredits(data);
    }

    loadMovieCredits();
  }, [id])

  // DELETE LATER
  console.log('Movie Details: ', movie);
  console.log("Movie Credits: ", movieCredits?.cast);

  if (!movie || !movieCredits) return <p>Loading...</p>;

  function formatRuntime (runtime) {
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60

    return `${hours}h ${minutes}m`
  }

  function formatDate (date) {
    const fetchedDate = new Date(`${date}T00:00:00Z`)
    const formattedDate = fetchedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    
    return formattedDate
  }

  return (
    <>
      <HeroSection
        heroImage={movie.backdrop_path}
        heroTitle={movie.title}
        heroYear={movie.release_date?.slice(0, 4)}
        heroRating={movie.vote_average}
        heroCategories={movie.genres?.map((genre) => (
          <Pill type="transparent" size="md" key={genre.id}>
            {genre.name}
          </Pill>
        ))}
      />
      <div className="movie-details-page">
        <div className="left-side">
          <div className="movie-information">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <div className="movie-data">
              <span>
                <Calendar size={16} />
                Released: {formatDate(movie.release_date)}
              </span>
              <span>
                <Clock size={16} />
                Duration: {formatRuntime(movie.runtime)}{" "}
              </span>
              <span>
                <Globe size={16} />
                Language:{" "}
                {new Intl.DisplayNames(["en"], { type: "language" }).of(
                  movie.original_language
                )}
              </span>
            </div>
          </div>
          <div className="movie-cast">
            <h3>Movie cast</h3>
            <div className="movie-actors">
              {movieCredits.cast.slice(0, 10).map((actor) => {
                return (
                  <div className="actor-card">
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                          : "/placeholder-user.png"
                      }
                      alt={`${actor.name} Photo`}
                    />
                    <span className="actor-character">{actor.character}</span>
                    <span className="actor-name">{actor.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right-side">
          <h3>Movie Poster</h3>
          <img
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </div>
      </div>
    </>
  );
}