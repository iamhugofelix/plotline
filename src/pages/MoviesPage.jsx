import MovieCategories from "../components/MovieComponents/MovieCategories/MovieCategories";
import NowPlayingMovies from "../components/MovieComponents/NowPlayingMovies/NowPlayingMovies";
import TopMovie from "../components/MovieComponents/TopMovie/TopMovie";
import TopRatedMovies from "../components/MovieComponents/TopRatedMovies/TopRatedMovies";
import TrendingMovies from "../components/MovieComponents/TrendingMovies/TrendingMovies";

export default function MoviesPage() {    
    return (
      <>
        <TopMovie />
        <div className="page-content">
          <NowPlayingMovies />
          <TrendingMovies />
          <TopRatedMovies />
          <MovieCategories />
        </div>
      </>
    );
    
}
