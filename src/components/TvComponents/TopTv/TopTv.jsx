import { useEffect, useState } from "react";
import HeroSection from "../../PageSections/HeroSection";
import Button from "../../Buttons/Buttons";
import { ArrowRight } from "lucide-react";
import Pill from "../../Pills/Pills";
import { fetchTrendingTv } from "../../../services/fetchTvData/fetchTrendingTV";
import { fetchTvDetails } from "../../../services/fetchTvData/fetchTvDetails";

export default function TopTv() {
  const [tvDetails, setTvDetails] = useState([]);
  const [topTv, setTopTv] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTopTv = async () => {
      try {
        const data = await fetchTrendingTv();
        setTopTv(data[0]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTopTv();
  }, []);
  
  useEffect(() => {
    if (!topTv.id) return

    const loadTvDetails = async () => {
      try {
        const data = await fetchTvDetails(topTv.id);

        setTvDetails(data);
      } finally {
        setIsLoading(false);
      }
    };

    loadTvDetails();
  }, [topTv]);

  {
    isLoading && <p>Loading...</p>;
  }

  console.log('TV details: ', tvDetails);

  return (
    <>
      {topTv && (
        <HeroSection
          heroImage={tvDetails.backdrop_path}
          heroTitle={tvDetails.name}
          heroDescription={tvDetails.overview}
          heroYear={tvDetails.first_air_date?.slice(0, 4)}
          heroRating={tvDetails.vote_average}
          isFeatured={true}
          heroCategories={tvDetails.genres?.map((genre) => (
            <Pill type="transparent" size="md" key={genre.id}>
              {genre.name}
            </Pill>
          ))}
        >
          <Button
            url={`/movies/${tvDetails.id}`}
            type="transparent"
            size="lg"
          >
            View details
            <ArrowRight size={18} />
          </Button>
        </HeroSection>
      )}
    </>
  );
}
