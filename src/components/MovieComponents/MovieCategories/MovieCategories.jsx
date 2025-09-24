import { useEffect, useState } from "react";
import FullWidthSection from "../../PageSections/FullWidthSection";
import { getGenresWithBackgrounds } from "../../../services/fetchMovieCategories";
import GenreCard from "../../Card/GenreCard";

export default function MovieCategories () {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
    async function fetchData() {
        const result = await getGenresWithBackgrounds();
        setGenres(result);
    }
    fetchData();
    }, []);

  return (
    <FullWidthSection sectionTitle={"Browse Movie Genres"}>
      {genres.map((genre) => (
        <GenreCard
          key={genre.id}
          genreImage={genre.backdrop}
          genreName={genre.name}
        />
      ))}
      <div className="hor-spacer"></div>
    </FullWidthSection>
  );
}