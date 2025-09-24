
import MovieCategories from "../components/MovieCategories/MovieCategories";
import NowPlayingMovies from "../components/NowPlayingMovies/NowPlayingMovies";
import TopMovie from "../components/TopMovie/TopMovie";
import TopRatedMovies from "../components/TopRatedMovies/TopRatedMovies";
import TrendingMovies from "../components/TrendingMovies/TrendingMovies";

export default function Homepage() {


    
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