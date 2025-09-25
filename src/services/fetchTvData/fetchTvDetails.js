import { options } from "../utils";

export async function fetchTvDetails(id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/tv/${id}`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading tv details", error);
    return null;
  }
}

export async function fetchTvCredits(id) {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits`,
      options
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("Fail loading tv credits", error);
    return null;
  }
}
