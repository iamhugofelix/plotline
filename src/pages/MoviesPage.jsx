import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular/PopularMovies";
import PageSection from "../components/PageSection/PageSection";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";

export default function MoviesPage() {
    
    return (
      <>
        <FeaturedMovie position={1} />
        <PageSection sectionTitle={"Popular Movies"} horScroll={true}>
          <Popular />
        </PageSection>
      </>
    );
}