import { useEffect, useState } from "react";
import { options } from "../../utils";
import Card from "../Card/Card";

export default function PopularSeries() {
    const [isLoading, setIsLoading] = useState(false);
    const [series, setSeries] = useState([])
    const hasData = series.length > 0;


    useEffect(() => {
        const fetchSeries = async () => {

        setIsLoading(true);
        
        try {
            const data = await fetch(
                    `https://api.themoviedb.org/3/tv/popular`,
                    options // const imported from utils.js
            );
            const popularSeriesList = await data.json();

            setSeries(popularSeriesList.results);

            } catch (error) {
                
                console.log('error', error);
            
            } finally {
                
                setIsLoading(false);
            
            }
        };

        fetchSeries();

    }, []);

    if (isLoading === true) return <span>Loading...</span>;
    
    return (
        <div className='flex'>
          {hasData
            ? series.map((serie) => {
                return (
                  <Card
                    key={serie.id}
                    cardPoster={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                    cardTitle={serie.name}
                    cardYear={serie.first_air_date.slice(0, 4)}
                    cardRating={serie.vote_average}
                  />
                );
              })
          : ""}
        </div>
    );
}