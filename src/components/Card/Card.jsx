import StarRating from "../StarRating/StarRating";

export default function MovieCard({cardPoster, cardTitle, cardYear, cardRating}) {
    
    return (
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/original/${cardPoster}`}
          alt={`${cardTitle} Poster`}
          className="card-poster"
        />
        <div className="card-info">
          <h3 className="h6">{cardTitle}</h3>
        </div>
        <div className="card-details">
          <span className="p">{cardYear}</span>
          <span className="p">&middot;</span>
          <StarRating rating={cardRating} />
        </div>
      </div>
    );
}