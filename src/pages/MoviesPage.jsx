import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular/Popular";
import PageSection from "../components/PageSection/PageSection";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";

export default function MoviesPage() {
    
    return (
      <>
        <FeaturedMovie />
        <PageSection sectionTitle={"Popular Movies"}>
          <Popular />
        </PageSection>
      </>
    );
}