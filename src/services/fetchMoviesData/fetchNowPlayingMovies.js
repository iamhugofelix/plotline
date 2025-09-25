import { options } from "../utils";

export async function fetchNowPlayingMovies() {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading now playing movies", error);
    return null;
  }
}
