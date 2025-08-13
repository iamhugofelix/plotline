import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";
import PageSection from "../components/PageSection/PageSection";
import PopularMovies from "../components/Popular/Popular";


export default function Homepage() {
    
    return (
      <>
        <FeaturedMovie />
        <PageSection sectionTitle={"Popular Movies"}>
          <PopularMovies />
        </PageSection>
      </>
    );
    
}