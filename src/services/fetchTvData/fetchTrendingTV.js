import { options } from "../utils";

export async function fetchTrendingTv() {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week`,
      options
    );
    const data = await result.json();

    return data.results;
  } catch (error) {
    console.log("Fail loading trending tv", error);
    return null;
  }
}
