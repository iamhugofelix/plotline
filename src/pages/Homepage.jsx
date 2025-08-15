import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";
import PageSection from "../components/PageSection/PageSection";
import PopularMovies from "../components/Popular/PopularMovies";
import PopularSeries from "../components/Popular/PopularSeries";


// NOT IN USE

export default function Homepage() {

  console.log("Homepage rendering");
    
    return (
      <>
        <FeaturedMovie />
        <PageSection sectionTitle={"Popular Movies"} horScroll={true}>
          <PopularMovies />
        </PageSection>
        <PageSection sectionTitle={"Popular Series"} horScroll={true}>
          <PopularSeries />
        </PageSection>
      </>
    );
    
}