import { useEffect, useState } from "react";
import { options } from "../../utils";
import StarRating from "../StarRating/StarRating";
import Button from "../Buttons/Buttons";

export default function FeaturedMovie({ type = "movie" }) {
  const [isLoading, setIsLoading] = useState(false);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      setIsLoading(true);

      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/${type}/popular`,
          options // const imported from utils.js
        );
        const newFeatured = await data.json();
        
        setFeatured(newFeatured.results);

      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  const filterBestRated = featured.sort((a, b) => {
    return b.vote_average - a.vote_average; 
  })

  console.log(filterBestRated[0]);

  return (
    <>
      {featured.length > 0 && (
        <div
          className="featured"
          style={{
            backgroundImage: `
            linear-gradient(to top, #09090b, transparent),
            url(https://image.tmdb.org/t/p/w1280/${filterBestRated[0].backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "top",

            width: "100%",
          }}
        >
          <div className="featured-content">
            <h1>{filterBestRated[0].title}</h1>
            <p>{filterBestRated[0].overview}</p>
            <StarRating rating={filterBestRated[0].vote_average} />
          </div>
          <div className="featured-actions">
            <Button type="transparent" size="md">
              Learn more
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
