import { options } from "./utils";

export async function fetchMovieDetails(id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading trending movies", error);
    return null;
  }
}
