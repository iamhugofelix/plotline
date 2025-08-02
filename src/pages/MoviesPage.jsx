import NowPlayingMovies from "../components/NowPlayingMovies";
import PopularMovies from "../components/PopularMovies";
import Section from "../components/Section";

export default function MoviesPage() {
    
    return (
      <div>
        <Section sectionTitle={"Popular Movies"}>
          <PopularMovies />
        </Section>
        
        <Section sectionTitle={"Now Playing"}>
          <NowPlayingMovies />
        </Section>

      </div>
    );
}