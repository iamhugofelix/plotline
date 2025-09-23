
import TopMovie from "../components/TopMovie/TopMovie";
import TrendingMovies from "../components/TrendingMovies/TrendingMovies";

export default function Homepage() {

  console.log("Homepage rendering");
    
    return (
      <>
        <TopMovie />
        <TrendingMovies />
      </>
    );
    
}