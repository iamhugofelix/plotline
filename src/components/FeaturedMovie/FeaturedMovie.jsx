import { useEffect, useState } from "react";
import { options } from "../../utils";
import StarRating from "../StarRating/StarRating";
import Button from "../Buttons/Buttons";

export default function TestingFetch({ type = "movie" }) {
  const [list, setList] = useState([]);
  const [topItem, setTopItem] = useState(null);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get popular list and choose the best rated item
  useEffect(() => {
    async function loadPopular() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/popular`,
          options
        );
        const json = await res.json();
        const results = Array.isArray(json.results) ? json.results : [];
        setList(results);

        // pick the best rated item (make a copy before sorting)
        const best = results.length
          ? results.sort((a, b) => b.vote_average - a.vote_average)[0]
          : null;
        setTopItem(best);
      } catch (e) {
        console.log("error", e);
      } finally {
        setIsLoading(false);
      }
    }

    loadPopular();
  }, [type]);

  // Fetch the top item full details
  useEffect(() => {
    if (!topItem) return;

    async function loadDetails() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${topItem.id}`,
          options
        );
        const json = await res.json(); // this is a single object
        setDetails(json);
      } catch (e) {
        console.log("error", e);
      } finally {
        setIsLoading(false);
      }
    }

    loadDetails();
  }, [topItem, type]);

  if (!topItem) {
    return <div>{isLoading ? "Loading…" : "No data yet"}</div>;
  }

  return (
    <div
      className="featured"
      style={{
        backgroundImage: `
          linear-gradient(to top, #09090b, transparent),
          url(https://image.tmdb.org/t/p/w1280/${topItem.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
    >
      <div className="featured-content">
        <div className="featured-categories">
          <span className="pill pill-red pill--sm">Featured</span>
          {details?.genres.slice(0, 3).map((genre) => {
            return (
              <span className="pill pill-transparent pill--sm" key={genre.id}>
                {genre.name}
              </span>
            );
          })}
        </div>
        <h1>{topItem.title}</h1>
        <p>{topItem.overview}</p>
        <div className="featured-metadata">
          <p>{topItem.release_date.slice(0, 4)}</p>
          <p>·</p>
          <StarRating rating={topItem.vote_average} />
        </div>
      </div>

      <div className="featured-actions">
        <Button type="white" size="md">
          Learn more
        </Button>
      </div>
    </div>
  );
}
