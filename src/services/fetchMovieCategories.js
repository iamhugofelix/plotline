import { options } from "./utils";

// Get movie genres
export async function getGenres() {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
      options
    );
    const data = await result.json();

    return data.genres;
  } catch (error) {
    console.log("Failed loading genres:", error);
    return [];
  }
}

// Get genres backdrop (first movie backdrop)
export async function getBackdropForGenre(genreId) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`,
      options
    );
    const data = await result.json();

    if (data.results.length > 0) {
      // pick a random movie from the results
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomMovie = data.results[randomIndex];

      if (randomMovie.backdrop_path) {
        return `https://image.tmdb.org/t/p/w500${randomMovie.backdrop_path}`;
      }
    }
    return null;
  } catch (error) {
    console.log(`Failed loading backdrop for genre ${genreId}:`, error);
    return null;
  }
}

// Return the genre + the backdrop
export async function getGenresWithBackgrounds() {
  try {
    const genres = await getGenres();

    // Run all backdrop fetches in parallel
    const promises = genres.map(async (genre) => {
      const backdrop = await getBackdropForGenre(genre.id);
      return {
        id: genre.id,
        name: genre.name,
        backdrop: backdrop,
      };
    });

    return await Promise.all(promises);
  } catch (error) {
    console.log("Failed combining genres + backdrops:", error);
    return [];
  }
}
