
import NowPlayingMovies from "../components/NowPlayingMovies/NowPlayingMovies";
import TopMovie from "../components/TopMovie/TopMovie";
import TrendingMovies from "../components/TrendingMovies/TrendingMovies";

export default function Homepage() {

  console.log("Homepage rendering");
    
    return (
      <>
        <TopMovie />
        <div className="page-content">
          <TrendingMovies />
          <NowPlayingMovies />
        </div>
      </>
    );
    
}