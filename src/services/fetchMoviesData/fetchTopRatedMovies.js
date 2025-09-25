import { options } from "../utils";

export async function fetchTopRatedMovies() {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading top rated movies", error);
    return null;
  }
}
