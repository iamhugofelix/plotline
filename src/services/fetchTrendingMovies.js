import { options } from "./utils";

export async function fetchTrendingMovies() {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/popular`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading trending movies", error);
    return null;
  }
}
